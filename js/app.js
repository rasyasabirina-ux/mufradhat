/**
 * PROJECT ETERA - SPORTS MODULE
 * Master Application Controller & 54-Slide Storyboard Router
 */

import { VOCABULARY_ITEMS, SENTENCE_ITEMS, FEMALE_DIALOGUE, MALE_DIALOGUE, GENDER_NOTICES, MODULE_METADATA } from './content.js';
import { VOCAB_GROUP_1_BANK, VOCAB_GROUP_2_BANK, SENTENCES_BANK, CONVERSATION_BANK, FINAL_QUIZ_BANK, drawSample } from './questions.js';
import { audioEngine } from './audio.js';
import { getVisual } from './visual-assets.js';

class EteraApp {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = MODULE_METADATA.totalSlides;
    this.completedSlides = new Set();
    this.showEnglishTranslation = true;
    
    // Practice & Quiz State
    this.practiceSessions = {
      vocab1: null,
      vocab2: null,
      sentences: null,
      conversation: null
    };

    this.finalQuiz = {
      questions: [],
      userAnswers: {}, // questionId -> optionId
      currentQuestionIndex: 0,
      score: 0,
      attemptSnapshot: null,
      isSubmitted: false
    };

    this.container = document.getElementById('slide-container');
    this.progressBar = document.getElementById('progress-bar');
    this.slideIndicator = document.getElementById('slide-indicator');
    this.sectionIndicator = document.getElementById('section-indicator');
    
