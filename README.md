# Project Etera • Sports Module (الرِّيَاضَةُ)
### Web Application for Beginner Arabic Learners (Modern Standard Arabic / MSA)

A production-ready responsive web application implementing the complete **54-slide** production storyboard for **Project Etera - Sports Module**.

---

## 🚀 Quick Start / How to Run

You can run this application immediately in any modern web browser:

### Option 1: Direct File Opening
Double-click `index.html` or open it with your web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Local HTTP Server
If you prefer running via a local server:
```bash
# Using npx serve
npx serve . -l 3000

# Or using Python's built-in HTTP server
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎧 Audio Engine & User Recorded Audio

1. **User Audio Included**:
   - `audio/etera_sports_dialog_m_04_ar.mp3` (Line 4 of the Male Dialogue: *"نَعَمْ، أَلْعَبُ يَوْمَ الْجُمُعَةِ"* / *"Yes, I play on Friday"*).
   - `audio/uploaded_0_female_alabu_yawm_aljumuah.mp3` (Female reference pronunciation).
2. **Universal Web Speech API Fallback**:
   - If an MP3 audio file is not found locally, the system automatically and seamlessly falls back to the browser's built-in Modern Standard Arabic speech synthesizer (`window.speechSynthesis` with `ar-SA` / `ar`).
   - Every single word, sentence, dialogue line, and listening question is audible right out of the box!
3. **Speed Control (Normal 1.0x / Slow 0.75x)**:
   - Toggleable from the header bar (`⚡ 1.0x` / `🐢 0.75x`) and on individual learning cards.
4. **Single-Clip Concurrency Guarantee**:
   - Only one Arabic audio clip plays at any time; starting a new clip immediately stops the previous one.
5. **Non-blocking Error Handling**:
   - Navigation (`NEXT`) is never gated or trapped by audio loading errors.

---

## 📱 54-Slide Complete Storyboard Structure

| Slide Range | Section | Content & Function |
|-------------|---------|---------------------|
| **01 – 03** | **Introduction** | Brand welcome, module objectives, and interactive 5-step learning map. |
| **04 – 10** | **Vocabulary Group 1** | Words 1–6 (Football, Basketball, Volleyball, Tennis, Swimming, Running) with Arabic harakat hero text, transliteration, English meaning, and audio replay. |
| **11** | **Vocab Practice 1** | 5 randomized questions from the question bank (word-to-meaning, picture selection, listening comprehension). |
| **12 – 18** | **Vocabulary Group 2** | Words 7–12 (Cycling, Table Tennis, Badminton, Karate, Yoga, Walking). |
| **19** | **Vocab Practice 2** | 5 randomized questions for Group 2 with supportive non-shaming feedback. |
| **20** | **Vocabulary Recap** | Compact interactive 12-tile grid to replay and compare all sports terms. |
| **21 – 27** | **Sentences (S1–S6)** | Sentences in context with toggleable English translations: favourite sports, preferences, she swims, he runs, likes, dislikes. |
| **28** | **Sentence Practice** | 5 questions checking comprehension, subject identification, and pronoun prefixes. |
| **29** | **Gender in Context** | Visual split scene contrasting *هُوَ يَجْرِي* (he runs) vs *هِيَ تَسْبَحُ* (she swims) with independent audio buttons. |
| **30 – 36** | **Female Dialogue** | 6-line dialogue between two female friends with speaker turn highlights. |
| **37** | **Female Full Playback** | Continuous conversation playback sequencing all 6 turns with natural pauses. |
| **38 – 44** | **Male Dialogue** | Parallel 6-line dialogue between two male friends, featuring the user's recorded audio clip on Line 4! |
| **45** | **Male Full Playback** | Continuous sequenced playback of the male conversation. |
| **46** | **Notice the Difference** | Side-by-side comparison: *هُوَ يَلْعَبُ* vs *هِيَ تَلْعَبُ*. |
| **47** | **Conversation Practice**| 5 questions testing comprehension, days of the week, and verb forms. |
| **48** | **Quick Review** | Compact recap of words, sentences, and dialogue themes before the quiz. |
| **49 – 50** | **Final Quiz (10 Qs)** | Exactly 10 questions randomly sampled without replacement from a bank of 28+ items. Shuffled options with stable ID tracking. |
| **51** | **Quiz Submission** | Answered-count confirmation before final submission. |
| **52** | **Quiz Results** | Supportive score summary (*X/10*) with zero shaming language. |
| **53** | **Review My Answers** | Attempt snapshot review showing learner choice, correct answer, explanation, and audio replay. |
| **54** | **Completion** | Celebratory badge motif with options to restart or re-take the quiz. |

---

## 🎨 Visual Guidelines & Compliance

- **Faceless Mutlak**: All human illustrations feature completely smooth face contours with **zero eyes, nose, mouth, or facial details**.
- **Modest / Syar’i Attire**: Full coverage and hijab for female figures (including modest swimwear for the swimming scene); modest sportswear for male figures.
- **RTL & Typography**:
  - Right-to-Left (`dir="rtl"`) layout for Arabic text with high-clarity fonts (`Tajawal`, `Amiri`).
  - Left-to-Right (`dir="ltr"`) for English and transliteration without mixing directions in a single inline stream.
- **Touch-Friendly UI**: Large touch targets (≥ 48px), clean card elevation, responsive mobile-first layout.
- **Footer**: `© 2026 Etera. All rights reserved.`

---

## 📂 Project Structure

```
├── index.html            # Main web application entry point
├── package.json          # Project metadata & npm preview scripts
├── README.md             # Documentation & setup instructions
├── css/
│   └── style.css         # Responsive styling, typography, animations, RTL formatting
├── js/
│   ├── app.js            # Router, slide rendering, state management, LocalStorage
│   ├── content.js        # Content data model (12 vocab, 6 sentences, dialogues, metadata)
│   ├── questions.js      # Comprehensive question banks (Practice 1 & 2, Sentences, Dialogue, Final Quiz)
│   ├── audio.js          # Audio engine (user mp3 files + Web Speech API fallback + rate controls)
│   └── visual-assets.js  # Cohesive SVG vector illustrations (faceless, modest, sports equipment)
└── audio/
    ├── etera_sports_dialog_m_04_ar.mp3               # User audio for Male Dialogue Line 4
    ├── uploaded_0_female_alabu_yawm_aljumuah.mp3     # User female voice clip
    └── uploaded_1_male_alabu_yawm_aljumuah.mp3       # User male voice clip
```

---
*© 2026 Etera. All rights reserved.*
