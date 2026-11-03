/**
 * PROJECT ETERA - SPORTS MODULE
 * Audio Service & Speech Synthesis Engine
 * Features: Local MP3 playback, Web Speech API fallback, Slow/Normal rate control,
 * single-clip concurrency lock, non-blocking error handling, and visual playback state.
 */

class AudioEngine {
  constructor() {
    this.currentAudio = null;
    this.currentUtterance = null;
    this.currentId = null;
    this.isPlaying = false;
    this.playbackRate = 1.0; // 1.0 = Normal, 0.75 = Slow
    this.listeners = new Set();
    this.arabicVoices = [];
    this.selectedVoice = null;
    this.customAudioMap = new Map();

    // Map of pre-existing audio files in workspace
    this.knownAudioFiles = {
      // User's uploaded audio files
      "audio/etera_sports_dialog_m_04_ar.mp3": "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3",
      "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3": "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3",
      "audio/uploaded_0_female_alabu_yawm_aljumuah.mp3": "audio/uploaded_0_female_alabu_yawm_aljumuah.mp3"
    };

    this.initSpeechSynthesis();
  }

  initSpeechSynthesis() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const updateVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        this.arabicVoices = voices.filter(v => v.lang.startsWith("ar"));
        if (this.arabicVoices.length > 0) {
          // Prefer Arabic (Saudi Arabia) or natural voices
          this.selectedVoice = this.arabicVoices.find(v => v.lang === "ar-SA") ||
                               this.arabicVoices.find(v => v.lang.startsWith("ar")) ||
                               this.arabicVoices[0];
        }
      };

      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
  }

  setPlaybackRate(rate) {
    this.playbackRate = Number(rate) || 1.0;
    this.notifyState();
  }

  getPlaybackRate() {
    return this.playbackRate;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyState() {
    for (const listener of this.listeners) {
      try {
        listener({
          isPlaying: this.isPlaying,
          currentId: this.currentId,
          playbackRate: this.playbackRate
        });
      } catch (err) {
        console.error("Audio listener error:", err);
      }
    }
  }

  stop() {
    // Stop HTML Audio element
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }

    // Stop Web Speech Synthesis
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }

    this.isPlaying = false;
    this.currentId = null;
    this.notifyState();
  }

  /**
   * Play audio for a given content item
   * @param {Object} params
   * @param {string} params.id Unique ID for the audio element (for button active states)
   * @param {string} [params.audioFile] Relative URL of mp3 file
   * @param {string} [params.arabicText] Arabic text with/without harakat for speech synthesis
   * @param {string} [params.gender] 'male' or 'female' preference for voice
   * @param {Function} [params.onComplete] Callback when audio finishes
   */
  async play({ id, audioFile, arabicText, gender = "male", onComplete = null }) {
    // If same audio is currently playing, toggle stop
    if (this.isPlaying && this.currentId === id) {
      this.stop();
      return;
    }

    // Always stop previous audio first (Single clip guarantee)
    this.stop();

    this.currentId = id;
    this.isPlaying = true;
    this.notifyState();

    // Check custom uploaded audio first
    let resolvedUrl = null;
    if (this.customAudioMap.has(id)) {
      resolvedUrl = this.customAudioMap.get(id);
    } else if (audioFile) {
      resolvedUrl = this.knownAudioFiles[audioFile] || audioFile;
    }

    // Try HTML Audio element if URL provided
    if (resolvedUrl) {
      const audioSuccess = await this.tryPlayAudioFile(resolvedUrl, onComplete);
      if (audioSuccess) {
        return;
      }
    }

    // Fallback: Web Speech API synthesis
    if (arabicText && typeof window !== "undefined" && "speechSynthesis" in window) {
      this.playSpeechSynthesis(arabicText, gender, onComplete);
      return;
    }

    // If both failed or unavailable, fail gracefully without blocking
    console.warn(`Audio for [${id}] could not be played, skipping gracefully.`);
    this.isPlaying = false;
    this.currentId = null;
    this.notifyState();
    if (onComplete) onComplete();
  }

  tryPlayAudioFile(url, onComplete) {
    return new Promise((resolve) => {
      try {
        const audio = new Audio(url);
        audio.playbackRate = this.playbackRate;
        this.currentAudio = audio;

        audio.onended = () => {
          this.isPlaying = false;
          this.currentId = null;
          this.currentAudio = null;
          this.notifyState();
          if (onComplete) onComplete();
          resolve(true);
        };

        audio.onerror = () => {
          this.currentAudio = null;
          resolve(false); // fall back to SpeechSynthesis
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => resolve(true))
            .catch(() => resolve(false));
        }
      } catch (err) {
        resolve(false);
      }
    });
  }

  playSpeechSynthesis(text, gender = "male", onComplete) {
    try {
      window.speechSynthesis.cancel();

      // Clean or keep harakat: modern Arabic speech synthesis handles harakat well
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      utterance.rate = this.playbackRate; // 1.0 or 0.75

      // Select matching gender voice if available
      if (this.arabicVoices.length > 0) {
        let voice = null;
        if (gender === "female") {
          voice = this.arabicVoices.find(v => v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("salma") || v.name.toLowerCase().includes("layla") || v.name.toLowerCase().includes("zariyah"));
        } else {
          voice = this.arabicVoices.find(v => v.name.toLowerCase().includes("male") || v.name.toLowerCase().includes("maged") || v.name.toLowerCase().includes("shakir") || v.name.toLowerCase().includes("hamed"));
        }
        utterance.voice = voice || this.selectedVoice || this.arabicVoices[0];
      }

      utterance.onend = () => {
        this.isPlaying = false;
        this.currentId = null;
        this.notifyState();
        if (onComplete) onComplete();
      };

      utterance.onerror = (e) => {
        console.warn("SpeechSynthesis error:", e);
        this.isPlaying = false;
        this.currentId = null;
        this.notifyState();
        if (onComplete) onComplete();
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("SpeechSynthesis exception:", err);
      this.isPlaying = false;
      this.currentId = null;
      this.notifyState();
      if (onComplete) onComplete();
    }
  }

  /**
   * Register a custom user audio file for a content ID
   */
  registerCustomAudio(contentId, objectUrlOrBase64) {
    this.customAudioMap.set(contentId, objectUrlOrBase64);
  }
}

export const audioEngine = new AudioEngine();