    this.init();
  }

  init() {
    this.loadProgress();
    this.setupGlobalEvents();
    this.renderSlide(this.currentSlide);
  }

  // Best-effort LocalStorage load
  loadProgress() {
    try {
      const saved = localStorage.getItem('project_etera_sports_progress');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.currentSlide && data.currentSlide >= 1 && data.currentSlide <= this.totalSlides) {
          this.currentSlide = data.currentSlide;
        }
        if (Array.isArray(data.completedSlides)) {
          this.completedSlides = new Set(data.completedSlides);
        }
      }
    } catch (e) {
      console.warn('LocalStorage unavailable or disabled; learning continues unhindered.', e);
    }
  }

  // Best-effort LocalStorage save
  saveProgress() {
    try {
      this.completedSlides.add(this.currentSlide);
      const data = {
        currentSlide: this.currentSlide,
        completedSlides: Array.from(this.completedSlides),
        timestamp: Date.now()
      };
      localStorage.setItem('project_etera_sports_progress', JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save progress to LocalStorage:', e);
    }
  }

  setupGlobalEvents() {
    // Keyboard navigation: Left/Right arrows, Space for audio
    window.addEventListener('keydown', (e) => {
      // Don't intercept if focus is inside an input or modal is open
      if (document.querySelector('.modal-overlay.active')) return;

      if (e.key === 'ArrowRight') {
        this.nextSlide();
      } else if (e.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (e.key === ' ' && !e.target.matches('button, input, textarea')) {
        e.preventDefault();
        const primaryListenBtn = document.querySelector('.btn-listen');
        if (primaryListenBtn) primaryListenBtn.click();
      }
    });

    // Audio rate toggle in header
    const rateBtn = document.getElementById('header-rate-btn');
    if (rateBtn) {
      rateBtn.addEventListener('click', () => {
        const current = audioEngine.getPlaybackRate();
        const newRate = current === 1.0 ? 0.75 : 1.0;
        audioEngine.setPlaybackRate(newRate);
        rateBtn.textContent = newRate === 1.0 ? '⚡ 1.0x (Normal)' : '🐢 0.75x (Slow)';
      });
    }

    // Slide Outline Menu Drawer Toggle
    const menuBtn = document.getElementById('header-menu-btn');
    const outlineModal = document.getElementById('outline-modal');
    const closeOutlineBtn = document.getElementById('close-outline-btn');

    if (menuBtn && outlineModal) {
      menuBtn.addEventListener('click', () => {
        this.populateOutlineList();
        outlineModal.classList.add('active');
      });
    }

    if (closeOutlineBtn && outlineModal) {
      closeOutlineBtn.addEventListener('click', () => {
        outlineModal.classList.remove('active');
      });
    }

    // Audio Diagnostics / Tester Modal Toggle
    const audioTestBtn = document.getElementById('header-audio-btn');
    const audioModal = document.getElementById('audio-modal');
    const closeAudioBtn = document.getElementById('close-audio-btn');

    if (audioTestBtn && audioModal) {
      audioTestBtn.addEventListener('click', () => {
        this.populateAudioTesterList();
        audioModal.classList.add('active');
      });
    }

    if (closeAudioBtn && audioModal) {
      closeAudioBtn.addEventListener('click', () => {
        audioModal.classList.remove('active');
      });
    }

    // Listen to audio engine state to update active playing buttons
    audioEngine.subscribe(({ isPlaying, currentId }) => {
      document.querySelectorAll('.btn-listen').forEach(btn => {
        if (isPlaying && btn.dataset.audioId === currentId) {
          btn.classList.add('is-playing');
          btn.innerHTML = `<span class="wave-anim">⏸</span> Stop`;
        } else {
          btn.classList.remove('is-playing');
          const defaultLabel = btn.dataset.defaultLabel || 'Listen';
          btn.innerHTML = `🔊 ${defaultLabel}`;
        }
      });

      document.querySelectorAll('.recap-tile').forEach(tile => {
        if (isPlaying && tile.dataset.audioId === currentId) {
          tile.classList.add('is-playing');
        } else {
          tile.classList.remove('is-playing');
        }
      });
    });
  }

  goToSlide(slideNumber) {
    if (slideNumber < 1) slideNumber = 1;
    if (slideNumber > this.totalSlides) slideNumber = this.totalSlides;
    audioEngine.stop();
    this.currentSlide = slideNumber;
    this.saveProgress();
    this.renderSlide(this.currentSlide);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (this.currentSlide > 1) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  updateHeader() {
    // Update progress bar
    const percentage = Math.round((this.currentSlide / this.totalSlides) * 100);
    if (this.progressBar) {
      this.progressBar.style.width = `${percentage}%`;
    }
    if (this.slideIndicator) {
      this.slideIndicator.textContent = `Slide ${this.currentSlide} of ${this.totalSlides}`;
    }

    // Update Section Title
    const section = MODULE_METADATA.sections.find(
      s => this.currentSlide >= s.startSlide && this.currentSlide <= s.endSlide
    );
    if (this.sectionIndicator && section) {
      this.sectionIndicator.textContent = section.title;
    }
  }

  renderSlide(slideNum) {
    this.updateHeader();

    // SLIDE 01: Welcome
    if (slideNum === 1) {
      this.renderSlide01Welcome();
    }
    // SLIDE 02: Module Intro
    else if (slideNum === 2) {
      this.renderSlide02Intro();
    }
    // SLIDE 03: Learning Map
    else if (slideNum === 3) {
      this.renderSlide03LearningMap();
    }
    // SLIDE 04: Vocab Group 1 Intro
    else if (slideNum === 4) {
      this.renderSlide04Vocab1Intro();
    }
    // SLIDES 05 - 10: Vocab Cards 1 to 6
    else if (slideNum >= 5 && slideNum <= 10) {
      const vocabIndex = slideNum - 5; // 0 to 5
      this.renderSlideVocabCard(VOCABULARY_ITEMS[vocabIndex], 1, vocabIndex + 1, 6);
    }
    // SLIDE 11: Vocab Practice 1
    else if (slideNum === 11) {
      this.renderSlidePractice('vocab1', VOCAB_GROUP_1_BANK, 'Vocabulary Practice 1 (Words 1–6)', 12);
    }
    // SLIDE 12: Vocab Group 2 Intro
    else if (slideNum === 12) {
      this.renderSlide12Vocab2Intro();
    }
    // SLIDES 13 - 18: Vocab Cards 7 to 12
    else if (slideNum >= 13 && slideNum <= 18) {
      const vocabIndex = slideNum - 13 + 6; // 6 to 11
      this.renderSlideVocabCard(VOCABULARY_ITEMS[vocabIndex], 2, vocabIndex - 5, 6);
    }
    // SLIDE 19: Vocab Practice 2
    else if (slideNum === 19) {
      this.renderSlidePractice('vocab2', VOCAB_GROUP_2_BANK, 'Vocabulary Practice 2 (Words 7–12)', 20);
    }
    // SLIDE 20: Vocab Recap (12 interactive tiles)
    else if (slideNum === 20) {
      this.renderSlide20Recap();
    }
    // SLIDE 21: Sentences Intro
    else if (slideNum === 21) {
      this.renderSlide21SentencesIntro();
    }
    // SLIDES 22 - 27: Sentences 1 to 6
    else if (slideNum >= 22 && slideNum <= 27) {
      const sentenceIndex = slideNum - 22;
      this.renderSlideSentence(SENTENCE_ITEMS[sentenceIndex], sentenceIndex + 1);
    }
    // SLIDE 28: Sentence Practice
    else if (slideNum === 28) {
      this.renderSlidePractice('sentences', SENTENCES_BANK, 'Sentence Understanding Practice', 29);
    }
    // SLIDE 29: Gender in Context - Notice (هُوَ / هِيَ)
    else if (slideNum === 29) {
      this.renderSlide29GenderNotice();
    }
    // SLIDE 30: Conversation Intro
    else if (slideNum === 30) {
      this.renderSlide30ConversationIntro();
    }
    // SLIDES 31 - 36: Female Dialogue Lines 1 to 6
    else if (slideNum >= 31 && slideNum <= 36) {
      const lineIndex = slideNum - 31;
      this.renderSlideDialogueLine('female', FEMALE_DIALOGUE, lineIndex);
    }
    // SLIDE 37: Female Dialogue Full Playback
    else if (slideNum === 37) {
      this.renderSlideDialogueFull('female', FEMALE_DIALOGUE, 'Female Friends Conversation');
    }
    // SLIDE 38: Male Conversation Intro
    else if (slideNum === 38) {
      this.renderSlide38MaleIntro();
    }
    // SLIDES 39 - 44: Male Dialogue Lines 1 to 6
    else if (slideNum >= 39 && slideNum <= 44) {
      const lineIndex = slideNum - 39;
      this.renderSlideDialogueLine('male', MALE_DIALOGUE, lineIndex);
    }
    // SLIDE 45: Male Dialogue Full Playback
    else if (slideNum === 45) {
      this.renderSlideDialogueFull('male', MALE_DIALOGUE, 'Male Friends Conversation');
    }
    // SLIDE 46: Notice the difference (هُوَ يَلْعَبُ / هِيَ تَلْعَبُ)
    else if (slideNum === 46) {
      this.renderSlide46NoticeDifference();
    }
    // SLIDE 47: Conversation Practice
    else if (slideNum === 47) {
      this.renderSlidePractice('conversation', CONVERSATION_BANK, 'Conversation Practice', 48);
    }
    // SLIDE 48: Quick Review
    else if (slideNum === 48) {
      this.renderSlide48QuickReview();
    }
    // SLIDE 49: Final Quiz Intro
    else if (slideNum === 49) {
      this.renderSlide49QuizIntro();
    }
    // SLIDE 50: Final Quiz Questions Template (10 questions)
    else if (slideNum === 50) {
      this.renderSlide50QuizTemplate();
    }
    // SLIDE 51: Quiz Submission Confirmation
    else if (slideNum === 51) {
      this.renderSlide51QuizSubmission();
    }
    // SLIDE 52: Quiz Results
    else if (slideNum === 52) {
      this.renderSlide52QuizResults();
    }
    // SLIDE 53: Review My Answers
    else if (slideNum === 53) {
      this.renderSlide53ReviewAnswers();
    }
    // SLIDE 54: Completion
    else if (slideNum === 54) {
      this.renderSlide54Completion();
    }
  }

  /* =========================================================================
     SLIDE RENDERERS (1 to 54)
     ========================================================================= */

  // Slide 01: Welcome
  renderSlide01Welcome() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Welcome</span>
        <div class="slide-visual-wrapper">
          ${getVisual('module_cover')}
        </div>
        <h1 style="font-size: 1.85rem; font-weight: 800; text-align: center; margin-bottom: 0.35rem; color: var(--color-text-main);">
          PROJECT ETERA
        </h1>
        <p style="text-align: center; font-size: 1.15rem; color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem;">
          Sports Module • الرياضة
        </p>
        <p style="text-align: center; font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 2rem;">
          Modern Standard Arabic for Beginners. Learn 12 key sports, natural sentences, and daily conversations.
        </p>
        
        <button id="btn-start" class="btn-primary-cta">
          Start Learning ➔
        </button>

        ${this.completedSlides.size > 1 ? `
          <div style="text-align: center; margin-top: 1rem;">
            <button id="btn-reset-progress" style="background: none; border: none; font-size: 0.8rem; color: var(--color-text-light); text-decoration: underline; cursor: pointer;">
              Reset Saved Progress
            </button>
          </div>
        ` : ''}
      </div>
    `;

    document.getElementById('btn-start').addEventListener('click', () => this.nextSlide());
    const resetBtn = document.getElementById('btn-reset-progress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset your saved progress?')) {
          localStorage.removeItem('project_etera_sports_progress');
          this.completedSlides.clear();
          this.renderSlide(1);
        }
      });
    }
  }

  // Slide 02: Module Intro
  renderSlide02Intro() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Module Overview</span>
        <div class="slide-visual-wrapper">
          ${getVisual('module_cover')}
        </div>
        <h2 style="font-size: 1.6rem; font-weight: 700; text-align: center; margin-bottom: 0.75rem;">
          SPORTS • الرِّيَاضَةُ
        </h2>
        <div style="background: #F8FAFC; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.6;">
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
            <li>✓ <strong>12 Sports Words:</strong> Clear MSA pronunciation & transliteration.</li>
            <li>✓ <strong>6 Everyday Sentences:</strong> Expressing preferences, likes, and dislikes.</li>
            <li>✓ <strong>Natural Conversations:</strong> Friendly male & female spoken dialogues.</li>
            <li>✓ <strong>Estimated Time:</strong> 20–30 minutes at your own relaxed pace.</li>
          </ul>
        </div>
        
        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Begin Journey ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 03: Learning Map
  renderSlide03LearningMap() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Learning Route</span>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 1.25rem;">
          YOUR LEARNING PATH
        </h2>

        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
          <div class="path-step active" style="background: #F0FDFA; border: 1.5px solid var(--color-primary); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <strong style="color: var(--color-primary); font-size: 1rem;">1. Vocabulary (12 Words)</strong>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">Group 1 (1–6) & Group 2 (7–12) with audio</div>
            </div>
            <span style="font-size: 1.25rem;">⚽</span>
          </div>

          <div class="path-step" style="background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <strong>2. Sentences & Gender Notice</strong>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">6 sentences, likes/dislikes, هُوَ / هِيَ in context</div>
            </div>
            <span style="font-size: 1.25rem;">💬</span>
          </div>

          <div class="path-step" style="background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <strong>3. Everyday Conversations</strong>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">Natural exchanges between friends (Female & Male)</div>
            </div>
            <span style="font-size: 1.25rem;">👥</span>
          </div>

          <div class="path-step" style="background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <strong>4. Varied Practice</strong>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">Interactive listening, matching, and comprehension</div>
            </div>
            <span style="font-size: 1.25rem;">🎯</span>
          </div>

          <div class="path-step" style="background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <strong>5. Final Quiz</strong>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">10 randomized questions with comprehensive review</div>
            </div>
            <span style="font-size: 1.25rem;">🏆</span>
          </div>
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Start Vocabulary ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 04: Vocab Group 1 Intro
  renderSlide04Vocab1Intro() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Vocabulary • Group 1</span>
        <div class="slide-visual-wrapper">
          ${getVisual('module_cover')}
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem;">
          LET’S LEARN SPORTS WORDS
        </h2>
        <p style="text-align: center; font-size: 1rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Here are your first 6 sports. Listen carefully, notice the spelling, and repeat aloud.
        </p>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Card 1: Football ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide Vocab Card (Slides 05-10 and 13-18)
  renderSlideVocabCard(item, groupNum, cardIndex, totalInGroup) {
    this.container.innerHTML = `
      <div class="slide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="slide-category-tag">Group ${groupNum} • Word ${cardIndex} of ${totalInGroup}</span>
          <span style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 600;">Total #${item.index} of 12</span>
        </div>

        <div class="slide-visual-wrapper">
          ${getVisual(item.visualKey)}
        </div>

        <h2 class="arabic-hero arabic-text">
          ${item.arabic}
        </h2>
        <p class="translit-hero translit-text">
          ${item.transliteration}
        </p>
        <p class="english-hero english-text">
          ${item.meaning_en}
        </p>

        <div class="audio-action-row">
          <button id="btn-play-vocab" class="btn-listen" data-audio-id="${item.id}" data-default-label="Listen">
            🔊 Listen
          </button>
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Next ➔</button>
        </div>
      </div>
    `;

    const playBtn = document.getElementById('btn-play-vocab');
    playBtn.addEventListener('click', () => {
      audioEngine.play({
        id: item.id,
        audioFile: item.audioFile,
        arabicText: item.arabic,
        gender: 'male'
      });
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Practice Runner (Slide 11, 19, 28, 47)
  renderSlidePractice(sessionKey, bank, title, nextSlideNumber) {
    if (!this.practiceSessions[sessionKey]) {
      this.practiceSessions[sessionKey] = {
        questions: drawSample(bank, 5),
        currentIndex: 0,
        selectedOptionId: null,
        isAnswerSubmitted: false,
        score: 0
      };
    }

    const session = this.practiceSessions[sessionKey];
    const qIndex = session.currentIndex;

    // If completed 5 questions in round
    if (qIndex >= session.questions.length) {
      this.container.innerHTML = `
        <div class="slide-card" style="text-align: center;">
          <span class="slide-category-tag">Practice Complete</span>
          <div style="font-size: 3.5rem; margin: 1rem 0;">🌟</div>
          <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">
            Practice Round Completed!
          </h2>
          <p style="font-size: 1rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
            You scored <strong>${session.score} out of ${session.questions.length}</strong>! Great work practicing retrieval.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <button id="btn-retry-practice" class="btn-nav btn-nav-prev" style="width: 100%; justify-content: center;">
              🔄 Try 5 New Questions from Bank
            </button>
            <button id="btn-continue-next" class="btn-primary-cta">
              Continue to Next Step ➔
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-retry-practice').addEventListener('click', () => {
        this.practiceSessions[sessionKey] = null;
        this.renderSlidePractice(sessionKey, bank, title, nextSlideNumber);
      });

      document.getElementById('btn-continue-next').addEventListener('click', () => {
        this.goToSlide(nextSlideNumber);
      });
      return;
    }

    const currentQ = session.questions[qIndex];

    this.container.innerHTML = `
      <div class="slide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="slide-category-tag">${title}</span>
          <span style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 600;">Question ${qIndex + 1} of 5</span>
        </div>

        ${currentQ.visualKey ? `
          <div class="slide-visual-wrapper" style="min-height: 140px; margin-bottom: 1rem;">
            ${getVisual(currentQ.visualKey)}
          </div>
        ` : ''}

        <p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-main);">
          ${currentQ.prompt}
        </p>

        ${currentQ.audioStimulus || currentQ.arabicSpeech ? `
          <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
            <button id="btn-listen-stimulus" class="btn-listen" data-audio-id="${currentQ.id}">
              🔊 Play Arabic Audio
            </button>
          </div>
        ` : ''}

        <div class="practice-options-grid">
          ${currentQ.options.map((opt) => `
            <button class="option-button ${session.selectedOptionId === opt.id ? 'selected' : ''} ${session.isAnswerSubmitted ? (opt.isCorrect ? 'correct' : (session.selectedOptionId === opt.id ? 'incorrect' : '')) : ''} ${session.isAnswerSubmitted ? 'locked' : ''}" data-opt-id="${opt.id}">
              <span ${opt.label.match(/[\u0600-\u06FF]/) ? 'class="arabic-inline" style="font-size: 1.25rem;"' : ''}>
                ${opt.label}
              </span>
              ${opt.translit ? `<span class="translit-text" style="font-size: 0.85rem;">(${opt.translit})</span>` : ''}
            </button>
          `).join('')}
        </div>

        ${session.isAnswerSubmitted ? `
          <div class="feedback-banner ${session.questions[qIndex].options.find(o => o.id === session.selectedOptionId)?.isCorrect ? 'correct' : 'incorrect'}">
            <strong>${session.questions[qIndex].options.find(o => o.id === session.selectedOptionId)?.isCorrect ? '✓ ' + currentQ.feedbackCorrect : 'ℹ ' + currentQ.feedbackIncorrect}</strong>
            ${currentQ.explanation ? `<div style="margin-top: 0.4rem; font-size: 0.85rem;">${currentQ.explanation}</div>` : ''}
          </div>
        ` : ''}

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          ${!session.isAnswerSubmitted ? `
            <button id="btn-submit-answer" class="btn-nav btn-nav-next" ${!session.selectedOptionId ? 'disabled style="opacity: 0.5;"' : ''}>
              Check Answer ➔
            </button>
          ` : `
            <button id="btn-next-question" class="btn-nav btn-nav-next">
              Next Question ➔
            </button>
          `}
        </div>
      </div>
    `;

    // Audio stimulus button
    const audioBtn = document.getElementById('btn-listen-stimulus');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        audioEngine.play({
          id: currentQ.id,
          audioFile: currentQ.audioStimulus,
          arabicText: currentQ.arabicSpeech || currentQ.prompt,
          gender: 'male'
        });
      });
    }

    // Option selection
    if (!session.isAnswerSubmitted) {
      document.querySelectorAll('.option-button').forEach(btn => {
        btn.addEventListener('click', () => {
          session.selectedOptionId = btn.dataset.optId;
          this.renderSlidePractice(sessionKey, bank, title, nextSlideNumber);
        });
      });

      const submitBtn = document.getElementById('btn-submit-answer');
      if (submitBtn && session.selectedOptionId) {
        submitBtn.addEventListener('click', () => {
          session.isAnswerSubmitted = true;
          const chosen = currentQ.options.find(o => o.id === session.selectedOptionId);
          if (chosen && chosen.isCorrect) {
            session.score++;
          }
          this.renderSlidePractice(sessionKey, bank, title, nextSlideNumber);
        });
      }
    } else {
      const nextQBtn = document.getElementById('btn-next-question');
      if (nextQBtn) {
        nextQBtn.addEventListener('click', () => {
          session.currentIndex++;
          session.selectedOptionId = null;
          session.isAnswerSubmitted = false;
          this.renderSlidePractice(sessionKey, bank, title, nextSlideNumber);
        });
      }
    }

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
  }

  // Slide 12: Vocab Group 2 Intro
  renderSlide12Vocab2Intro() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Vocabulary • Group 2</span>
        <div class="slide-visual-wrapper">
          ${getVisual('module_cover')}
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem;">
          SIX MORE SPORTS WORDS
        </h2>
        <p style="text-align: center; font-size: 1rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Expand your vocabulary with cycling, table tennis, badminton, karate, yoga, and walking.
        </p>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Card 7: Cycling ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 20: 12-Tile Vocabulary Recap
  renderSlide20Recap() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Vocabulary Consolidation</span>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.35rem;">
          12 SPORTS WORDS RECAP
        </h2>
        <p style="text-align: center; font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
          Tap any card below to listen and review pronunciation before moving to sentences.
        </p>

        <div class="recap-grid">
          ${VOCABULARY_ITEMS.map((item) => `
            <div class="recap-tile" data-vocab-id="${item.id}" data-audio-id="${item.id}">
              <div style="width: 48px; height: 48px; margin: 0 auto;">
                ${getVisual(item.visualKey)}
              </div>
              <div class="tile-arabic arabic-text">${item.arabic}</div>
              <div class="translit-text" style="font-size: 0.75rem;">${item.transliteration}</div>
              <div class="tile-meaning">${item.meaning_en}</div>
            </div>
          `).join('')}
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Continue to Sentences ➔</button>
        </div>
      </div>
    `;

    document.querySelectorAll('.recap-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const vocabId = tile.dataset.vocabId;
        const item = VOCABULARY_ITEMS.find(v => v.id === vocabId);
        if (item) {
          audioEngine.play({
            id: item.id,
            audioFile: item.audioFile,
            arabicText: item.arabic,
            gender: 'male'
          });
        }
      });
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 21: Sentences Intro
  renderSlide21SentencesIntro() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Section 2: Sentences</span>
        <div class="slide-visual-wrapper">
          ${getVisual('sentence_ask_preference')}
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem;">
          LET’S USE THE WORDS IN SENTENCES
        </h2>
        <p style="text-align: center; font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Learn 6 natural sentences to express your favourite sports, ask questions, and describe actions.
        </p>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Sentence 1 ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide Sentence (Slides 22-27)
  renderSlideSentence(item, sentenceNum) {
    let hideTranslation = false;

    this.container.innerHTML = `
      <div class="slide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="slide-category-tag">${item.code} • ${item.topic}</span>
          <span style="font-size: 0.8rem; color: var(--color-text-muted); font-weight: 600;">Sentence ${sentenceNum} of 6</span>
        </div>

        <div class="slide-visual-wrapper">
          ${getVisual(item.visualKey)}
        </div>

        <h2 class="arabic-hero arabic-text" style="font-size: 1.85rem; line-height: 1.5;">
          ${item.arabic}
        </h2>
        <p class="translit-hero translit-text">
          ${item.transliteration}
        </p>

        <div id="english-meaning-box" style="margin-bottom: 1rem; text-align: center;">
          <p class="english-hero" style="margin-bottom: 0.25rem;">
            ${item.meaning_en}
          </p>
        </div>

        <div style="text-align: center; margin-bottom: 1rem;">
          <button id="btn-toggle-translation" style="background: none; border: none; font-size: 0.8rem; color: var(--color-primary); cursor: pointer; text-decoration: underline;">
            Toggle English Meaning
          </button>
        </div>

        <div class="audio-action-row">
          <button id="btn-play-sentence" class="btn-listen" data-audio-id="${item.id}" data-default-label="Listen">
            🔊 Listen
          </button>
        </div>

        ${item.notes ? `
          <div style="background: #F8FAFC; border-left: 3px solid var(--color-primary); padding: 0.65rem 0.85rem; border-radius: 4px; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1rem;">
            💡 <strong>Note:</strong> ${item.notes}
          </div>
        ` : ''}

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Next ➔</button>
        </div>
      </div>
    `;

    const toggleBtn = document.getElementById('btn-toggle-translation');
    const meaningBox = document.getElementById('english-meaning-box');
    toggleBtn.addEventListener('click', () => {
      hideTranslation = !hideTranslation;
      meaningBox.style.display = hideTranslation ? 'none' : 'block';
      toggleBtn.textContent = hideTranslation ? 'Show English Meaning' : 'Hide English Meaning';
    });

    const playBtn = document.getElementById('btn-play-sentence');
    playBtn.addEventListener('click', () => {
      audioEngine.play({
        id: item.id,
        audioFile: item.audioFile,
        arabicText: item.arabic,
        gender: 'male'
      });
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 29: Gender in Context - Notice (هُوَ يَجْرِي / هِيَ تَسْبَحُ)
  renderSlide29GenderNotice() {
    const notice = GENDER_NOTICES.verbsInContext;

    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Grammar in Context • Notice</span>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.35rem;">
          NOTICE THE SUBJECT & VERB
        </h2>
        <p style="text-align: center; font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
          In Arabic, present-tense verbs change their starting prefix to match male and female subjects.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
          <!-- Male Box -->
          <div style="background: #F0FDF4; border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 1rem; text-align: center;">
            <div style="height: 100px; margin-bottom: 0.5rem;">
              ${getVisual('sentence_male_running')}
            </div>
            <div class="arabic-text" style="font-size: 1.6rem; color: #166534;">${notice.male.arabic}</div>
            <div class="translit-text" style="font-size: 0.9rem;">${notice.male.transliteration}</div>
            <div style="font-size: 0.85rem; color: #166534; margin-bottom: 0.75rem;">${notice.male.meaning}</div>
            <button id="btn-play-male-notice" class="btn-listen" style="padding: 0.4rem 0.85rem; font-size: 0.8rem; min-height: 38px; width: 100%; justify-content: center;" data-audio-id="notice_male">
              🔊 Listen (هُوَ)
            </button>
          </div>

          <!-- Female Box -->
          <div style="background: #EFF6FF; border: 1.5px solid #93C5FD; border-radius: var(--radius-md); padding: 1rem; text-align: center;">
            <div style="height: 100px; margin-bottom: 0.5rem;">
              ${getVisual('sentence_female_swimming')}
            </div>
            <div class="arabic-text" style="font-size: 1.6rem; color: #1E40AF;">${notice.female.arabic}</div>
            <div class="translit-text" style="font-size: 0.9rem;">${notice.female.transliteration}</div>
            <div style="font-size: 0.85rem; color: #1E40AF; margin-bottom: 0.75rem;">${notice.female.meaning}</div>
            <button id="btn-play-female-notice" class="btn-listen" style="padding: 0.4rem 0.85rem; font-size: 0.8rem; min-height: 38px; width: 100%; justify-content: center;" data-audio-id="notice_female">
              🔊 Listen (هِيَ)
            </button>
          </div>
        </div>

        <div style="background: #F8FAFC; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.85rem 1rem; font-size: 0.85rem; color: var(--color-text-main); line-height: 1.5; margin-bottom: 1rem;">
          📌 <strong>Key takeaway:</strong> ${notice.ruleExplanation}
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Next to Conversations ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-play-male-notice').addEventListener('click', () => {
      audioEngine.play({
        id: 'notice_male',
        arabicText: notice.male.arabic,
        gender: 'male'
      });
    });

    document.getElementById('btn-play-female-notice').addEventListener('click', () => {
      audioEngine.play({
        id: 'notice_female',
        arabicText: notice.female.arabic,
        gender: 'female'
      });
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 30: Conversation Intro
  renderSlide30ConversationIntro() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Section 3: Conversations</span>
        <div class="slide-visual-wrapper">
          ${getVisual('female_dialogue')}
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem;">
          LET’S HAVE A CONVERSATION
        </h2>
        <p style="text-align: center; font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Listen to two friends talk about their favourite sports. First, we will explore the conversation between two female friends, followed by two male friends.
        </p>

        <div style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem;">
          <button id="btn-choose-female" class="btn-primary-cta" style="flex: 1;">
            Start Female Dialogue ➔
          </button>
          <button id="btn-choose-male" class="btn-nav btn-nav-prev" style="flex: 1; justify-content: center;">
            Jump to Male Dialogue
          </button>
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Begin Dialogue ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-choose-female').addEventListener('click', () => this.goToSlide(31));
    document.getElementById('btn-choose-male').addEventListener('click', () => this.goToSlide(38));
    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide Dialogue Line (Slides 31-36 and 39-44)
  renderSlideDialogueLine(gender, dialogueArray, lineIndex) {
    const line = dialogueArray[lineIndex];
    const isFemale = gender === 'female';
    const visualKey = isFemale ? 'female_dialogue' : 'male_dialogue';

    let hideTranslation = false;

    this.container.innerHTML = `
      <div class="slide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="slide-category-tag">${isFemale ? 'Female Dialogue' : 'Male Dialogue'} • Line ${lineIndex + 1} of 6</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary);">${line.speakerLabel}</span>
        </div>

        <div class="slide-visual-wrapper">
          ${getVisual(visualKey)}
        </div>

        <div class="dialogue-turn-box active-speaker">
          <span class="speaker-pill">${line.speakerLabel}</span>
          <div class="arabic-text" style="font-size: 1.85rem; margin: 0.5rem 0;">
            ${line.arabic}
          </div>
          <div class="translit-text" style="text-align: center; font-size: 1rem; margin-bottom: 0.5rem;">
            ${line.transliteration}
          </div>
          <div id="dialogue-meaning-box" style="text-align: center; color: var(--color-text-muted); font-size: 0.95rem;">
            ${line.meaning_en}
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 1rem;">
          <button id="btn-toggle-line-translation" class="translation-toggle-btn">
            Toggle English Translation
          </button>
        </div>

        <div class="audio-action-row">
          <button id="btn-play-line" class="btn-listen" data-audio-id="dialogue_${gender}_${lineIndex}" data-default-label="Listen to Line">
            🔊 Listen to Line
          </button>
        </div>

        ${line.isUserAudioRecorded ? `
          <div style="background: #F0FDF4; border: 1px solid #86EFAC; border-radius: var(--radius-sm); padding: 0.5rem 0.75rem; text-align: center; font-size: 0.8rem; color: #166534; margin-bottom: 1rem;">
            🎙️ <strong>Featuring your recorded audio clip:</strong> <em>etera_sports_dialog_m_04_ar.mp3</em>
          </div>
        ` : ''}

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Previous</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Next Line ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-toggle-line-translation').addEventListener('click', () => {
      hideTranslation = !hideTranslation;
      const box = document.getElementById('dialogue-meaning-box');
      box.style.display = hideTranslation ? 'none' : 'block';
    });

    document.getElementById('btn-play-line').addEventListener('click', () => {
      audioEngine.play({
        id: `dialogue_${gender}_${lineIndex}`,
        audioFile: line.audioFile,
        arabicText: line.arabic,
        gender: isFemale ? 'female' : 'male'
      });
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide Dialogue Full Playback (Slides 37 and 45)
  renderSlideDialogueFull(gender, dialogueArray, title) {
    const isFemale = gender === 'female';
    const visualKey = isFemale ? 'female_dialogue' : 'male_dialogue';

    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Full Playback</span>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.25rem;">
          ${title}
        </h2>
        <p style="text-align: center; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1rem;">
          Listen to the full conversation in sequence, or tap any line to replay.
        </p>

        <div class="slide-visual-wrapper" style="min-height: 120px; margin-bottom: 1rem;">
          ${getVisual(visualKey)}
        </div>

        <div style="display: flex; justify-content: center; margin-bottom: 1.25rem;">
          <button id="btn-play-full-sequence" class="btn-listen" style="background: var(--color-primary); width: 100%; justify-content: center;">
            ▶️ Play Full Conversation
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.25rem;">
          ${dialogueArray.map((line, idx) => `
            <div class="dialogue-line-card" id="full-line-${idx}" style="background: #F8FAFC; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.75rem 1rem; cursor: pointer; transition: var(--transition);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary);">${line.speakerLabel}</span>
                <span style="font-size: 0.8rem; color: var(--color-text-light);">🔊</span>
              </div>
              <div class="arabic-text" style="font-size: 1.25rem; text-align: right; margin-bottom: 0.25rem;">${line.arabic}</div>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">${line.meaning_en}</div>
            </div>
          `).join('')}
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Continue ➔</button>
        </div>
      </div>
    `;

    // Individual line click to play
    dialogueArray.forEach((line, idx) => {
      const card = document.getElementById(`full-line-${idx}`);
      if (card) {
        card.addEventListener('click', () => {
          audioEngine.play({
            id: `full_line_${gender}_${idx}`,
            audioFile: line.audioFile,
            arabicText: line.arabic,
            gender: isFemale ? 'female' : 'male'
          });
        });
      }
    });

    // Play full sequence sequentially
    const playFullBtn = document.getElementById('btn-play-full-sequence');
    playFullBtn.addEventListener('click', () => {
      let currentSeqIndex = 0;

      const playNextInSeq = () => {
        if (currentSeqIndex >= dialogueArray.length) {
          playFullBtn.innerHTML = '▶️ Replay Full Conversation';
          document.querySelectorAll('.dialogue-line-card').forEach(c => c.style.borderColor = 'var(--color-border)');
          return;
        }

        const line = dialogueArray[currentSeqIndex];
        document.querySelectorAll('.dialogue-line-card').forEach((c, idx) => {
          c.style.borderColor = idx === currentSeqIndex ? 'var(--color-primary)' : 'var(--color-border)';
          c.style.backgroundColor = idx === currentSeqIndex ? '#F0FDFA' : '#F8FAFC';
        });

        currentSeqIndex++;
        audioEngine.play({
          id: `seq_${gender}_${currentSeqIndex}`,
          audioFile: line.audioFile,
          arabicText: line.arabic,
          gender: isFemale ? 'female' : 'male',
          onComplete: () => {
            setTimeout(playNextInSeq, 600); // Natural conversational gap
          }
        });
      };

      playFullBtn.innerHTML = '⏸ Playing Sequence...';
      playNextInSeq();
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 38: Male Conversation Intro
  renderSlide38MaleIntro() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Male Dialogue Intro</span>
        <div class="slide-visual-wrapper">
          ${getVisual('male_dialogue')}
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem;">
          NOW LISTEN TO TWO FRIENDS (MALE)
        </h2>
        <p style="text-align: center; font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Notice the masculine pronouns and verb forms (e.g. مَا رِيَاضَتُكَ with -ka, and تَلْعَبُ).
        </p>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Start Male Dialogue ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 46: Notice the difference (هُوَ يَلْعَبُ / هِيَ تَلْعَبُ)
  renderSlide46NoticeDifference() {
    const notice = GENDER_NOTICES.verbsPlaying;

    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Grammar in Context • Contrast</span>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.35rem;">
          NOTICE THE DIFFERENCE
        </h2>
        <p style="text-align: center; font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
          Reinforce verb forms through paired examples: "He plays" vs "She plays".
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
          <!-- Male Box -->
          <div style="background: #F0FDF4; border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
            <div class="arabic-text" style="font-size: 1.85rem; color: #166534; margin-bottom: 0.25rem;">
              ${notice.male.arabic}
            </div>
            <div class="translit-text" style="font-size: 0.95rem; margin-bottom: 0.25rem;">
              ${notice.male.transliteration}
            </div>
            <div style="font-size: 0.85rem; color: #166534; margin-bottom: 0.75rem;">
              ${notice.male.meaning}
            </div>
            <button id="btn-play-male-diff" class="btn-listen" style="padding: 0.4rem 0.85rem; font-size: 0.8rem; min-height: 38px; width: 100%; justify-content: center;" data-audio-id="diff_male">
              🔊 Listen
            </button>
          </div>

          <!-- Female Box -->
          <div style="background: #EFF6FF; border: 1.5px solid #93C5FD; border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
            <div class="arabic-text" style="font-size: 1.85rem; color: #1E40AF; margin-bottom: 0.25rem;">
              ${notice.female.arabic}
            </div>
            <div class="translit-text" style="font-size: 0.95rem; margin-bottom: 0.25rem;">
              ${notice.female.transliteration}
            </div>
            <div style="font-size: 0.85rem; color: #1E40AF; margin-bottom: 0.75rem;">
              ${notice.female.meaning}
            </div>
            <button id="btn-play-female-diff" class="btn-listen" style="padding: 0.4rem 0.85rem; font-size: 0.8rem; min-height: 38px; width: 100%; justify-content: center;" data-audio-id="diff_female">
              🔊 Listen
            </button>
          </div>
        </div>

        <div style="background: #F8FAFC; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.85rem 1rem; font-size: 0.85rem; color: var(--color-text-main); line-height: 1.5; margin-bottom: 1rem;">
          💡 <strong>Summary:</strong> The verb form can change with the subject.
        </div>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
          <button id="btn-next" class="btn-nav btn-nav-next">Next to Practice ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-play-male-diff').addEventListener('click', () => {
      audioEngine.play({
        id: 'diff_male',
        arabicText: notice.male.arabic,
        gender: 'male'
      });
    });

    document.getElementById('btn-play-female-diff').addEventListener('click', () => {
      audioEngine.play({
        id: 'diff_female',
        arabicText: notice.female.arabic,
        gender: 'female'
      });
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());
  }

  // Slide 48: Quick Review
  renderSlide48QuickReview() {
    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Review & Preparation</span>
        <div class="slide-visual-wrapper">
          ${getVisual('module_cover')}
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.5rem;">
          QUICK REVIEW
        </h2>
        <p style="text-align: center; font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          You have learned:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
          <div style="background: #F8FAFC; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ✅ <strong>12 Vocabulary Words:</strong> football, basketball, swimming, running, karate, etc.
          </div>
          <div style="background: #F8FAFC; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ✅ <strong>6 Sentences:</strong> رِيَاضَتِي الْمُفَضَّلَةُ..., أُحِبُّ..., and لَا أُحِبُّ...
          </div>
          <div style="background: #F8FAFC; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
            ✅ <strong>Gender Differences:</strong> هُوَ يَجْرِي vs هِيَ تَسْبَحُ, -ka vs -ki address.
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem;">
          <button id="btn-re-recap" class="btn-nav btn-nav-prev" style="flex: 1; justify-content: center;">
            🔍 View 12 Words Grid
          </button>
          <button id="btn-ready-quiz" class="btn-primary-cta" style="flex: 1;">
            Ready for Quiz! ➔
          </button>
        </div>

        <div class="slide-nav-row" style="margin-top: 1rem;">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
        </div>
      </div>
    `;

    document.getElementById('btn-re-recap').addEventListener('click', () => this.goToSlide(20));
    document.getElementById('btn-ready-quiz').addEventListener('click', () => this.nextSlide());
    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
  }

  // Slide 49: Final Quiz Intro
  renderSlide49QuizIntro() {
    this.container.innerHTML = `
      <div class="slide-card" style="text-align: center;">
        <span class="slide-category-tag">Final Assessment</span>
        <div style="font-size: 3.5rem; margin: 1rem 0;">📝</div>
        <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">
          FINAL QUIZ
        </h2>
        <p style="font-size: 1rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          10 questions drawn randomly from the question bank. Take your time. You can navigate back and forth and review your answers before submitting.
        </p>

        <button id="btn-start-final-quiz" class="btn-primary-cta">
          Start Final Quiz ➔
        </button>

        <div class="slide-nav-row">
          <button id="btn-prev" class="btn-nav btn-nav-prev">← Back</button>
        </div>
      </div>
    `;

    document.getElementById('btn-start-final-quiz').addEventListener('click', () => {
      // Initialize fresh 10 questions for final quiz
      this.finalQuiz.questions = drawSample(FINAL_QUIZ_BANK, 10);
      this.finalQuiz.userAnswers = {};
      this.finalQuiz.currentQuestionIndex = 0;
      this.finalQuiz.isSubmitted = false;
      this.nextSlide(); // Go to Slide 50
    });

    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
  }

  // Slide 50: Final Quiz Question Template
  renderSlide50QuizTemplate() {
    const quiz = this.finalQuiz;
    if (!quiz.questions || quiz.questions.length === 0) {
      quiz.questions = drawSample(FINAL_QUIZ_BANK, 10);
    }

    const qIndex = quiz.currentQuestionIndex;
    const currentQ = quiz.questions[qIndex];
    const selectedOptionId = quiz.userAnswers[currentQ.id];

    this.container.innerHTML = `
      <div class="slide-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span class="slide-category-tag">Final Quiz</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary);">Question ${qIndex + 1} of 10</span>
        </div>

        ${currentQ.visualKey ? `
          <div class="slide-visual-wrapper" style="min-height: 130px; margin-bottom: 1rem;">
            ${getVisual(currentQ.visualKey)}
          </div>
        ` : ''}

        <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-main);">
          ${currentQ.prompt}
        </p>

        ${currentQ.audioStimulus || currentQ.arabicSpeech ? `
          <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
            <button id="btn-quiz-audio" class="btn-listen" data-audio-id="quiz_${currentQ.id}">
              🔊 Play Question Audio
            </button>
          </div>
        ` : ''}

        <div class="practice-options-grid">
          ${currentQ.options.map(opt => `
            <button class="option-button ${selectedOptionId === opt.id ? 'selected' : ''}" data-opt-id="${opt.id}">
              <span ${opt.label.match(/[\u0600-\u06FF]/) ? 'class="arabic-inline" style="font-size: 1.25rem;"' : ''}>
                ${opt.label}
              </span>
              ${opt.translit ? `<span class="translit-text" style="font-size: 0.85rem;">(${opt.translit})</span>` : ''}
            </button>
          `).join('')}
        </div>

        <div class="slide-nav-row">
          <button id="btn-quiz-prev" class="btn-nav btn-nav-prev" ${qIndex === 0 ? 'disabled' : ''}>
            ← Previous Question
          </button>
          ${qIndex < 9 ? `
            <button id="btn-quiz-next" class="btn-nav btn-nav-next">
              Next Question ➔
            </button>
          ` : `
            <button id="btn-quiz-submit-step" class="btn-nav btn-nav-next" style="background: var(--color-primary);">
              Review & Submit ➔
            </button>
          `}
        </div>
      </div>
    `;

    const audioBtn = document.getElementById('btn-quiz-audio');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        audioEngine.play({
          id: `quiz_${currentQ.id}`,
          audioFile: currentQ.audioStimulus,
          arabicText: currentQ.arabicSpeech,
          gender: 'male'
        });
      });
    }

    document.querySelectorAll('.option-button').forEach(btn => {
      btn.addEventListener('click', () => {
        quiz.userAnswers[currentQ.id] = btn.dataset.optId;
        this.renderSlide50QuizTemplate();
      });
    });

    const prevBtn = document.getElementById('btn-quiz-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (quiz.currentQuestionIndex > 0) {
          quiz.currentQuestionIndex--;
          this.renderSlide50QuizTemplate();
        }
      });
    }

    const nextBtn = document.getElementById('btn-quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (quiz.currentQuestionIndex < 9) {
          quiz.currentQuestionIndex++;
          this.renderSlide50QuizTemplate();
        }
      });
    }

    const submitStepBtn = document.getElementById('btn-quiz-submit-step');
    if (submitStepBtn) {
      submitStepBtn.addEventListener('click', () => {
        this.goToSlide(51);
      });
    }
  }

  // Slide 51: Quiz Submission Confirmation
  renderSlide51QuizSubmission() {
    const answeredCount = Object.keys(this.finalQuiz.userAnswers).length;

    this.container.innerHTML = `
      <div class="slide-card" style="text-align: center;">
        <span class="slide-category-tag">Confirm Submission</span>
        <div style="font-size: 3rem; margin: 1rem 0;">📋</div>
        <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">
          READY TO SUBMIT?
        </h2>
        <p style="font-size: 1rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          You answered <strong>${answeredCount} of 10 questions</strong>.
        </p>

        ${answeredCount < 10 ? `
          <div style="background: #FFFBEB; border: 1px solid #FCD34D; color: #92400E; border-radius: var(--radius-sm); padding: 0.75rem 1rem; font-size: 0.85rem; margin-bottom: 1.5rem;">
            ⚠️ You still have ${10 - answeredCount} unanswered questions. You can go back to complete them!
          </div>
        ` : ''}

        <div style="display: flex; gap: 0.75rem;">
          <button id="btn-back-to-questions" class="btn-nav btn-nav-prev" style="flex: 1; justify-content: center;">
            ← Go Back to Quiz
          </button>
          <button id="btn-confirm-submit" class="btn-primary-cta" style="flex: 1;">
            Submit Quiz ➔
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-back-to-questions').addEventListener('click', () => {
      this.goToSlide(50);
    });

    document.getElementById('btn-confirm-submit').addEventListener('click', () => {
      // Calculate score and snapshot attempt
      let correct = 0;
      this.finalQuiz.questions.forEach(q => {
        const chosenId = this.finalQuiz.userAnswers[q.id];
        const chosen = q.options.find(o => o.id === chosenId);
        if (chosen && chosen.isCorrect) {
          correct++;
        }
      });
      this.finalQuiz.score = correct;
      this.finalQuiz.attemptSnapshot = JSON.parse(JSON.stringify(this.finalQuiz));
      this.finalQuiz.isSubmitted = true;
      this.goToSlide(52); // Results
    });
  }

  // Slide 52: Quiz Results
  renderSlide52QuizResults() {
    const score = this.finalQuiz.score;

    this.container.innerHTML = `
      <div class="slide-card" style="text-align: center;">
        <span class="slide-category-tag">Assessment Results</span>
        <div style="font-size: 3.5rem; margin: 1rem 0;">🎉</div>
        <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.25rem;">
          QUIZ COMPLETE
        </h2>
        <p style="font-size: 1.15rem; color: var(--color-primary); font-weight: 700; margin-bottom: 0.5rem;">
          Your score: ${score} / 10
        </p>
        <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          ${score >= 8 ? 'Outstanding achievement! You have a great grasp of sports vocabulary and grammar.' : 'Great effort! Reviewing your questions is the best way to cement your learning.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
          <button id="btn-review-answers" class="btn-primary-cta">
            Review Answers & Explanations ➔
          </button>
          <button id="btn-try-again-quiz" class="btn-nav btn-nav-prev" style="justify-content: center;">
            🔄 Try Again (Fresh 10 Questions)
          </button>
          <button id="btn-finish-module" class="btn-nav btn-nav-prev" style="justify-content: center;">
            Complete Module ➔
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-review-answers').addEventListener('click', () => this.goToSlide(53));
    document.getElementById('btn-try-again-quiz').addEventListener('click', () => {
      this.finalQuiz.questions = drawSample(FINAL_QUIZ_BANK, 10);
      this.finalQuiz.userAnswers = {};
      this.finalQuiz.currentQuestionIndex = 0;
      this.finalQuiz.isSubmitted = false;
      this.goToSlide(50);
    });
    document.getElementById('btn-finish-module').addEventListener('click', () => this.goToSlide(54));
  }

  // Slide 53: Review My Answers
  renderSlide53ReviewAnswers() {
    const snapshot = this.finalQuiz.attemptSnapshot || this.finalQuiz;

    this.container.innerHTML = `
      <div class="slide-card">
        <span class="slide-category-tag">Answer Review</span>
        <h2 style="font-size: 1.5rem; font-weight: 700; text-align: center; margin-bottom: 0.35rem;">
          YOUR ANSWERS BREAKDOWN
        </h2>
        <p style="text-align: center; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
          Review each question, the option you selected, and the correct explanation.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          ${snapshot.questions.map((q, idx) => {
            const userChoiceId = snapshot.userAnswers[q.id];
            const userChoice = q.options.find(o => o.id === userChoiceId);
            const correctChoice = q.options.find(o => o.isCorrect);
            const isUserCorrect = userChoice && userChoice.isCorrect;

            return `
              <div style="background: #F8FAFC; border: 1.5px solid ${isUserCorrect ? '#86EFAC' : '#FECACA'}; border-radius: var(--radius-md); padding: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-main);">Question ${idx + 1}</span>
                  <span style="font-size: 0.8rem; font-weight: 700; color: ${isUserCorrect ? '#15803D' : '#B91C1C'};">
                    ${isUserCorrect ? '✓ Correct' : '✕ Needs Review'}
                  </span>
                </div>
                <div style="font-size: 0.95rem; font-weight: 600; margin-bottom: 0.5rem;">
                  ${q.prompt}
                </div>
                <div style="font-size: 0.85rem; margin-bottom: 0.25rem;">
                  Your answer: <strong style="color: ${isUserCorrect ? '#15803D' : '#B91C1C'};">${userChoice ? userChoice.label : '(Unanswered)'}</strong>
                </div>
                ${!isUserCorrect ? `
                  <div style="font-size: 0.85rem; color: #15803D; margin-bottom: 0.25rem;">
                    Correct answer: <strong>${correctChoice.label}</strong>
                  </div>
                ` : ''}
                <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.4rem; border-top: 1px dashed var(--color-border); padding-top: 0.35rem;">
                  💡 ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="slide-nav-row">
          <button id="btn-back-results" class="btn-nav btn-nav-prev">← Back to Results</button>
          <button id="btn-next-to-completion" class="btn-nav btn-nav-next">Complete Module ➔</button>
        </div>
      </div>
    `;

    document.getElementById('btn-back-results').addEventListener('click', () => this.goToSlide(52));
    document.getElementById('btn-next-to-completion').addEventListener('click', () => this.goToSlide(54));
  }

  // Slide 54: Completion
  renderSlide54Completion() {
    this.container.innerHTML = `
      <div class="slide-card" style="text-align: center;">
        <span class="slide-category-tag">Congratulations</span>
        <div class="slide-visual-wrapper">
          ${getVisual('completion_badge')}
        </div>
        <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--color-text-main); margin-bottom: 0.5rem;">
          YOU’VE COMPLETED SPORTS!
        </h2>
        <p style="font-size: 1.05rem; color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem;">
          أَحْسَنْتَ! (Well done!)
        </p>
        <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 2rem; max-width: 480px; margin-left: auto; margin-right: auto;">
          You successfully explored all 12 vocabulary cards, 6 sentence patterns, real dialogues with authentic Arabic audio, and the final quiz.
        </p>

        <div style="display: flex; gap: 0.75rem;">
          <button id="btn-review-module" class="btn-nav btn-nav-prev" style="flex: 1; justify-content: center;">
            🔄 Review from Start
          </button>
          <button id="btn-re-quiz" class="btn-primary-cta" style="flex: 1;">
            Re-take Quiz ➔
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-review-module').addEventListener('click', () => this.goToSlide(1));
    document.getElementById('btn-re-quiz').addEventListener('click', () => this.goToSlide(49));
  }

  /* =========================================================================
     MODAL HELPERS
     ========================================================================= */

  populateOutlineList() {
    const listContainer = document.getElementById('outline-slide-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';

    const slideTitles = [
      "1. Welcome & Start",
      "2. Module Intro (Sports)",
      "3. Learning Map",
      "4. Vocab Group 1 Intro",
      "5. Card 1: Football / Soccer",
      "6. Card 2: Basketball",
      "7. Card 3: Volleyball",
      "8. Card 4: Tennis",
      "9. Card 5: Swimming",
      "10. Card 6: Running",
      "11. Practice 1 (Group 1)",
      "12. Vocab Group 2 Intro",
      "13. Card 7: Cycling",
      "14. Card 8: Table Tennis",
      "15. Card 9: Badminton",
      "16. Card 10: Karate",
      "17. Card 11: Yoga",
      "18. Card 12: Walking",
      "19. Practice 2 (Group 2)",
      "20. Vocabulary Recap (12 Words Grid)",
      "21. Sentences Intro",
      "22. Sentence 1: Favourite Sport",
      "23. Sentence 2: Asking Preference",
      "24. Sentence 3: Female Subject",
      "25. Sentence 4: Male Subject",
      "26. Sentence 5: Likes",
      "27. Sentence 6: Dislikes",
      "28. Sentence Practice",
      "29. Gender in Context (هُوَ / هِيَ)",
      "30. Conversation Intro",
      "31. Female Dialogue (Line 1)",
      "32. Female Dialogue (Line 2)",
      "33. Female Dialogue (Line 3)",
      "34. Female Dialogue (Line 4)",
      "35. Female Dialogue (Line 5)",
      "36. Female Dialogue (Line 6)",
      "37. Female Full Playback",
      "38. Male Dialogue Intro",
      "39. Male Dialogue (Line 1)",
      "40. Male Dialogue (Line 2)",
      "41. Male Dialogue (Line 3)",
      "42. Male Dialogue (Line 4 - User Audio)",
      "43. Male Dialogue (Line 5)",
      "44. Male Dialogue (Line 6)",
      "45. Male Full Playback",
      "46. Notice the Difference",
      "47. Conversation Practice",
      "48. Quick Review",
      "49. Final Quiz Intro",
      "50. Final Quiz Questions (10 items)",
      "51. Quiz Submission Confirmation",
      "52. Quiz Results",
      "53. Review My Answers",
      "54. Completion Screen"
    ];

    slideTitles.forEach((title, index) => {
      const slideNum = index + 1;
      const isCurrent = slideNum === this.currentSlide;
      const item = document.createElement('div');
      item.className = `slide-jump-item ${isCurrent ? 'current' : ''}`;
      item.innerHTML = `
        <span>${title}</span>
        ${isCurrent ? '<span>👉 Current</span>' : ''}
      `;
      item.addEventListener('click', () => {
        document.getElementById('outline-modal').classList.remove('active');
        this.goToSlide(slideNum);
      });
      listContainer.appendChild(item);
    });
  }

  populateAudioTesterList() {
    const listContainer = document.getElementById('audio-test-list');
    if (!listContainer) return;

    listContainer.innerHTML = `
      <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1rem;">
        This panel tests pre-loaded MP3 clips and browser Web Speech API voices. All 12 words, 6 sentences, and 12 dialogue lines are playable.
      </div>

      <div style="background: #F0FDF4; border: 1.5px solid #86EFAC; border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1rem;">
        <div style="font-size: 0.9rem; font-weight: 700; color: #166534; margin-bottom: 0.25rem;">
          🎙️ Uploaded Audio Clips Active:
        </div>
        <div style="font-size: 0.8rem; color: #166534;">
          • Male Dialogue Line 4: <code>audio/etera_sports_dialog_m_04_ar.mp3</code> ("أَلْعَبُ يَوْمَ الْجُمُعَةِ")<br>
          • Female Voice Sample: <code>audio/uploaded_0_female_alabu_yawm_aljumuah.mp3</code>
        </div>
      </div>

      <h4 style="font-size: 0.9rem; font-weight: 700; margin: 0.75rem 0 0.5rem;">Dialogue Audio Clips</h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; padding: 0.5rem 0.75rem; border-radius: 6px;">
          <div>
            <strong>Male Line 4 (User Audio)</strong>
            <div class="arabic-inline" style="font-size: 1rem;">أَلْعَبُ يَوْمَ الْجُمُعَةِ</div>
          </div>
          <button id="test-audio-male4" class="btn-listen" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; min-height: 34px;">
            🔊 Play
          </button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; padding: 0.5rem 0.75rem; border-radius: 6px;">
          <div>
            <strong>Female Line 4 Sample</strong>
            <div class="arabic-inline" style="font-size: 1rem;">أَلْعَبُ يَوْمَ الْجُمُعَةِ</div>
          </div>
          <button id="test-audio-fem4" class="btn-listen" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; min-height: 34px;">
            🔊 Play
          </button>
        </div>
      </div>

      <h4 style="font-size: 0.9rem; font-weight: 700; margin: 0.75rem 0 0.5rem;">Sample Vocabulary Clips</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
        ${VOCABULARY_ITEMS.slice(0, 4).map(v => `
          <button class="icon-btn test-vocab-btn" data-vocab-id="${v.id}" style="justify-content: space-between; padding: 0.6rem;">
            <span class="arabic-inline">${v.arabic}</span>
            <span>🔊</span>
          </button>
        `).join('')}
      </div>
    `;

    document.getElementById('test-audio-male4').addEventListener('click', () => {
      audioEngine.play({
        id: 'test_male4',
        audioFile: 'audio/etera_sports_dialog_m_04_ar.mp3',
        arabicText: 'أَلْعَبُ يَوْمَ الْجُمُعَةِ'
      });
    });

    document.getElementById('test-audio-fem4').addEventListener('click', () => {
      audioEngine.play({
        id: 'test_fem4',
        audioFile: 'audio/uploaded_0_female_alabu_yawm_aljumuah.mp3',
        arabicText: 'أَلْعَبُ يَوْمَ الْجُمُعَةِ',
        gender: 'female'
      });
    });

    document.querySelectorAll('.test-vocab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = VOCABULARY_ITEMS.find(v => v.id === btn.dataset.vocabId);
        if (item) {
          audioEngine.play({
            id: 'test_' + item.id,
            audioFile: item.audioFile,
            arabicText: item.arabic,
            gender: 'male'
          });
        }
      });
    });
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.eteraApp = new EteraApp();
});
