(function() {
"use strict";

// --- FILE: js/content.js ---
/**
 * PROJECT ETERA - SPORTS MODULE
 * Content Data Model & Storyboard Registry
 * Modern Standard Arabic (MSA / fuṣḥā)
 */

const VOCABULARY_ITEMS = [
  {
    id: "vocab_01",
    index: 1,
    arabic: "كُرَةُ الْقَدَمِ",
    transliteration: "kurat al-qadam",
    meaning_en: "football / soccer",
    visualCue: "A football on a small pitch.",
    visualKey: "football",
    audioFile: "audio/etera_sports_vocab_01_ar.mp3",
    group: 1
  },
  {
    id: "vocab_02",
    index: 2,
    arabic: "كُرَةُ السَّلَّةِ",
    transliteration: "kurat as-sallah",
    meaning_en: "basketball",
    visualCue: "A basketball and hoop.",
    visualKey: "basketball",
    audioFile: "audio/etera_sports_vocab_02_ar.mp3",
    group: 1
  },
  {
    id: "vocab_03",
    index: 3,
    arabic: "كُرَةُ الطَّائِرَةِ",
    transliteration: "kurat aṭ-ṭā'irah",
    meaning_en: "volleyball",
    visualCue: "A volleyball above a net.",
    visualKey: "volleyball",
    audioFile: "audio/etera_sports_vocab_03_ar.mp3",
    group: 1
  },
  {
    id: "vocab_04",
    index: 4,
    arabic: "التِّنِسُ",
    transliteration: "at-tinis",
    meaning_en: "tennis",
    visualCue: "Tennis racket and ball.",
    visualKey: "tennis",
    audioFile: "audio/etera_sports_vocab_04_ar.mp3",
    group: 1
  },
  {
    id: "vocab_05",
    index: 5,
    arabic: "السِّبَاحَةُ",
    transliteration: "as-sibāḥah",
    meaning_en: "swimming",
    visualCue: "Pool lane; modest swimwear if a person appears.",
    visualKey: "swimming",
    audioFile: "audio/etera_sports_vocab_05_ar.mp3",
    group: 1
  },
  {
    id: "vocab_06",
    index: 6,
    arabic: "الْجَرْيُ",
    transliteration: "al-jary",
    meaning_en: "running",
    visualCue: "Running track or running shoes.",
    visualKey: "running",
    audioFile: "audio/etera_sports_vocab_06_ar.mp3",
    group: 1
  },
  {
    id: "vocab_07",
    index: 7,
    arabic: "رُكُوبُ الدَّرَّاجَةِ",
    transliteration: "rukūb ad-darrājah",
    meaning_en: "cycling",
    visualCue: "Bicycle in a park.",
    visualKey: "cycling",
    audioFile: "audio/etera_sports_vocab_07_ar.mp3",
    group: 2
  },
  {
    id: "vocab_08",
    index: 8,
    arabic: "تَنِسُ الطَّاوِلَةِ",
    transliteration: "tinis aṭ-ṭāwilah",
    meaning_en: "table tennis",
    visualCue: "Table tennis paddle and table.",
    visualKey: "table_tennis",
    audioFile: "audio/etera_sports_vocab_08_ar.mp3",
    group: 2
  },
  {
    id: "vocab_09",
    index: 9,
    arabic: "الرِّيَشَةُ الطَّائِرَةُ",
    transliteration: "ar-rīshah aṭ-ṭā'irah",
    meaning_en: "badminton",
    visualCue: "Racket and shuttlecock.",
    visualKey: "badminton",
    audioFile: "audio/etera_sports_vocab_09_ar.mp3",
    group: 2
  },
  {
    id: "vocab_10",
    index: 10,
    arabic: "الْكَرَاتِيهُ",
    transliteration: "al-karātīh",
    meaning_en: "karate",
    visualCue: "Karate belt and training stance, modest uniform.",
    visualKey: "karate",
    audioFile: "audio/etera_sports_vocab_10_ar.mp3",
    group: 2
  },
  {
    id: "vocab_11",
    index: 11,
    arabic: "الْيُوغَا",
    transliteration: "al-yūghā",
    meaning_en: "yoga",
    visualCue: "A mat and simple pose; modest clothing.",
    visualKey: "yoga",
    audioFile: "audio/etera_sports_vocab_11_ar.mp3",
    group: 2
  },
  {
    id: "vocab_12",
    index: 12,
    arabic: "الْمَشْيُ",
    transliteration: "al-mashy",
    meaning_en: "walking",
    visualCue: "Walking path and shoes.",
    visualKey: "walking",
    audioFile: "audio/etera_sports_vocab_12_ar.mp3",
    group: 2
  }
];

const SENTENCE_ITEMS = [
  {
    id: "sentence_01",
    code: "S1",
    topic: "Favourite sport",
    arabic: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.",
    transliteration: "Riyāḍatī al-mufaḍḍalah kurat al-qadam.",
    meaning_en: "My favourite sport is football.",
    visualDirection: "Speaker points to football; faceless.",
    visualKey: "sentence_fav_football",
    audioFile: "audio/etera_sports_sentence_01_ar.mp3",
    notes: "Expressing personal preference (رِيَاضَتِي = my sport / my athletic activity)."
  },
  {
    id: "sentence_02",
    code: "S2",
    topic: "Asking preference",
    arabic: "مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟",
    transliteration: "Mā riyāḍatuka al-mufaḍḍalah?",
    meaning_en: "What is your favourite sport?",
    visualDirection: "Two modestly dressed characters talking; addressee masculine.",
    visualKey: "sentence_ask_preference",
    audioFile: "audio/etera_sports_sentence_02_ar.mp3",
    notes: "Addressed to a masculine listener (ـكَ -ka). For a feminine listener, it becomes رِيَاضَتُكِ (-ki)."
  },
  {
    id: "sentence_03",
    code: "S3",
    topic: "Female subject",
    arabic: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ.",
    transliteration: "Hiya tasbaḥu fī al-masbaḥi.",
    meaning_en: "She swims in the pool.",
    visualDirection: "Female faceless character in modest swimwear/hijab at poolside.",
    visualKey: "sentence_female_swimming",
    audioFile: "audio/etera_sports_sentence_03_ar.mp3",
    notes: "Notice the feminine prefix in the verb: هِيَ تَسْبَحُ (she swims)."
  },
  {
    id: "sentence_04",
    code: "S4",
    topic: "Male subject",
    arabic: "هُوَ يَجْرِي فِي الْحَدِيقَةِ.",
    transliteration: "Huwa yajrī fī al-ḥadīqati.",
    meaning_en: "He runs in the park.",
    visualDirection: "Male faceless character running in park.",
    visualKey: "sentence_male_running",
    audioFile: "audio/etera_sports_sentence_04_ar.mp3",
    notes: "Notice the masculine prefix in the verb: هُوَ يَجْرِي (he runs)."
  },
  {
    id: "sentence_05",
    code: "S5",
    topic: "Likes",
    arabic: "أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ.",
    transliteration: "Uḥibbu laʿiba kurati as-sallah.",
    meaning_en: "I like playing basketball.",
    visualDirection: "Faceless speaker holding basketball; first-person form.",
    visualKey: "sentence_like_basketball",
    audioFile: "audio/etera_sports_sentence_05_ar.mp3",
    notes: "The first-person verb أُحِبُّ (I like / love) does not change by speaker's gender."
  },
  {
    id: "sentence_06",
    code: "S6",
    topic: "Dislikes",
    arabic: "لَا أُحِبُّ رُكُوبَ الدَّرَّاجَةِ.",
    transliteration: "Lā uḥibbu rukūba ad-darrājati.",
    meaning_en: "I do not like cycling.",
    visualDirection: "Faceless speaker beside a bicycle, gently indicating preference.",
    visualKey: "sentence_dislike_cycling",
    audioFile: "audio/etera_sports_sentence_06_ar.mp3",
    notes: "Negation: لَا أُحِبُّ (I do not like)."
  }
];

const FEMALE_DIALOGUE = [
  {
    speaker: "A",
    speakerLabel: "Speaker A (Sister)",
    arabic: "مَا رِيَاضَتُكِ الْمُفَضَّلَةُ؟",
    transliteration: "Mā riyāḍatuki al-mufaḍḍalah?",
    meaning_en: "What is your favourite sport?",
    audioFile: "audio/etera_sports_dialog_f_01_ar.mp3",
    voiceGender: "female"
  },
  {
    speaker: "B",
    speakerLabel: "Speaker B (Friend)",
    arabic: "رِيَاضَتِي الْمُفَضَّلَةُ السِّبَاحَةُ.",
    transliteration: "Riyāḍatī al-mufaḍḍalah as-sibāḥah.",
    meaning_en: "My favourite sport is swimming.",
    audioFile: "audio/etera_sports_dialog_f_02_ar.mp3",
    voiceGender: "female"
  },
  {
    speaker: "A",
    speakerLabel: "Speaker A (Sister)",
    arabic: "هَلْ تَسْبَحِينَ كُلَّ أُسْبُوعٍ؟",
    transliteration: "Hal tasbaḥīna kulla usbūʿin?",
    meaning_en: "Do you swim every week?",
    audioFile: "audio/etera_sports_dialog_f_03_ar.mp3",
    voiceGender: "female"
  },
  {
    speaker: "B",
    speakerLabel: "Speaker B (Friend)",
    arabic: "نَعَمْ، أَسْبَحُ يَوْمَ السَّبْتِ.",
    transliteration: "Naʿam, asbaḥu yawma as-sabti.",
    meaning_en: "Yes, I swim on Saturday.",
    audioFile: "audio/etera_sports_dialog_f_04_ar.mp3",
    voiceGender: "female"
  },
  {
    speaker: "A",
    speakerLabel: "Speaker A (Sister)",
    arabic: "أَنَا أُحِبُّ كُرَةَ السَّلَّةِ.",
    transliteration: "Anā uḥibbu kurata as-sallah.",
    meaning_en: "I like basketball.",
    audioFile: "audio/etera_sports_dialog_f_05_ar.mp3",
    voiceGender: "female"
  },
  {
    speaker: "B",
    speakerLabel: "Speaker B (Friend)",
    arabic: "رَائِعٌ!",
    transliteration: "Rā'iʿ!",
    meaning_en: "Great!",
    audioFile: "audio/etera_sports_dialog_f_06_ar.mp3",
    voiceGender: "female"
  }
];

const MALE_DIALOGUE = [
  {
    speaker: "A",
    speakerLabel: "Speaker A (Brother)",
    arabic: "مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟",
    transliteration: "Mā riyāḍatuka al-mufaḍḍalah?",
    meaning_en: "What is your favourite sport?",
    audioFile: "audio/etera_sports_dialog_m_01_ar.mp3",
    voiceGender: "male"
  },
  {
    speaker: "B",
    speakerLabel: "Speaker B (Friend)",
    arabic: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.",
    transliteration: "Riyāḍatī al-mufaḍḍalah kurat al-qadam.",
    meaning_en: "My favourite sport is football.",
    audioFile: "audio/etera_sports_dialog_m_02_ar.mp3",
    voiceGender: "male"
  },
  {
    speaker: "A",
    speakerLabel: "Speaker A (Brother)",
    arabic: "هَلْ تَلْعَبُ كُلَّ أُسْبُوعٍ؟",
    transliteration: "Hal talʿabu kulla usbūʿin?",
    meaning_en: "Do you play every week?",
    audioFile: "audio/etera_sports_dialog_m_03_ar.mp3",
    voiceGender: "male"
  },
  {
    speaker: "B",
    speakerLabel: "Speaker B (Friend)",
    arabic: "نَعَمْ، أَلْعَبُ يَوْمَ الْجُمُعَةِ.",
    transliteration: "Naʿam, alʿabu yawma al-jumuʿati.",
    meaning_en: "Yes, I play on Friday.",
    audioFile: "audio/etera_sports_dialog_m_04_ar.mp3", // User provided recorded audio file!
    voiceGender: "male",
    isUserAudioRecorded: true
  },
  {
    speaker: "A",
    speakerLabel: "Speaker A (Brother)",
    arabic: "أَنَا أُحِبُّ السِّبَاحَةَ.",
    transliteration: "Anā uḥibbu as-sibāḥah.",
    meaning_en: "I like swimming.",
    audioFile: "audio/etera_sports_dialog_m_05_ar.mp3",
    voiceGender: "male"
  },
  {
    speaker: "B",
    speakerLabel: "Speaker B (Friend)",
    arabic: "رَائِعٌ!",
    transliteration: "Rā'iʿ!",
    meaning_en: "Great!",
    audioFile: "audio/etera_sports_dialog_m_06_ar.mp3",
    voiceGender: "male"
  }
];

const GENDER_NOTICES = {
  verbsInContext: {
    male: {
      arabic: "هُوَ يَجْرِي",
      transliteration: "huwa yajrī",
      meaning: "He runs",
      audio: "audio/etera_sports_notice_male_run.mp3"
    },
    female: {
      arabic: "هِيَ تَسْبَحُ",
      transliteration: "hiya tasbaḥu",
      meaning: "She swims",
      audio: "audio/etera_sports_notice_female_swim.mp3"
    },
    ruleExplanation: "Notice how the verb begins with (يَـ) for masculine singular (هُوَ يَـ...), and with (تَـ) for feminine singular (هِيَ تَـ...)."
  },
  verbsPlaying: {
    male: {
      arabic: "هُوَ يَلْعَبُ",
      transliteration: "huwa yalʿabu",
      meaning: "He plays",
      audio: "audio/etera_sports_notice_male_play.mp3"
    },
    female: {
      arabic: "هِيَ تَلْعَبُ",
      transliteration: "hiya talʿabu",
      meaning: "She plays",
      audio: "audio/etera_sports_notice_female_play.mp3"
    },
    ruleExplanation: "The verb form adapts to the subject. Male: هُوَ يَلْعَبُ (yal'ab). Female: هِيَ تَلْعَبُ (tal'ab)."
  }
};

const MODULE_METADATA = {
  platform: "Responsive web app; mobile-first; browser-based.",
  name: "Project Etera",
  moduleTitle: "Sports • Beginner Arabic",
  variety: "Modern Standard Arabic (MSA / fuṣḥā)",
  copyright: "© 2026 Etera. All rights reserved.",
  totalSlides: 54,
  sections: [
    { id: "intro", title: "Introduction", startSlide: 1, endSlide: 3 },
    { id: "vocab1", title: "Vocabulary (Group 1)", startSlide: 4, endSlide: 11 },
    { id: "vocab2", title: "Vocabulary (Group 2)", startSlide: 12, endSlide: 20 },
    { id: "sentences", title: "Sentences & Notice", startSlide: 21, endSlide: 29 },
    { id: "dialogues", title: "Conversations", startSlide: 30, endSlide: 47 },
    { id: "assessment", title: "Review & Final Quiz", startSlide: 48, endSlide: 54 }
  ]
};


// --- FILE: js/visual-assets.js ---
/**
 * PROJECT ETERA - SPORTS MODULE
 * Cohesive Vector SVG Illustrations
 * Follows strict Storyboard visual direction:
 * - Faceless mutlak: zero eyes, nose, mouth, facial details.
 * - Modest / syar'i attire: hijab & full coverage for female figures, modest sportswear for male figures.
 * - Minimal, mature, clean aesthetic.
 */

const VISUAL_ASSETS = {
  // Brand / Module Cover Still Life
  module_cover: `
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-56">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F8FAFC"/>
          <stop offset="1" stop-color="#EEF2F6"/>
        </linearGradient>
        <linearGradient id="pitchGrad" x1="50" y1="180" x2="350" y2="220" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E2E8F0"/>
          <stop offset="1" stop-color="#CBD5E1"/>
        </linearGradient>
      </defs>
      <!-- Background subtle ground curve -->
      <rect width="400" height="240" rx="16" fill="url(#bgGrad)"/>
      <ellipse cx="200" cy="200" rx="160" ry="24" fill="url(#pitchGrad)"/>
      
      <!-- Football -->
      <circle cx="150" cy="170" r="32" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
      <polygon points="150,150 162,159 158,173 142,173 138,159" fill="#0F172A"/>
      <polygon points="150,150 150,138 135,142 138,159" stroke="#0F172A" stroke-width="2" fill="none"/>
      <polygon points="162,159 174,155 178,168 158,173" stroke="#0F172A" stroke-width="2" fill="none"/>
      
      <!-- Basketball -->
      <circle cx="235" cy="165" r="36" fill="#F97316" stroke="#9A3412" stroke-width="3"/>
      <path d="M200 165 H270" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M235 130 V200" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M210 140 C225 152 225 178 210 190" stroke="#7C2D12" stroke-width="2" fill="none"/>
      <path d="M260 140 C245 152 245 178 260 190" stroke="#7C2D12" stroke-width="2" fill="none"/>
      
      <!-- Tennis Racket Head leaning -->
      <ellipse cx="295" cy="145" rx="20" ry="32" transform="rotate(25 295 145)" stroke="#0D9488" stroke-width="4" fill="#F0FDFA" opacity="0.9"/>
      <line x1="280" y1="125" x2="310" y2="165" stroke="#99F6E4" stroke-width="1.5"/>
      <line x1="310" y1="125" x2="280" y2="165" stroke="#99F6E4" stroke-width="1.5"/>
      <rect x="312" y="170" width="8" height="42" rx="4" transform="rotate(25 312 170)" fill="#0F766E"/>
      
      <!-- Shuttlecock -->
      <path d="M100 160 L85 135 L115 135 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
      <ellipse cx="100" cy="160" rx="8" ry="6" fill="#F43F5E"/>
    </svg>
  `,

  // 01: Football on pitch
  football: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F1F5F9"/>
      <!-- Pitch turf -->
      <path d="M20 145 C70 135 170 135 220 145 L215 165 C165 172 75 172 25 165 Z" fill="#DCFCE7"/>
      <path d="M40 142 L200 142" stroke="#86EFAC" stroke-width="2" stroke-dasharray="4 4"/>
      <!-- Football -->
      <circle cx="120" cy="115" r="38" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
      <!-- Pentagons -->
      <polygon points="120,95 133,105 128,121 112,121 107,105" fill="#1E293B"/>
      <!-- Radiating seam lines -->
      <line x1="120" y1="95" x2="120" y2="78" stroke="#1E293B" stroke-width="2"/>
      <line x1="133" y1="105" x2="149" y2="98" stroke="#1E293B" stroke-width="2"/>
      <line x1="128" y1="121" x2="142" y2="137" stroke="#1E293B" stroke-width="2"/>
      <line x1="112" y1="121" x2="98" y2="137" stroke="#1E293B" stroke-width="2"/>
      <line x1="107" y1="105" x2="91" y2="98" stroke="#1E293B" stroke-width="2"/>
      <!-- Subtle shadow -->
      <ellipse cx="120" cy="154" rx="28" ry="6" fill="#94A3B8" opacity="0.4"/>
    </svg>
  `,

  // 02: Basketball and hoop
  basketball: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FFF7ED"/>
      <!-- Backboard and rim -->
      <rect x="140" y="25" width="8" height="60" rx="2" fill="#94A3B8"/>
      <rect x="95" y="65" width="45" height="5" rx="2" fill="#EA580C"/>
      <!-- Net -->
      <path d="M98 70 L110 100 L122 70 L134 100 L138 70" stroke="#CBD5E1" stroke-width="2" fill="none"/>
      <path d="M102 85 L135 85" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Basketball -->
      <ellipse cx="75" cy="125" rx="34" ry="34" fill="#F97316" stroke="#9A3412" stroke-width="3"/>
      <path d="M42 125 H108" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M75 92 V158" stroke="#7C2D12" stroke-width="2.5"/>
      <path d="M52 102 C66 113 66 137 52 148" stroke="#7C2D12" stroke-width="2" fill="none"/>
      <path d="M98 102 C84 113 84 137 98 148" stroke="#7C2D12" stroke-width="2" fill="none"/>
      <!-- Shadow -->
      <ellipse cx="75" cy="162" rx="26" ry="5" fill="#FED7AA" opacity="0.8"/>
    </svg>
  `,

  // 03: Volleyball above net
  volleyball: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Net pole & mesh -->
      <line x1="25" y1="80" x2="215" y2="80" stroke="#059669" stroke-width="4"/>
      <line x1="25" y1="130" x2="215" y2="130" stroke="#059669" stroke-width="3"/>
      <!-- Net grid lines -->
      <path d="M40 80 V130 M70 80 V130 M100 80 V130 M130 80 V130 M160 80 V130 M190 80 V130" stroke="#6EE7B7" stroke-width="1.5"/>
      <path d="M25 105 H215" stroke="#6EE7B7" stroke-width="1.5"/>
      <!-- Volleyball hovering in air -->
      <g transform="translate(120, 48)">
        <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#047857" stroke-width="2.5"/>
        <path d="M-21 -21 C-5 -5 -5 15 -21 21" stroke="#FBBF24" stroke-width="4" fill="none"/>
        <path d="M21 -21 C5 -5 5 15 21 21" stroke="#3B82F6" stroke-width="4" fill="none"/>
        <path d="M-29 0 C-10 0 10 0 29 0" stroke="#047857" stroke-width="2"/>
        <path d="M0 -29 C0 -10 0 10 0 29" stroke="#047857" stroke-width="2"/>
      </g>
    </svg>
  `,

  // 04: Tennis racket and ball
  tennis: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Tennis Racket -->
      <g transform="translate(100, 85) rotate(-20)">
        <ellipse cx="0" cy="-25" rx="28" ry="40" stroke="#2563EB" stroke-width="4" fill="#EFF6FF"/>
        <!-- Strings -->
        <path d="M-18 -25 H18 M-24 -40 H24 M-24 -10 H24 M0 -60 V10 M-12 -55 V5 M12 -55 V5" stroke="#93C5FD" stroke-width="1.5"/>
        <!-- Throat and grip -->
        <path d="M-8 15 L-6 40 H6 L8 15 Z" fill="#1D4ED8"/>
        <rect x="-6" y="40" width="12" height="42" rx="4" fill="#1E293B"/>
        <path d="M-6 48 H6 M-6 58 H6 M-6 68 H6" stroke="#94A3B8" stroke-width="1.5"/>
      </g>
      <!-- Tennis ball with felt curve -->
      <circle cx="165" cy="115" r="18" fill="#CCFF00" stroke="#65A30D" stroke-width="2.5"/>
      <path d="M152 105 C162 110 162 120 152 125" stroke="#FFFFFF" stroke-width="2" fill="none"/>
      <path d="M178 105 C168 110 168 120 178 125" stroke="#FFFFFF" stroke-width="2" fill="none"/>
    </svg>
  `,

  // 05: Swimming pool lane & modest swimmer (faceless, hijab swimwear)
  swimming: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#E0F2FE"/>
      <!-- Pool lane floats -->
      <path d="M15 50 Q120 60 225 50" stroke="#0284C7" stroke-width="4" stroke-dasharray="10 8"/>
      <path d="M15 140 Q120 148 225 140" stroke="#0284C7" stroke-width="4" stroke-dasharray="10 8"/>
      <!-- Water waves -->
      <path d="M30 85 Q70 75 110 85 T190 85" stroke="#38BDF8" stroke-width="2" fill="none"/>
      <path d="M50 115 Q90 105 130 115 T210 115" stroke="#38BDF8" stroke-width="2" fill="none"/>
      
      <!-- Modest faceless swimmer silhouette (swimming cap/burkini, fully covered, faceless) -->
      <g transform="translate(110, 85)">
        <!-- Arm extending stroke in water -->
        <path d="M-35 8 C-10 -5 15 -10 35 -5" stroke="#0369A1" stroke-width="8" stroke-linecap="round"/>
        <!-- Body with full modest coverage -->
        <ellipse cx="0" cy="5" rx="30" ry="12" fill="#0C4A6E"/>
        <!-- Head with modest swimming hood/cap (faceless - completely smooth) -->
        <circle cx="28" cy="-2" r="13" fill="#075985"/>
        <!-- Splash bubbles -->
        <circle cx="-38" cy="12" r="3" fill="#BAE6FD"/>
        <circle cx="-45" cy="5" r="2" fill="#BAE6FD"/>
      </g>
    </svg>
  `,

  // 06: Running track and shoes / runner silhouette (faceless, modest activewear)
  running: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FFF1F2"/>
      <!-- Track lanes -->
      <path d="M20 135 C80 125 160 125 220 135" stroke="#E11D48" stroke-width="8" stroke-linecap="round"/>
      <path d="M20 155 C80 145 160 145 220 155" stroke="#FDA4AF" stroke-width="2" stroke-dasharray="8 6"/>
      <!-- Faceless modest runner (long sleeve athletic wear, joggers, faceless head) -->
      <g transform="translate(120, 45)">
        <!-- Head (faceless, smooth silhouette) -->
        <circle cx="0" cy="18" r="14" fill="#9F1239"/>
        <!-- Torso in modest running top -->
        <path d="M-10 32 C-14 45 -12 70 -5 78 H8 C12 70 12 45 8 32 Z" fill="#BE123C"/>
        <!-- Arms in running motion -->
        <path d="M-8 38 L-22 55 L-12 65" stroke="#BE123C" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M8 38 L24 48 L32 38" stroke="#BE123C" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Legs in running stride (modest joggers) -->
        <path d="M-4 78 L-18 105 L-5 112" stroke="#4C0519" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M6 78 L22 96 L28 114" stroke="#4C0519" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Running shoes -->
        <ellipse cx="-4" cy="113" rx="7" ry="4" fill="#F43F5E"/>
        <ellipse cx="30" cy="116" rx="7" ry="4" fill="#F43F5E"/>
      </g>
    </svg>
  `,

  // 07: Bicycle in a park
  cycling: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Park greenery hills -->
      <path d="M10 155 C60 140 180 140 230 155" stroke="#86EFAC" stroke-width="6" stroke-linecap="round"/>
      <circle cx="205" cy="120" r="18" fill="#DCFCE7"/>
      <rect x="202" y="132" width="6" height="18" fill="#86EFAC"/>
      
      <!-- Bicycle -->
      <g transform="translate(115, 115)">
        <!-- Wheels -->
        <circle cx="-45" cy="20" r="22" stroke="#334155" stroke-width="3" fill="#FFFFFF"/>
        <circle cx="45" cy="20" r="22" stroke="#334155" stroke-width="3" fill="#FFFFFF"/>
        <circle cx="-45" cy="20" r="4" fill="#64748B"/>
        <circle cx="45" cy="20" r="4" fill="#64748B"/>
        <!-- Frame -->
        <path d="M-45 20 L-15 20 L25 -10 L-10 -10 Z" stroke="#16A34A" stroke-width="3.5" stroke-linejoin="round" fill="none"/>
        <path d="M-15 20 L-22 -16" stroke="#16A34A" stroke-width="3.5"/>
        <path d="M25 -10 L45 20" stroke="#16A34A" stroke-width="3.5"/>
        <!-- Handlebar & seat -->
        <path d="M20 -20 H32" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
        <path d="M-28 -18 H-14" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
        <!-- Pedals -->
        <circle cx="-15" cy="20" r="6" stroke="#0F172A" stroke-width="2" fill="#E2E8F0"/>
      </g>
    </svg>
  `,

  // 08: Table tennis paddle and table
  table_tennis: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FEFCE8"/>
      <!-- Ping pong table in isometric view -->
      <polygon points="40,120 140,105 200,125 100,140" fill="#1E3A8A"/>
      <polygon points="40,120 100,140 100,146 40,126" fill="#172554"/>
      <polygon points="100,140 200,125 200,131 100,146" fill="#172554"/>
      <!-- Net -->
      <line x1="120" y1="112" x2="150" y2="132" stroke="#FFFFFF" stroke-width="4"/>
      <!-- Table tennis paddle -->
      <g transform="translate(90, 65) rotate(-15)">
        <ellipse cx="0" cy="0" rx="22" ry="26" fill="#DC2626" stroke="#991B1B" stroke-width="3"/>
        <rect x="-5" y="24" width="10" height="28" rx="3" fill="#D97706"/>
      </g>
      <!-- Small white ball -->
      <circle cx="155" cy="75" r="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    </svg>
  `,

  // 09: Badminton racket and shuttlecock
  badminton: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDFA"/>
      <!-- Badminton Racket -->
      <g transform="translate(100, 85) rotate(35)">
        <ellipse cx="0" cy="-35" rx="24" ry="32" stroke="#0D9488" stroke-width="3" fill="#CCFBF1"/>
        <!-- Fine cross string mesh -->
        <path d="M-16 -35 H16 M-14 -50 H14 M-14 -20 H14 M0 -65 V-5 M-10 -60 V-10 M10 -60 V-10" stroke="#5EEAD4" stroke-width="1.2"/>
        <!-- Shaft & Grip -->
        <line x1="0" y1="-3" x2="0" y2="40" stroke="#0F766E" stroke-width="3"/>
        <rect x="-4" y="40" width="8" height="35" rx="3" fill="#134E4A"/>
      </g>
      <!-- Shuttlecock (feather and cork) -->
      <g transform="translate(155, 65) rotate(-25)">
        <path d="M0 0 L-18 -32 H18 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <line x1="-12" y1="-18" x2="12" y2="-18" stroke="#94A3B8" stroke-width="1.5"/>
        <ellipse cx="0" cy="2" rx="9" ry="7" fill="#F43F5E"/>
      </g>
    </svg>
  `,

  // 10: Karate belt and training stance (faceless, modest uniform)
  karate: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Dojo mat ground -->
      <rect x="30" y="145" width="180" height="10" rx="3" fill="#E2E8F0"/>
      <!-- Faceless karateka in modest white gi with black belt -->
      <g transform="translate(120, 40)">
        <!-- Head: completely smooth, faceless -->
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <!-- White Gi Jacket (wrap-over design) -->
        <path d="M-16 32 L-22 68 H22 L16 32 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
        <path d="M-12 32 L5 68 M12 32 L-5 68" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Black belt with knot -->
        <rect x="-24" y="65" width="48" height="7" rx="2" fill="#0F172A"/>
        <path d="M-2 72 L-6 92 M3 72 L7 90" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
        <!-- Guard arms -->
        <path d="M-16 42 L-34 52 L-28 35" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 42 L34 46 L26 30" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Loose white pants in martial stance -->
        <path d="M-15 72 L-25 108" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
        <path d="M15 72 L25 108" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // 11: Yoga mat and simple pose (faceless, modest clothing)
  yoga: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#FAF5FF"/>
      <!-- Yoga Mat -->
      <rect x="35" y="135" width="170" height="12" rx="6" fill="#C084FC"/>
      <!-- Faceless modest yoga figure in gentle seated/tree pose -->
      <g transform="translate(120, 60)">
        <!-- Head (faceless, smooth silhouette) -->
        <circle cx="0" cy="15" r="13" fill="#6B21A8"/>
        <!-- Modest top -->
        <path d="M-10 28 C-14 42 -10 65 0 68 C10 65 14 42 10 28 Z" fill="#9333EA"/>
        <!-- Peaceful arms extended/prayer -->
        <path d="M-10 35 C-25 40 -20 20 -4 18" stroke="#9333EA" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M10 35 C25 40 20 20 4 18" stroke="#9333EA" stroke-width="5" stroke-linecap="round" fill="none"/>
        <!-- Modest loose yoga pants seated gracefully -->
        <path d="M-28 72 C-20 62 20 62 28 72 Z" fill="#581C87"/>
      </g>
    </svg>
  `,

  // 12: Walking path and shoes
  walking: `
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="240" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Cobblestone or winding walking path -->
      <path d="M80 180 Q110 110 130 50 L160 50 Q145 110 165 180 Z" fill="#E2E8F0"/>
      <line x1="95" y1="160" x2="148" y2="160" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="110" y1="120" x2="142" y2="120" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="5 5"/>
      <!-- Trees along path -->
      <circle cx="60" cy="90" r="16" fill="#86EFAC"/>
      <circle cx="190" cy="80" r="18" fill="#86EFAC"/>
      <!-- Comfortable walking shoes on path -->
      <g transform="translate(112, 130)">
        <ellipse cx="0" cy="0" rx="14" ry="7" fill="#0284C7"/>
        <path d="M-8 -6 C-2 -10 6 -8 12 -2" stroke="#E0F2FE" stroke-width="2" fill="none"/>
      </g>
      <g transform="translate(138, 110)">
        <ellipse cx="0" cy="0" rx="14" ry="7" fill="#0284C7"/>
        <path d="M-8 -6 C-2 -10 6 -8 12 -2" stroke="#E0F2FE" stroke-width="2" fill="none"/>
      </g>
    </svg>
  `,

  // Sentence S1: Favourite sport (football)
  sentence_fav_football: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Ground -->
      <ellipse cx="140" cy="160" rx="110" ry="14" fill="#E2E8F0"/>
      <!-- Faceless speaker gesturing to football -->
      <g transform="translate(95, 55)">
        <circle cx="0" cy="18" r="14" fill="#475569"/>
        <path d="M-10 32 L-14 78 H14 L10 32 Z" fill="#3B82F6"/>
        <path d="M8 40 L28 62" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/>
        <!-- Legs in trousers -->
        <path d="M-6 78 V105 M6 78 V105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
      </g>
      <!-- Football being pointed to -->
      <circle cx="165" cy="135" r="24" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.5"/>
      <polygon points="165,123 173,129 170,139 160,139 157,129" fill="#0F172A"/>
    </svg>
  `,

  // Sentence S2: Asking preference (two faceless characters talking)
  sentence_ask_preference: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F1F5F9"/>
      <ellipse cx="140" cy="162" rx="100" ry="12" fill="#E2E8F0"/>
      <!-- Character 1 (Speaker asking question) -->
      <g transform="translate(85, 55)">
        <circle cx="0" cy="18" r="13" fill="#334155"/>
        <path d="M-8 32 L-12 78 H12 L8 32 Z" fill="#0D9488"/>
        <path d="M8 42 L24 48" stroke="#0D9488" stroke-width="5" stroke-linecap="round"/>
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="5" stroke-linecap="round"/>
      </g>
      <!-- Speech bubble motif with question symbol ? -->
      <rect x="112" y="35" width="56" height="30" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
      <text x="140" y="56" font-size="20" font-family="Arial" font-weight="bold" fill="#0D9488" text-anchor="middle">؟</text>
      <!-- Character 2 (Addressee listening politely) -->
      <g transform="translate(195, 55)">
        <circle cx="0" cy="18" r="13" fill="#475569"/>
        <path d="M-8 32 L-12 78 H12 L8 32 Z" fill="#3B82F6"/>
        <path d="M-8 42 L-18 58" stroke="#3B82F6" stroke-width="5" stroke-linecap="round"/>
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Sentence S3: Female subject swimming (modest swimwear, poolside)
  sentence_female_swimming: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#E0F2FE"/>
      <!-- Pool water tiles -->
      <path d="M10 80 Q140 70 270 80 V170 H10 Z" fill="#BAE6FD" opacity="0.6"/>
      <path d="M20 110 Q140 100 260 110" stroke="#0284C7" stroke-width="2"/>
      <path d="M40 140 Q150 132 250 140" stroke="#0284C7" stroke-width="2"/>
      <!-- Female faceless swimmer in modest swimwear / hijab -->
      <g transform="translate(130, 95)">
        <ellipse cx="0" cy="5" rx="36" ry="14" fill="#0369A1"/>
        <!-- Head with modest swim hood (faceless) -->
        <circle cx="34" cy="-4" r="13" fill="#075985"/>
        <path d="M-40 8 C-15 -6 18 -12 40 -6" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
      </g>
      <!-- Label tag for grammar notice -->
      <rect x="25" y="25" width="80" height="28" rx="6" fill="#FFFFFF" stroke="#38BDF8"/>
      <text x="65" y="44" font-size="14" font-weight="bold" fill="#0369A1" text-anchor="middle">هِيَ (She)</text>
    </svg>
  `,

  // Sentence S4: Male subject running in park
  sentence_male_running: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F0FDF4"/>
      <!-- Park trees and path -->
      <circle cx="50" cy="95" r="22" fill="#BBF7D0"/>
      <circle cx="230" cy="85" r="25" fill="#BBF7D0"/>
      <path d="M20 150 C100 135 180 135 260 150" stroke="#86EFAC" stroke-width="6"/>
      <!-- Faceless male runner -->
      <g transform="translate(135, 50)">
        <circle cx="0" cy="18" r="14" fill="#1E293B"/>
        <path d="M-8 32 L-10 70 H10 L8 32 Z" fill="#15803D"/>
        <!-- Running arms -->
        <path d="M-6 38 L-20 52 L-12 60" stroke="#15803D" stroke-width="6" stroke-linecap="round"/>
        <path d="M6 38 L22 46 L28 38" stroke="#15803D" stroke-width="6" stroke-linecap="round"/>
        <!-- Stride legs -->
        <path d="M-4 70 L-18 96" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
        <path d="M4 70 L18 90 L24 105" stroke="#0F172A" stroke-width="7" stroke-linecap="round"/>
      </g>
      <!-- Label tag for grammar notice -->
      <rect x="25" y="25" width="80" height="28" rx="6" fill="#FFFFFF" stroke="#4ADE80"/>
      <text x="65" y="44" font-size="14" font-weight="bold" fill="#15803D" text-anchor="middle">هُوَ (He)</text>
    </svg>
  `,

  // Sentence S5: Likes basketball
  sentence_like_basketball: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#FFF7ED"/>
      <!-- Faceless figure holding basketball happily -->
      <g transform="translate(110, 50)">
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <path d="M-10 32 L-12 78 H12 L10 32 Z" fill="#EA580C"/>
        <!-- Arms cradling ball -->
        <path d="M8 40 L28 50" stroke="#EA580C" stroke-width="6" stroke-linecap="round"/>
        <path d="M-8 40 L15 55" stroke="#EA580C" stroke-width="6" stroke-linecap="round"/>
        <!-- Legs -->
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
      </g>
      <!-- Basketball in hands -->
      <circle cx="152" cy="102" r="22" fill="#F97316" stroke="#9A3412" stroke-width="2.5"/>
      <path d="M130 102 H174 M152 80 V124" stroke="#7C2D12" stroke-width="2"/>
    </svg>
  `,

  // Sentence S6: Dislikes cycling
  sentence_dislike_cycling: `
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="280" height="180" rx="12" fill="#F8FAFC"/>
      <!-- Bicycle beside figure -->
      <g transform="translate(80, 115) scale(0.7)">
        <circle cx="-40" cy="20" r="20" stroke="#64748B" stroke-width="3" fill="#FFFFFF"/>
        <circle cx="40" cy="20" r="20" stroke="#64748B" stroke-width="3" fill="#FFFFFF"/>
        <path d="M-40 20 L-15 20 L20 -10 L-10 -10 Z" stroke="#94A3B8" stroke-width="3" fill="none"/>
      </g>
      <!-- Faceless speaker politely declining with hand gesture -->
      <g transform="translate(175, 55)">
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <path d="M-10 32 L-12 78 H12 L10 32 Z" fill="#64748B"/>
        <!-- Raised palm gentle decline gesture -->
        <path d="M-10 40 L-26 35" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
        <circle cx="-28" cy="35" r="4" fill="#64748B"/>
        <path d="M-5 78 V105 M5 78 V105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Dialogue Scenes: Female Friends (Speaker A & B, modest attire & hijab, faceless)
  female_dialogue: `
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="320" height="180" rx="12" fill="#FDF4FF"/>
      <!-- Sports club benches and decor -->
      <rect x="30" y="150" width="260" height="8" rx="4" fill="#F0ABFC"/>
      
      <!-- Speaker A (Left) - Modest attire with Lavender Hijab -->
      <g id="speakerA_group" transform="translate(90, 50)">
        <!-- Hijab & head silhouette (no face) -->
        <path d="M0 4 C-12 4 -16 16 -16 26 C-16 38 -8 44 0 44 C8 44 16 38 16 26 C16 16 12 4 0 4 Z" fill="#A855F7"/>
        <ellipse cx="0" cy="22" rx="10" ry="12" fill="#D8B4FE"/> <!-- Smooth faceless face area -->
        <!-- Modest dress/abaya -->
        <path d="M-14 44 L-24 100 H24 L14 44 Z" fill="#9333EA"/>
        <!-- Gentle turn gesture -->
        <path d="M12 56 L28 66" stroke="#9333EA" stroke-width="5" stroke-linecap="round"/>
      </g>

      <!-- Speaker B (Right) - Modest attire with Teal Hijab -->
      <g id="speakerB_group" transform="translate(230, 50)">
        <!-- Hijab & head silhouette (no face) -->
        <path d="M0 4 C-12 4 -16 16 -16 26 C-16 38 -8 44 0 44 C8 44 16 38 16 26 C16 16 12 4 0 4 Z" fill="#0D9488"/>
        <ellipse cx="0" cy="22" rx="10" ry="12" fill="#99F6E4"/> <!-- Smooth faceless face area -->
        <!-- Modest abaya/tunic -->
        <path d="M-14 44 L-24 100 H24 L14 44 Z" fill="#0F766E"/>
        <path d="M-12 56 L-26 66" stroke="#0F766E" stroke-width="5" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Dialogue Scenes: Male Friends (Speaker A & B, modest sportswear, faceless)
  male_dialogue: `
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-48 mx-auto">
      <rect width="320" height="180" rx="12" fill="#F1F5F9"/>
      <ellipse cx="160" cy="158" rx="130" ry="12" fill="#E2E8F0"/>
      
      <!-- Speaker A (Left) - Modest Tracksuit, Faceless -->
      <g id="male_speakerA_group" transform="translate(100, 50)">
        <circle cx="0" cy="18" r="14" fill="#334155"/>
        <path d="M-10 32 L-14 78 H14 L10 32 Z" fill="#0284C7"/>
        <path d="M10 44 L28 54" stroke="#0284C7" stroke-width="5" stroke-linecap="round"/>
        <path d="M-6 78 V105 M6 78 V105" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
      </g>

      <!-- Speaker B (Right) - Modest Tracksuit, Faceless -->
      <g id="male_speakerB_group" transform="translate(220, 50)">
        <circle cx="0" cy="18" r="14" fill="#475569"/>
        <path d="M-10 32 L-14 78 H14 L10 32 Z" fill="#059669"/>
        <path d="M-10 44 L-28 54" stroke="#059669" stroke-width="5" stroke-linecap="round"/>
        <path d="M-6 78 V105 M6 78 V105" stroke="#0F172A" stroke-width="6" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Completion celebratory badge (faceless, clean, non-garish)
  completion_badge: `
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full max-h-52 mx-auto">
      <circle cx="120" cy="100" r="70" fill="#F0FDF4" stroke="#86EFAC" stroke-width="3"/>
      <circle cx="120" cy="100" r="56" fill="#15803D"/>
      <!-- Checkmark -->
      <path d="M100 100 L114 114 L144 84" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Laurel leaves -->
      <path d="M60 120 C50 90 65 60 85 45" stroke="#16A34A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M180 120 C190 90 175 60 155 45" stroke="#16A34A" stroke-width="3" stroke-linecap="round" fill="none"/>
      <circle cx="68" cy="85" r="4" fill="#22C55E"/>
      <circle cx="78" cy="65" r="4" fill="#22C55E"/>
      <circle cx="172" cy="85" r="4" fill="#22C55E"/>
      <circle cx="162" cy="65" r="4" fill="#22C55E"/>
    </svg>
  `
};

function getVisual(key) {
  return VISUAL_ASSETS[key] || VISUAL_ASSETS.module_cover;
}


// --- FILE: js/questions.js ---
/**
 * PROJECT ETERA - SPORTS MODULE
 * Comprehensive Question Banks & Shuffle Mechanics
 * Follows Storyboard Section 8 & Section 10 Technical Model
 */

// Utility: Fisher-Yates shuffle that returns a new array copy
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Utility: Draw N unique items without replacement
function drawSample(bank, count) {
  const shuffled = shuffleArray(bank);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}

// VOCABULARY GROUP 1 QUESTION BANK (Words 1 - 6)
const VOCAB_GROUP_1_BANK = [
  {
    id: "q_v1_001",
    section: "vocab1",
    type: "picture_to_word",
    prompt: "Look at the visual. What is the Arabic word for this sport?",
    visualKey: "football",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: false },
      { id: "opt_c", label: "التِّنِسُ", translit: "at-tinis", isCorrect: false },
      { id: "opt_d", label: "الْجَرْيُ", translit: "al-jary", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. كُرَةُ الْقَدَمِ means football / soccer.",
    feedbackIncorrect: "Not quite. Remember, كُرَةُ الْقَدَمِ literally means 'ball of the foot' (football).",
    explanation: "كُرَةُ الْقَدَمِ (kurat al-qadam) translates to football or soccer."
  },
  {
    id: "q_v1_002",
    section: "vocab1",
    type: "meaning_to_word",
    prompt: "Choose the Arabic word for 'basketball':",
    visualKey: "basketball",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ الطَّائِرَةِ", translit: "kurat aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_c", label: "السِّبَاحَةُ", translit: "as-sibāḥah", isCorrect: false },
      { id: "opt_d", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. كُرَةُ السَّلَّةِ means basketball.",
    feedbackIncorrect: "Not quite. سَلَّة (sallah) means basket, so كُرَةُ السَّلَّةِ is basketball.",
    explanation: "كُرَةُ السَّلَّةِ (kurat as-sallah) means basketball."
  },
  {
    id: "q_v1_003",
    section: "vocab1",
    type: "listening",
    prompt: "Listen to the Arabic audio. Choose the matching English meaning:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_05_ar.mp3",
    arabicSpeech: "السِّبَاحَةُ",
    options: [
      { id: "opt_a", label: "swimming", isCorrect: true },
      { id: "opt_b", label: "running", isCorrect: false },
      { id: "opt_c", label: "volleyball", isCorrect: false },
      { id: "opt_d", label: "tennis", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. You heard السِّبَاحَةُ (as-sibāḥah), which means swimming.",
    feedbackIncorrect: "Not quite. السِّبَاحَةُ (as-sibāḥah) means swimming.",
    explanation: "السِّبَاحَةُ (as-sibāḥah) means swimming."
  },
  {
    id: "q_v1_004",
    section: "vocab1",
    type: "word_to_meaning",
    prompt: "What is the meaning of: الْجَرْيُ (al-jary)?",
    visualKey: "running",
    audioStimulus: "audio/etera_sports_vocab_06_ar.mp3",
    arabicSpeech: "الْجَرْيُ",
    options: [
      { id: "opt_a", label: "running", isCorrect: true },
      { id: "opt_b", label: "swimming", isCorrect: false },
      { id: "opt_c", label: "cycling", isCorrect: false },
      { id: "opt_d", label: "volleyball", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. الْجَرْيُ means running.",
    feedbackIncorrect: "Not quite. الْجَرْيُ (al-jary) refers to running.",
    explanation: "الْجَرْيُ (al-jary) means running."
  },
  {
    id: "q_v1_005",
    section: "vocab1",
    type: "picture_to_word",
    prompt: "Look at the volleyball over the net. Select the correct Arabic term:",
    visualKey: "volleyball",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "كُرَةُ الطَّائِرَةِ", translit: "kurat aṭ-ṭā'irah", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: false },
      { id: "opt_c", label: "التِّنِسُ", translit: "at-tinis", isCorrect: false },
      { id: "opt_d", label: "السِّبَاحَةُ", translit: "as-sibāḥah", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. كُرَةُ الطَّائِرَةِ means volleyball (literally 'flying ball').",
    feedbackIncorrect: "Not quite. كُرَةُ الطَّائِرَةِ is volleyball.",
    explanation: "كُرَةُ الطَّائِرَةِ (kurat aṭ-ṭā'irah) means volleyball."
  },
  {
    id: "q_v1_006",
    section: "vocab1",
    type: "listening",
    prompt: "Listen to the clip and identify the sport:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_04_ar.mp3",
    arabicSpeech: "التِّنِسُ",
    options: [
      { id: "opt_a", label: "التِّنِسُ (tennis)", isCorrect: true },
      { id: "opt_b", label: "الْجَرْيُ (running)", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ السَّلَّةِ (basketball)", isCorrect: false },
      { id: "opt_d", label: "السِّبَاحَةُ (swimming)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. You heard التِّنِسُ (at-tinis), which means tennis.",
    feedbackIncorrect: "Not quite. The speaker articulated التِّنِسُ (at-tinis = tennis).",
    explanation: "التِّنِسُ (at-tinis) is a loanword meaning tennis."
  },
  {
    id: "q_v1_007",
    section: "vocab1",
    type: "meaning_to_word",
    prompt: "Which Arabic word matches 'swimming'?",
    visualKey: "swimming",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "السِّبَاحَةُ", translit: "as-sibāḥah", isCorrect: true },
      { id: "opt_b", label: "الْجَرْيُ", translit: "al-jary", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: false },
      { id: "opt_d", label: "التِّنِسُ", translit: "at-tinis", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. السِّبَاحَةُ is swimming.",
    feedbackIncorrect: "Not quite. 'Swimming' in Arabic is السِّبَاحَةُ (as-sibāḥah).",
    explanation: "السِّبَاحَةُ (as-sibāḥah) means swimming."
  },
  {
    id: "q_v1_008",
    section: "vocab1",
    type: "word_to_meaning",
    prompt: "What does 'كُرَةُ الطَّائِرَةِ' mean?",
    visualKey: "volleyball",
    audioStimulus: "audio/etera_sports_vocab_03_ar.mp3",
    arabicSpeech: "كُرَةُ الطَّائِرَةِ",
    options: [
      { id: "opt_a", label: "volleyball", isCorrect: true },
      { id: "opt_b", label: "football", isCorrect: false },
      { id: "opt_c", label: "basketball", isCorrect: false },
      { id: "opt_d", label: "tennis", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work.",
    feedbackIncorrect: "Not quite. كُرَةُ الطَّائِرَةِ means volleyball.",
    explanation: "كُرَةُ الطَّائِرَةِ = volleyball."
  },
  {
    id: "q_v1_009",
    section: "vocab1",
    type: "picture_to_word",
    prompt: "Identify the sport shown by the racket and yellow ball:",
    visualKey: "tennis",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "التِّنِسُ", translit: "at-tinis", isCorrect: true },
      { id: "opt_b", label: "الْجَرْيُ", translit: "al-jary", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: false },
      { id: "opt_d", label: "السِّبَاحَةُ", translit: "as-sibāḥah", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. التِّنِسُ is tennis.",
    feedbackIncorrect: "Not quite. This is tennis: التِّنِسُ.",
    explanation: "التِّنِسُ = tennis."
  },
  {
    id: "q_v1_010",
    section: "vocab1",
    type: "listening",
    prompt: "Listen to the word and select the Arabic writing:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_02_ar.mp3",
    arabicSpeech: "كُرَةُ السَّلَّةِ",
    options: [
      { id: "opt_a", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ الطَّائِرَةِ", translit: "kurat aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_d", label: "الْجَرْيُ", translit: "al-jary", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. You heard كُرَةُ السَّلَّةِ.",
    feedbackIncorrect: "Not quite. The speaker said كُرَةُ السَّلَّةِ (basketball).",
    explanation: "كُرَةُ السَّلَّةِ = basketball."
  }
];

// VOCABULARY GROUP 2 QUESTION BANK (Words 7 - 12)
const VOCAB_GROUP_2_BANK = [
  {
    id: "q_v2_001",
    section: "vocab2",
    type: "picture_to_word",
    prompt: "Look at the bicycle in the park. Choose the correct Arabic phrase:",
    visualKey: "cycling",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "رُكُوبُ الدَّرَّاجَةِ", translit: "rukūb ad-darrājah", isCorrect: true },
      { id: "opt_b", label: "الْمَشْيُ", translit: "al-mashy", isCorrect: false },
      { id: "opt_c", label: "تَنِسُ الطَّاوِلَةِ", translit: "tinis aṭ-ṭāwilah", isCorrect: false },
      { id: "opt_d", label: "الْكَرَاتِيهُ", translit: "al-karātīh", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. رُكُوبُ الدَّرَّاجَةِ means cycling / riding a bicycle.",
    feedbackIncorrect: "Not quite. رُكُوبُ (riding) + الدَّرَّاجَةِ (the bicycle) = cycling.",
    explanation: "رُكُوبُ الدَّرَّاجَةِ (rukūb ad-darrājah) means cycling."
  },
  {
    id: "q_v2_002",
    section: "vocab2",
    type: "meaning_to_word",
    prompt: "What is the Arabic word for 'table tennis'?",
    visualKey: "table_tennis",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "تَنِسُ الطَّاوِلَةِ", translit: "tinis aṭ-ṭāwilah", isCorrect: true },
      { id: "opt_b", label: "الرِّيَشَةُ الطَّائِرَةُ", translit: "ar-rīshah aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_c", label: "التِّنِسُ", translit: "at-tinis", isCorrect: false },
      { id: "opt_d", label: "الْيُوغَا", translit: "al-yūghā", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. طَاوِلَة means table, so تَنِسُ الطَّاوِلَةِ is table tennis.",
    feedbackIncorrect: "Not quite. 'Table tennis' is تَنِسُ الطَّاوِلَةِ (tinis aṭ-ṭāwilah).",
    explanation: "تَنِسُ الطَّاوِلَةِ (tinis aṭ-ṭāwilah) = table tennis."
  },
  {
    id: "q_v2_003",
    section: "vocab2",
    type: "listening",
    prompt: "Listen to the word. What sport does it describe?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_09_ar.mp3",
    arabicSpeech: "الرِّيَشَةُ الطَّائِرَةُ",
    options: [
      { id: "opt_a", label: "badminton", isCorrect: true },
      { id: "opt_b", label: "table tennis", isCorrect: false },
      { id: "opt_c", label: "karate", isCorrect: false },
      { id: "opt_d", label: "walking", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. الرِّيَشَةُ الطَّائِرَةُ is badminton (referencing the feather/shuttlecock).",
    feedbackIncorrect: "Not quite. الرِّيَشَةُ الطَّائِرَةُ (ar-rīshah aṭ-ṭā'irah) means badminton.",
    explanation: "الرِّيَشَةُ الطَّائِرَةُ = badminton."
  },
  {
    id: "q_v2_004",
    section: "vocab2",
    type: "word_to_meaning",
    prompt: "What does 'الْمَشْيُ' (al-mashy) mean?",
    visualKey: "walking",
    audioStimulus: "audio/etera_sports_vocab_12_ar.mp3",
    arabicSpeech: "الْمَشْيُ",
    options: [
      { id: "opt_a", label: "walking", isCorrect: true },
      { id: "opt_b", label: "running", isCorrect: false },
      { id: "opt_c", label: "yoga", isCorrect: false },
      { id: "opt_d", label: "cycling", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. الْمَشْيُ means walking.",
    feedbackIncorrect: "Not quite. الْمَشْيُ is walking (contrast with الْجَرْيُ = running).",
    explanation: "الْمَشْيُ (al-mashy) = walking."
  },
  {
    id: "q_v2_005",
    section: "vocab2",
    type: "picture_to_word",
    prompt: "Look at the training belt and modest uniform. What sport is this?",
    visualKey: "karate",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "الْكَرَاتِيهُ", translit: "al-karātīh", isCorrect: true },
      { id: "opt_b", label: "الْيُوغَا", translit: "al-yūghā", isCorrect: false },
      { id: "opt_c", label: "رُكُوبُ الدَّرَّاجَةِ", translit: "rukūb ad-darrājah", isCorrect: false },
      { id: "opt_d", label: "الْمَشْيُ", translit: "al-mashy", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. الْكَرَاتِيهُ means karate.",
    feedbackIncorrect: "Not quite. It is karate: الْكَرَاتِيهُ.",
    explanation: "الْكَرَاتِيهُ (al-karātīh) = karate."
  },
  {
    id: "q_v2_006",
    section: "vocab2",
    type: "meaning_to_word",
    prompt: "Choose the Arabic term for 'yoga':",
    visualKey: "yoga",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "الْيُوغَا", translit: "al-yūghā", isCorrect: true },
      { id: "opt_b", label: "الْمَشْيُ", translit: "al-mashy", isCorrect: false },
      { id: "opt_c", label: "الْكَرَاتِيهُ", translit: "al-karātīh", isCorrect: false },
      { id: "opt_d", label: "تَنِسُ الطَّاوِلَةِ", translit: "tinis aṭ-ṭāwilah", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. الْيُوغَا is yoga.",
    feedbackIncorrect: "Not quite. Yoga is الْيُوغَا (al-yūghā).",
    explanation: "الْيُوغَا (al-yūghā) = yoga."
  },
  {
    id: "q_v2_007",
    section: "vocab2",
    type: "listening",
    prompt: "Listen to the clip and identify the phrase:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_07_ar.mp3",
    arabicSpeech: "رُكُوبُ الدَّرَّاجَةِ",
    options: [
      { id: "opt_a", label: "رُكُوبُ الدَّرَّاجَةِ (cycling)", isCorrect: true },
      { id: "opt_b", label: "الْمَشْيُ (walking)", isCorrect: false },
      { id: "opt_c", label: "تَنِسُ الطَّاوِلَةِ (table tennis)", isCorrect: false },
      { id: "opt_d", label: "الرِّيَشَةُ الطَّائِرَةُ (badminton)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. You heard رُكُوبُ الدَّرَّاجَةِ.",
    feedbackIncorrect: "Not quite. The speaker said رُكُوبُ الدَّرَّاجَةِ (cycling).",
    explanation: "رُكُوبُ الدَّرَّاجَةِ = cycling."
  },
  {
    id: "q_v2_008",
    section: "vocab2",
    type: "word_to_meaning",
    prompt: "What is 'تَنِسُ الطَّاوِلَةِ'?",
    visualKey: "table_tennis",
    audioStimulus: "audio/etera_sports_vocab_08_ar.mp3",
    arabicSpeech: "تَنِسُ الطَّاوِلَةِ",
    options: [
      { id: "opt_a", label: "table tennis", isCorrect: true },
      { id: "opt_b", label: "tennis", isCorrect: false },
      { id: "opt_c", label: "badminton", isCorrect: false },
      { id: "opt_d", label: "volleyball", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work.",
    feedbackIncorrect: "Not quite. تَنِسُ الطَّاوِلَةِ means table tennis.",
    explanation: "تَنِسُ الطَّاوِلَةِ = table tennis."
  },
  {
    id: "q_v2_009",
    section: "vocab2",
    type: "picture_to_word",
    prompt: "Choose the word representing this walking path:",
    visualKey: "walking",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "الْمَشْيُ", translit: "al-mashy", isCorrect: true },
      { id: "opt_b", label: "الْجَرْيُ", translit: "al-jary", isCorrect: false },
      { id: "opt_c", label: "الْيُوغَا", translit: "al-yūghā", isCorrect: false },
      { id: "opt_d", label: "الْكَرَاتِيهُ", translit: "al-karātīh", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. الْمَشْيُ is walking.",
    feedbackIncorrect: "Not quite. الْمَشْيُ is walking.",
    explanation: "الْمَشْيُ (al-mashy) = walking."
  },
  {
    id: "q_v2_010",
    section: "vocab2",
    type: "listening",
    prompt: "Listen to the clip and choose the correct English term:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_10_ar.mp3",
    arabicSpeech: "الْكَرَاتِيهُ",
    options: [
      { id: "opt_a", label: "karate", isCorrect: true },
      { id: "opt_b", label: "yoga", isCorrect: false },
      { id: "opt_c", label: "cycling", isCorrect: false },
      { id: "opt_d", label: "running", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. The clip said الْكَرَاتِيهُ.",
    feedbackIncorrect: "Not quite. You heard الْكَرَاتِيهُ (karate).",
    explanation: "الْكَرَاتِيهُ = karate."
  }
];

// SENTENCES PRACTICE QUESTION BANK
const SENTENCES_BANK = [
  {
    id: "q_s_001",
    section: "sentences",
    type: "sentence_meaning",
    prompt: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ. What is she doing?",
    visualKey: "sentence_female_swimming",
    audioStimulus: "audio/etera_sports_sentence_03_ar.mp3",
    arabicSpeech: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ.",
    options: [
      { id: "opt_a", label: "She is swimming in the pool.", isCorrect: true },
      { id: "opt_b", label: "He is running in the park.", isCorrect: false },
      { id: "opt_c", label: "I like playing basketball.", isCorrect: false },
      { id: "opt_d", label: "She is riding a bicycle.", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. هِيَ تَسْبَحُ means 'she swims'.",
    feedbackIncorrect: "Not quite. هِيَ (she) + تَسْبَحُ (swims) + فِي الْمَسْبَحِ (in the pool).",
    explanation: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ. = She swims in the pool."
  },
  {
    id: "q_s_002",
    section: "sentences",
    type: "subject_identification",
    prompt: "هُوَ يَجْرِي فِي الْحَدِيقَةِ. Who is running in the park?",
    visualKey: "sentence_male_running",
    audioStimulus: "audio/etera_sports_sentence_04_ar.mp3",
    arabicSpeech: "هُوَ يَجْرِي فِي الْحَدِيقَةِ.",
    options: [
      { id: "opt_a", label: "He (masculine subject: هُوَ)", isCorrect: true },
      { id: "opt_b", label: "She (feminine subject: هِيَ)", isCorrect: false },
      { id: "opt_c", label: "I (first person: أَنَا)", isCorrect: false },
      { id: "opt_d", label: "They (plural)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. هُوَ is the masculine 3rd person pronoun ('he').",
    feedbackIncorrect: "Not quite. هُوَ (huwa) is 'he' and the verb begins with يَـ (yajrī).",
    explanation: "هُوَ (he) goes with the masculine verb form يَجْرِي."
  },
  {
    id: "q_s_003",
    section: "sentences",
    type: "sentence_meaning",
    prompt: "What does: رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ mean?",
    visualKey: "sentence_fav_football",
    audioStimulus: "audio/etera_sports_sentence_01_ar.mp3",
    arabicSpeech: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.",
    options: [
      { id: "opt_a", label: "My favourite sport is football.", isCorrect: true },
      { id: "opt_b", label: "What is your favourite sport?", isCorrect: false },
      { id: "opt_c", label: "I do not like football.", isCorrect: false },
      { id: "opt_d", label: "He plays football in the park.", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. رِيَاضَتِي = my sport, الْمُفَضَّلَةُ = favourite.",
    feedbackIncorrect: "Not quite. It translates to 'My favourite sport is football.'",
    explanation: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ."
  },
  {
    id: "q_s_004",
    section: "sentences",
    type: "gender_agreement",
    prompt: "If you are asking a female friend her favourite sport, what do you say?",
    visualKey: "sentence_ask_preference",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "مَا رِيَاضَتُكِ الْمُفَضَّلَةُ؟", translit: "Mā riyāḍatuki al-mufaḍḍalah?", isCorrect: true },
      { id: "opt_b", label: "مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟", translit: "Mā riyāḍatuka al-mufaḍḍalah?", isCorrect: false },
      { id: "opt_c", label: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ", translit: "Hiya tasbaḥu fī al-masbaḥi", isCorrect: false },
      { id: "opt_d", label: "هُوَ يَجْرِي فِي الْحَدِيقَةِ", translit: "Huwa yajrī fī al-ḥadīqati", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. The suffix ـكِ (-ki) is used when speaking to a female.",
    feedbackIncorrect: "Not quite. Remember: ـكَ (-ka) is for a male listener, and ـكِ (-ki) is for a female listener.",
    explanation: "The suffix -ki (ـكِ) marks feminine addressee in Arabic."
  },
  {
    id: "q_s_005",
    section: "sentences",
    type: "sentence_meaning",
    prompt: "What does 'لَا أُحِبُّ رُكُوبَ الدَّرَّاجَةِ' express?",
    visualKey: "sentence_dislike_cycling",
    audioStimulus: "audio/etera_sports_sentence_06_ar.mp3",
    arabicSpeech: "لَا أُحِبُّ رُكُوبَ الدَّرَّاجَةِ.",
    options: [
      { id: "opt_a", label: "I do not like cycling.", isCorrect: true },
      { id: "opt_b", label: "I like riding a bicycle.", isCorrect: false },
      { id: "opt_c", label: "She is cycling in the park.", isCorrect: false },
      { id: "opt_d", label: "Do you like cycling?", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. لَا أُحِبُّ expresses dislike: 'I do not like...'",
    feedbackIncorrect: "Not quite. لَا indicates negation ('not'), so it means 'I do not like cycling.'",
    explanation: "لَا أُحِبُّ = I do not like."
  },
  {
    id: "q_s_006",
    section: "sentences",
    type: "sentence_meaning",
    prompt: "Translate: أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ.",
    visualKey: "sentence_like_basketball",
    audioStimulus: "audio/etera_sports_sentence_05_ar.mp3",
    arabicSpeech: "أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ.",
    options: [
      { id: "opt_a", label: "I like playing basketball.", isCorrect: true },
      { id: "opt_b", label: "My favourite sport is basketball.", isCorrect: false },
      { id: "opt_c", label: "He plays basketball on Saturday.", isCorrect: false },
      { id: "opt_d", label: "I do not play basketball.", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. أُحِبُّ = I like, لَعِبَ = playing, كُرَةِ السَّلَّةِ = basketball.",
    feedbackIncorrect: "Not quite. It means 'I like playing basketball.'",
    explanation: "أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ = I like playing basketball."
  },
  {
    id: "q_s_007",
    section: "sentences",
    type: "verb_prefix",
    prompt: "Notice the difference: (هُوَ يَجْرِي) vs (هِيَ تَسْبَحُ). Which letter prefixes the feminine verb?",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "The letter Taa (تَـ)", isCorrect: true },
      { id: "opt_b", label: "The letter Yaa (يَـ)", isCorrect: false },
      { id: "opt_c", label: "The letter Noon (نَـ)", isCorrect: false },
      { id: "opt_d", label: "The letter Meem (مَـ)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. Feminine singular present verbs take the prefix (تَـ) like تَسْبَحُ.",
    feedbackIncorrect: "Not quite. Masculine uses (يَـ) as in يَجْرِي, while feminine uses (تَـ) as in تَسْبَحُ.",
    explanation: "The prefix تَـ indicates feminine singular (she/you-fem)."
  },
  {
    id: "q_s_008",
    section: "sentences",
    type: "listening",
    prompt: "Listen to the sentence. Which activity is mentioned?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_sentence_04_ar.mp3",
    arabicSpeech: "هُوَ يَجْرِي فِي الْحَدِيقَةِ.",
    options: [
      { id: "opt_a", label: "Running in the park", isCorrect: true },
      { id: "opt_b", label: "Swimming in the pool", isCorrect: false },
      { id: "opt_c", label: "Playing basketball", isCorrect: false },
      { id: "opt_d", label: "Riding a bicycle", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. The sentence is هُوَ يَجْرِي فِي الْحَدِيقَةِ (He runs in the park).",
    feedbackIncorrect: "Not quite. You heard يَجْرِي (running) فِي الْحَدِيقَةِ (in the park).",
    explanation: "الْحَدِيقَةِ means the park or garden."
  },
  {
    id: "q_s_009",
    section: "sentences",
    type: "sentence_grammar",
    prompt: "Does the phrase 'أُحِبُّ' (I like) change form if spoken by a female speaker in Arabic?",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "No, first-person 'أُحِبُّ' is the same for both males and females.", isCorrect: true },
      { id: "opt_b", label: "Yes, it changes to 'تُحِبُّ' for females.", isCorrect: false },
      { id: "opt_c", label: "Yes, it changes to 'يُحِبُّ'.", isCorrect: false },
      { id: "opt_d", label: "Yes, an extra suffix is added.", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. In Arabic, first-person ('I') forms like أُحِبُّ do not change by gender.",
    feedbackIncorrect: "Not quite. First-person forms like أُحِبُّ (I like) are identical for male and female speakers.",
    explanation: "Do not manufacture a gender difference where Arabic does not have one!"
  },
  {
    id: "q_s_010",
    section: "sentences",
    type: "listening",
    prompt: "Listen to the clip and identify what is being asked:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_sentence_02_ar.mp3",
    arabicSpeech: "مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟",
    options: [
      { id: "opt_a", label: "What is your favourite sport? (to a male)", isCorrect: true },
      { id: "opt_b", label: "Do you play every week?", isCorrect: false },
      { id: "opt_c", label: "Where do you run?", isCorrect: false },
      { id: "opt_d", label: "What is your favourite sport? (to a female)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. مَا رِيَاضَتُكَ (with -ka) addresses a male.",
    feedbackIncorrect: "Not quite. The speaker said مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟ with the masculine suffix -ka.",
    explanation: "-ka indicates a masculine addressee."
  }
];

// CONVERSATION PRACTICE QUESTION BANK
const CONVERSATION_BANK = [
  {
    id: "q_c_001",
    section: "conversation",
    type: "dialogue_comprehension",
    prompt: "In the female dialogue, what is Speaker B's favourite sport?",
    visualKey: "female_dialogue",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Swimming (السِّبَاحَةُ)", isCorrect: true },
      { id: "opt_b", label: "Football (كُرَةُ الْقَدَمِ)", isCorrect: false },
      { id: "opt_c", label: "Basketball (كُرَةُ السَّلَّةِ)", isCorrect: false },
      { id: "opt_d", label: "Tennis (التِّنِسُ)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. Speaker B says: رِيَاضَتِي الْمُفَضَّلَةُ السِّبَاحَةُ.",
    feedbackIncorrect: "Not quite. Speaker B specifically says her favourite sport is السِّبَاحَةُ (swimming).",
    explanation: "Speaker B answers: رِيَاضَتِي الْمُفَضَّلَةُ السِّبَاحَةُ."
  },
  {
    id: "q_c_002",
    section: "conversation",
    type: "dialogue_comprehension",
    prompt: "In the male dialogue, on which day does Speaker B play?",
    visualKey: "male_dialogue",
    audioStimulus: "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3",
    arabicSpeech: "أَلْعَبُ يَوْمَ الْجُمُعَةِ.",
    options: [
      { id: "opt_a", label: "On Friday (يَوْمَ الْجُمُعَةِ)", isCorrect: true },
      { id: "opt_b", label: "On Saturday (يَوْمَ السَّبْتِ)", isCorrect: false },
      { id: "opt_c", label: "Every Sunday", isCorrect: false },
      { id: "opt_d", label: "On Monday", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. Speaker B plays on Friday: نَعَمْ، أَلْعَبُ يَوْمَ الْجُمُعَةِ.",
    feedbackIncorrect: "Not quite. In the male dialogue, Speaker B says: أَلْعَبُ يَوْمَ الْجُمُعَةِ (Friday).",
    explanation: "يَوْمَ الْجُمُعَةِ means Friday."
  },
  {
    id: "q_c_003",
    section: "conversation",
    type: "dialogue_listening",
    prompt: "Listen to this dialogue line: هَلْ تَلْعَبُ كُلَّ أُسْبُوعٍ؟ Who is this addressed to?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_dialog_m_03_ar.mp3",
    arabicSpeech: "هَلْ تَلْعَبُ كُلَّ أُسْبُوعٍ؟",
    options: [
      { id: "opt_a", label: "A male friend ('Do you play every week?')", isCorrect: true },
      { id: "opt_b", label: "A female friend ('Do you swim every week?')", isCorrect: false },
      { id: "opt_c", label: "A group of people", isCorrect: false },
      { id: "opt_d", label: "The speaker themselves", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. تَلْعَبُ is the masculine singular form of 'you play'.",
    feedbackIncorrect: "Not quite. تَلْعَبُ addresses a male. For a female, it would be تَلْعَبِينَ.",
    explanation: "تَلْعَبُ is addressed to a masculine 'you'."
  },
  {
    id: "q_c_004",
    section: "conversation",
    type: "dialogue_comprehension",
    prompt: "In the female dialogue, on which day does Speaker B swim?",
    visualKey: "female_dialogue",
    audioStimulus: "audio/etera_sports_dialog_f_04_ar.mp3",
    arabicSpeech: "نَعَمْ، أَسْبَحُ يَوْمَ السَّبْتِ.",
    options: [
      { id: "opt_a", label: "Saturday (يَوْمَ السَّبْتِ)", isCorrect: true },
      { id: "opt_b", label: "Friday (يَوْمَ الْجُمُعَةِ)", isCorrect: false },
      { id: "opt_c", label: "Sunday (يَوْمَ الأَحَدِ)", isCorrect: false },
      { id: "opt_d", label: "Every day", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. Speaker B states: نَعَمْ، أَسْبَحُ يَوْمَ السَّبْتِ.",
    feedbackIncorrect: "Not quite. She says: أَسْبَحُ يَوْمَ السَّبْتِ (I swim on Saturday).",
    explanation: "يَوْمَ السَّبْتِ means Saturday."
  },
  {
    id: "q_c_005",
    section: "conversation",
    type: "expression_meaning",
    prompt: "At the end of both conversations, how does Speaker B react with 'رَائِعٌ!'?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_dialog_m_06_ar.mp3",
    arabicSpeech: "رَائِعٌ!",
    options: [
      { id: "opt_a", label: "Great! / Wonderful!", isCorrect: true },
      { id: "opt_b", label: "Goodbye!", isCorrect: false },
      { id: "opt_c", label: "See you tomorrow!", isCorrect: false },
      { id: "opt_d", label: "No thanks!", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. رَائِعٌ (Rā'iʿ) is a positive exclamation meaning 'Great!' or 'Awesome!'",
    feedbackIncorrect: "Not quite. رَائِعٌ! (Rā'iʿ!) means 'Great!' or 'Wonderful!'.",
    explanation: "رَائِعٌ! = Great! / Wonderful!"
  },
  {
    id: "q_c_006",
    section: "conversation",
    type: "dialogue_comprehension",
    prompt: "In the male conversation, what does Speaker A like?",
    visualKey: "male_dialogue",
    audioStimulus: "audio/etera_sports_dialog_m_05_ar.mp3",
    arabicSpeech: "أَنَا أُحِبُّ السِّبَاحَةَ.",
    options: [
      { id: "opt_a", label: "Swimming (السِّبَاحَةَ)", isCorrect: true },
      { id: "opt_b", label: "Basketball (كُرَةَ السَّلَّةِ)", isCorrect: false },
      { id: "opt_c", label: "Running (الْجَرْيَ)", isCorrect: false },
      { id: "opt_d", label: "Cycling (رُكُوبَ الدَّرَّاجَةِ)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. Speaker A says: أَنَا أُحِبُّ السِّبَاحَةَ.",
    feedbackIncorrect: "Not quite. Speaker A says: أَنَا أُحِبُّ السِّبَاحَةَ (I like swimming).",
    explanation: "Speaker A mentions swimming in the male dialogue."
  },
  {
    id: "q_c_007",
    section: "conversation",
    type: "gender_verb",
    prompt: "How does Speaker A ask her female friend if she swims every week?",
    visualKey: "female_dialogue",
    audioStimulus: "audio/etera_sports_dialog_f_03_ar.mp3",
    arabicSpeech: "هَلْ تَسْبَحِينَ كُلَّ أُسْبُوعٍ؟",
    options: [
      { id: "opt_a", label: "هَلْ تَسْبَحِينَ كُلَّ أُسْبُوعٍ؟", isCorrect: true },
      { id: "opt_b", label: "هَلْ تَسْبَحُ كُلَّ أُسْبُوعٍ؟", isCorrect: false },
      { id: "opt_c", label: "هَلْ يَسْبَحُ كُلَّ أُسْبُوعٍ؟", isCorrect: false },
      { id: "opt_d", label: "هَلْ أَسْبَحُ كُلَّ أُسْبُوعٍ؟", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. تَسْبَحِينَ has the suffix (ـِينَ) for 2nd person feminine singular.",
    feedbackIncorrect: "Not quite. When speaking to a female, the form is تَسْبَحِينَ (tasbaḥīna).",
    explanation: "The suffix -īna indicates feminine singular addressee."
  },
  {
    id: "q_c_008",
    section: "conversation",
    type: "dialogue_comprehension",
    prompt: "What sport does Speaker A say she likes in the female dialogue?",
    visualKey: "female_dialogue",
    audioStimulus: "audio/etera_sports_dialog_f_05_ar.mp3",
    arabicSpeech: "أَنَا أُحِبُّ كُرَةَ السَّلَّةِ.",
    options: [
      { id: "opt_a", label: "Basketball (كُرَةَ السَّلَّةِ)", isCorrect: true },
      { id: "opt_b", label: "Football (كُرَةَ الْقَدَمِ)", isCorrect: false },
      { id: "opt_c", label: "Table tennis (تَنِسَ الطَّاوِلَةِ)", isCorrect: false },
      { id: "opt_d", label: "Badminton (الرِّيَشَةَ الطَّائِرَةَ)", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. Speaker A says: أَنَا أُحِبُّ كُرَةَ السَّلَّةِ.",
    feedbackIncorrect: "Not quite. Speaker A says: أَنَا أُحِبُّ كُرَةَ السَّلَّةِ (I like basketball).",
    explanation: "Speaker A states: أَنَا أُحِبُّ كُرَةَ السَّلَّةِ."
  },
  {
    id: "q_c_009",
    section: "conversation",
    type: "dialogue_response",
    prompt: "Someone asks you: 'مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟'. What is a suitable reply?",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.", isCorrect: true },
      { id: "opt_b", label: "نَعَمْ، كُلَّ أُسْبُوعٍ.", isCorrect: false },
      { id: "opt_c", label: "مَا رِيَاضَتُكَ؟", isCorrect: false },
      { id: "opt_d", label: "هُوَ يَجْرِي.", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. A natural answer starts with 'رِيَاضَتِي الْمُفَضَّلَةُ...'",
    feedbackIncorrect: "Not quite. When asked about your preference, answer with رِيَاضَتِي الْمُفَضَّلَةُ (My favourite sport is...).",
    explanation: "رِيَاضَتِي الْمُفَضَّلَةُ... states your preference."
  },
  {
    id: "q_c_010",
    section: "conversation",
    type: "listening",
    prompt: "Listen to the speaker's response: 'نَعَمْ، أَلْعَبُ يَوْمَ الْجُمُعَةِ.' What does 'أَلْعَبُ' mean?",
    visualKey: null,
    audioStimulus: "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3",
    arabicSpeech: "أَلْعَبُ يَوْمَ الْجُمُعَةِ.",
    options: [
      { id: "opt_a", label: "I play", isCorrect: true },
      { id: "opt_b", label: "You play", isCorrect: false },
      { id: "opt_c", label: "He plays", isCorrect: false },
      { id: "opt_d", label: "She plays", isCorrect: false }
    ],
    feedbackCorrect: "Correct! Nice work. أَلْعَبُ is the first-person singular form: 'I play'.",
    feedbackIncorrect: "Not quite. With the Hamza prefix (أَـ), أَلْعَبُ means 'I play'.",
    explanation: "أَلْعَبُ (al'abu) = I play."
  }
];

// FINAL QUIZ QUESTION BANK (Target 25-30 items; Exactly 10 drawn per attempt)
const FINAL_QUIZ_BANK = [
  {
    id: "fq_001",
    objective: "vocab_recognition",
    prompt: "What is the Arabic word for 'football / soccer'?",
    visualKey: "football",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ الطَّائِرَةِ", translit: "kurat aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_d", label: "تَنِسُ الطَّاوِلَةِ", translit: "tinis aṭ-ṭāwilah", isCorrect: false }
    ],
    explanation: "كُرَةُ الْقَدَمِ literally translates to 'ball of the foot' (football)."
  },
  {
    id: "fq_002",
    objective: "vocab_recognition",
    prompt: "Choose the Arabic term for 'swimming':",
    visualKey: "swimming",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "السِّبَاحَةُ", translit: "as-sibāḥah", isCorrect: true },
      { id: "opt_b", label: "الْجَرْيُ", translit: "al-jary", isCorrect: false },
      { id: "opt_c", label: "الْمَشْيُ", translit: "al-mashy", isCorrect: false },
      { id: "opt_d", label: "الْيُوغَا", translit: "al-yūghā", isCorrect: false }
    ],
    explanation: "السِّبَاحَةُ (as-sibāḥah) means swimming."
  },
  {
    id: "fq_003",
    objective: "vocab_recognition",
    prompt: "What sport is 'رُكُوبُ الدَّرَّاجَةِ'?",
    visualKey: "cycling",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Cycling", isCorrect: true },
      { id: "opt_b", label: "Running", isCorrect: false },
      { id: "opt_c", label: "Table tennis", isCorrect: false },
      { id: "opt_d", label: "Karate", isCorrect: false }
    ],
    explanation: "رُكُوبُ الدَّرَّاجَةِ = cycling / riding a bicycle."
  },
  {
    id: "fq_004",
    objective: "vocab_recognition",
    prompt: "What does 'الرِّيَشَةُ الطَّائِرَةُ' refer to?",
    visualKey: "badminton",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Badminton", isCorrect: true },
      { id: "opt_b", label: "Volleyball", isCorrect: false },
      { id: "opt_c", label: "Tennis", isCorrect: false },
      { id: "opt_d", label: "Basketball", isCorrect: false }
    ],
    explanation: "الرِّيَشَةُ الطَّائِرَةُ means badminton (the flying feather)."
  },
  {
    id: "fq_005",
    objective: "vocab_recognition",
    prompt: "What is 'الْمَشْيُ'?",
    visualKey: "walking",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Walking", isCorrect: true },
      { id: "opt_b", label: "Running", isCorrect: false },
      { id: "opt_c", label: "Yoga", isCorrect: false },
      { id: "opt_d", label: "Swimming", isCorrect: false }
    ],
    explanation: "الْمَشْيُ (al-mashy) means walking."
  },
  {
    id: "fq_006",
    objective: "vocab_recognition",
    prompt: "Select the Arabic word for 'basketball':",
    visualKey: "basketball",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ الْقَدَمِ", translit: "kurat al-qadam", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ الطَّائِرَةِ", translit: "kurat aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_d", label: "التِّنِسُ", translit: "at-tinis", isCorrect: false }
    ],
    explanation: "كُرَةُ السَّلَّةِ = basketball."
  },
  {
    id: "fq_007",
    objective: "vocab_recognition",
    prompt: "What does 'الْجَرْيُ' mean?",
    visualKey: "running",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Running", isCorrect: true },
      { id: "opt_b", label: "Walking", isCorrect: false },
      { id: "opt_c", label: "Cycling", isCorrect: false },
      { id: "opt_d", label: "Karate", isCorrect: false }
    ],
    explanation: "الْجَرْيُ (al-jary) means running."
  },
  {
    id: "fq_008",
    objective: "vocab_recognition",
    prompt: "Choose the Arabic word for 'table tennis':",
    visualKey: "table_tennis",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "تَنِسُ الطَّاوِلَةِ", translit: "tinis aṭ-ṭāwilah", isCorrect: true },
      { id: "opt_b", label: "التِّنِسُ", translit: "at-tinis", isCorrect: false },
      { id: "opt_c", label: "الرِّيَشَةُ الطَّائِرَةُ", translit: "ar-rīshah aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_d", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: false }
    ],
    explanation: "تَنِسُ الطَّاوِلَةِ = table tennis."
  },
  {
    id: "fq_009",
    objective: "vocab_recognition",
    prompt: "What sport is represented by 'الْكَرَاتِيهُ'?",
    visualKey: "karate",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Karate", isCorrect: true },
      { id: "opt_b", label: "Yoga", isCorrect: false },
      { id: "opt_c", label: "Running", isCorrect: false },
      { id: "opt_d", label: "Walking", isCorrect: false }
    ],
    explanation: "الْكَرَاتِيهُ = karate."
  },
  {
    id: "fq_010",
    objective: "vocab_recognition",
    prompt: "What does 'الْيُوغَا' mean in English?",
    visualKey: "yoga",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "Yoga", isCorrect: true },
      { id: "opt_b", label: "Karate", isCorrect: false },
      { id: "opt_c", label: "Swimming", isCorrect: false },
      { id: "opt_d", label: "Cycling", isCorrect: false }
    ],
    explanation: "الْيُوغَا = yoga."
  },
  {
    id: "fq_011",
    objective: "listening",
    prompt: "Listen to the audio clip. Which sport did you hear?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_03_ar.mp3",
    arabicSpeech: "كُرَةُ الطَّائِرَةِ",
    options: [
      { id: "opt_a", label: "كُرَةُ الطَّائِرَةِ (volleyball)", isCorrect: true },
      { id: "opt_b", label: "كُرَةُ الْقَدَمِ (football)", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ السَّلَّةِ (basketball)", isCorrect: false },
      { id: "opt_d", label: "تَنِسُ الطَّاوِلَةِ (table tennis)", isCorrect: false }
    ],
    explanation: "The clip pronounced كُرَةُ الطَّائِرَةِ (volleyball)."
  },
  {
    id: "fq_012",
    objective: "listening",
    prompt: "Listen to the Arabic word and choose the English meaning:",
    visualKey: null,
    audioStimulus: "audio/etera_sports_vocab_04_ar.mp3",
    arabicSpeech: "التِّنِسُ",
    options: [
      { id: "opt_a", label: "Tennis", isCorrect: true },
      { id: "opt_b", label: "Badminton", isCorrect: false },
      { id: "opt_c", label: "Volleyball", isCorrect: false },
      { id: "opt_d", label: "Football", isCorrect: false }
    ],
    explanation: "التِّنِسُ (at-tinis) is tennis."
  },
  {
    id: "fq_013",
    objective: "sentence_comprehension",
    prompt: "What is the meaning of: رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.?",
    visualKey: "sentence_fav_football",
    audioStimulus: "audio/etera_sports_sentence_01_ar.mp3",
    arabicSpeech: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.",
    options: [
      { id: "opt_a", label: "My favourite sport is football.", isCorrect: true },
      { id: "opt_b", label: "Do you like football?", isCorrect: false },
      { id: "opt_c", label: "His favourite sport is running.", isCorrect: false },
      { id: "opt_d", label: "I play football every Friday.", isCorrect: false }
    ],
    explanation: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ. = My favourite sport is football."
  },
  {
    id: "fq_014",
    objective: "grammar_gender",
    prompt: "Which question is used when asking a MALE what his favourite sport is?",
    visualKey: "sentence_ask_preference",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟", isCorrect: true },
      { id: "opt_b", label: "مَا رِيَاضَتُكِ الْمُفَضَّلَةُ؟", isCorrect: false },
      { id: "opt_c", label: "مَا رِيَاضَتُهُ الْمُفَضَّلَةُ؟", isCorrect: false },
      { id: "opt_d", label: "مَا رِيَاضَتُهَا الْمُفَضَّلَةُ؟", isCorrect: false }
    ],
    explanation: "ـكَ (-ka) indicates a male addressee; ـكِ (-ki) is for a female."
  },
  {
    id: "fq_015",
    objective: "grammar_gender",
    prompt: "Which question is used when asking a FEMALE what her favourite sport is?",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "مَا رِيَاضَتُكِ الْمُفَضَّلَةُ؟", isCorrect: true },
      { id: "opt_b", label: "مَا رِيَاضَتُكَ الْمُفَضَّلَةُ؟", isCorrect: false },
      { id: "opt_c", label: "رِيَاضَتِي الْمُفَضَّلَةُ", isCorrect: false },
      { id: "opt_d", label: "هَلْ تَلْعَبُ كُلَّ أُسْبُوعٍ؟", isCorrect: false }
    ],
    explanation: "The suffix -ki (ـكِ) is the 2nd person feminine singular possessive."
  },
  {
    id: "fq_016",
    objective: "sentence_comprehension",
    prompt: "Translate: هِيَ تَسْبَحُ فِي الْمَسْبَحِ.",
    visualKey: "sentence_female_swimming",
    audioStimulus: "audio/etera_sports_sentence_03_ar.mp3",
    arabicSpeech: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ.",
    options: [
      { id: "opt_a", label: "She swims in the pool.", isCorrect: true },
      { id: "opt_b", label: "He runs in the park.", isCorrect: false },
      { id: "opt_c", label: "I swim every Saturday.", isCorrect: false },
      { id: "opt_d", label: "She likes swimming.", isCorrect: false }
    ],
    explanation: "هِيَ تَسْبَحُ فِي الْمَسْبَحِ. = She swims in the pool."
  },
  {
    id: "fq_017",
    objective: "sentence_comprehension",
    prompt: "Translate: هُوَ يَجْرِي فِي الْحَدِيقَةِ.",
    visualKey: "sentence_male_running",
    audioStimulus: "audio/etera_sports_sentence_04_ar.mp3",
    arabicSpeech: "هُوَ يَجْرِي فِي الْحَدِيقَةِ.",
    options: [
      { id: "opt_a", label: "He runs in the park.", isCorrect: true },
      { id: "opt_b", label: "She runs in the park.", isCorrect: false },
      { id: "opt_c", label: "He swims in the pool.", isCorrect: false },
      { id: "opt_d", label: "I run in the park.", isCorrect: false }
    ],
    explanation: "هُوَ يَجْرِي فِي الْحَدِيقَةِ. = He runs in the park."
  },
  {
    id: "fq_018",
    objective: "sentence_comprehension",
    prompt: "What does 'أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ' mean?",
    visualKey: "sentence_like_basketball",
    audioStimulus: "audio/etera_sports_sentence_05_ar.mp3",
    arabicSpeech: "أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ.",
    options: [
      { id: "opt_a", label: "I like playing basketball.", isCorrect: true },
      { id: "opt_b", label: "I do not like basketball.", isCorrect: false },
      { id: "opt_c", label: "My favourite sport is basketball.", isCorrect: false },
      { id: "opt_d", label: "She plays basketball.", isCorrect: false }
    ],
    explanation: "أُحِبُّ لَعِبَ كُرَةِ السَّلَّةِ = I like playing basketball."
  },
  {
    id: "fq_019",
    objective: "sentence_comprehension",
    prompt: "What does 'لَا أُحِبُّ رُكُوبَ الدَّرَّاجَةِ' mean?",
    visualKey: "sentence_dislike_cycling",
    audioStimulus: "audio/etera_sports_sentence_06_ar.mp3",
    arabicSpeech: "لَا أُحِبُّ رُكُوبَ الدَّرَّاجَةِ.",
    options: [
      { id: "opt_a", label: "I do not like cycling.", isCorrect: true },
      { id: "opt_b", label: "I like cycling.", isCorrect: false },
      { id: "opt_c", label: "I ride a bicycle on Friday.", isCorrect: false },
      { id: "opt_d", label: "Do you like cycling?", isCorrect: false }
    ],
    explanation: "لَا أُحِبُّ means 'I do not like'."
  },
  {
    id: "fq_020",
    objective: "grammar_verb_form",
    prompt: "Complete the sentence with the correct verb: هُوَ _____ فِي الْحَدِيقَةِ.",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "يَجْرِي (yajrī)", isCorrect: true },
      { id: "opt_b", label: "تَجْرِي (tajrī)", isCorrect: false },
      { id: "opt_c", label: "أَجْرِي (ajrī)", isCorrect: false },
      { id: "opt_d", label: "نَجْرِي (najrī)", isCorrect: false }
    ],
    explanation: "Masculine 3rd person singular (he) takes the verb prefix يَـ (yajrī)."
  },
  {
    id: "fq_021",
    objective: "grammar_verb_form",
    prompt: "Complete the sentence with the correct verb: هِيَ _____ فِي الْمَسْبَحِ.",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "تَسْبَحُ (tasbaḥu)", isCorrect: true },
      { id: "opt_b", label: "يَسْبَحُ (yasbaḥu)", isCorrect: false },
      { id: "opt_c", label: "أَسْبَحُ (asbaḥu)", isCorrect: false },
      { id: "opt_d", label: "نَسْبَحُ (nasbaḥu)", isCorrect: false }
    ],
    explanation: "Feminine 3rd person singular (she) takes the verb prefix تَـ (tasbaḥu)."
  },
  {
    id: "fq_022",
    objective: "dialogue_comprehension",
    prompt: "In the male conversation, on what day does the speaker play? (نَعَمْ، أَلْعَبُ يَوْمَ الْجُمُعَةِ)",
    visualKey: null,
    audioStimulus: "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3",
    arabicSpeech: "أَلْعَبُ يَوْمَ الْجُمُعَةِ.",
    options: [
      { id: "opt_a", label: "Friday", isCorrect: true },
      { id: "opt_b", label: "Saturday", isCorrect: false },
      { id: "opt_c", label: "Sunday", isCorrect: false },
      { id: "opt_d", label: "Monday", isCorrect: false }
    ],
    explanation: "يَوْمَ الْجُمُعَةِ translates to Friday."
  },
  {
    id: "fq_023",
    objective: "dialogue_comprehension",
    prompt: "In the female dialogue, on what day does Speaker B swim? (أَسْبَحُ يَوْمَ السَّبْتِ)",
    visualKey: null,
    audioStimulus: "audio/etera_sports_dialog_f_04_ar.mp3",
    arabicSpeech: "نَعَمْ، أَسْبَحُ يَوْمَ السَّبْتِ.",
    options: [
      { id: "opt_a", label: "Saturday", isCorrect: true },
      { id: "opt_b", label: "Friday", isCorrect: false },
      { id: "opt_c", label: "Thursday", isCorrect: false },
      { id: "opt_d", label: "Tuesday", isCorrect: false }
    ],
    explanation: "يَوْمَ السَّبْتِ translates to Saturday."
  },
  {
    id: "fq_024",
    objective: "listening",
    prompt: "Listen to the audio. What is the speaker saying?",
    visualKey: null,
    audioStimulus: "audio/uploaded_1_male_alabu_yawm_aljumuah.mp3",
    arabicSpeech: "أَلْعَبُ يَوْمَ الْجُمُعَةِ.",
    options: [
      { id: "opt_a", label: "أَلْعَبُ يَوْمَ الْجُمُعَةِ. (I play on Friday)", isCorrect: true },
      { id: "opt_b", label: "أَسْبَحُ يَوْمَ السَّبْتِ. (I swim on Saturday)", isCorrect: false },
      { id: "opt_c", label: "أُحِبُّ كُرَةَ الْقَدَمِ. (I like football)", isCorrect: false },
      { id: "opt_d", label: "هَلْ تَلْعَبُ كُلَّ أُسْبُوعٍ؟ (Do you play every week?)", isCorrect: false }
    ],
    explanation: "The audio says: أَلْعَبُ يَوْمَ الْجُمُعَةِ (I play on Friday)."
  },
  {
    id: "fq_025",
    objective: "expression",
    prompt: "What does the conversational exclamation 'رَائِعٌ!' (Rā'iʿ!) mean?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_dialog_m_06_ar.mp3",
    arabicSpeech: "رَائِعٌ!",
    options: [
      { id: "opt_a", label: "Great! / Wonderful!", isCorrect: true },
      { id: "opt_b", label: "See you later!", isCorrect: false },
      { id: "opt_c", label: "Thank you!", isCorrect: false },
      { id: "opt_d", label: "Not at all!", isCorrect: false }
    ],
    explanation: "رَائِعٌ means 'Great!' or 'Wonderful!'."
  },
  {
    id: "fq_026",
    objective: "grammar_verb_form",
    prompt: "Which pair correctly contrasts 'He plays' and 'She plays'?",
    visualKey: null,
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "هُوَ يَلْعَبُ / هِيَ تَلْعَبُ", isCorrect: true },
      { id: "opt_b", label: "هُوَ تَلْعَبُ / هِيَ يَلْعَبُ", isCorrect: false },
      { id: "opt_c", label: "هُوَ أَلْعَبُ / هِيَ نَلْعَبُ", isCorrect: false },
      { id: "opt_d", label: "هُوَ يَلْعَبِينَ / هِيَ تَلْعَبِينَ", isCorrect: false }
    ],
    explanation: "هُوَ takes the prefix يَـ (yal'abu); هِيَ takes the prefix تَـ (tal'abu)."
  },
  {
    id: "fq_027",
    objective: "dialogue_comprehension",
    prompt: "In the male conversation, what is Speaker B's favourite sport?",
    visualKey: null,
    audioStimulus: "audio/etera_sports_dialog_m_02_ar.mp3",
    arabicSpeech: "رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ.",
    options: [
      { id: "opt_a", label: "Football (كُرَةُ الْقَدَمِ)", isCorrect: true },
      { id: "opt_b", label: "Basketball (كُرَةُ السَّلَّةِ)", isCorrect: false },
      { id: "opt_c", label: "Tennis (التِّنِسُ)", isCorrect: false },
      { id: "opt_d", label: "Karate (الْكَرَاتِيهُ)", isCorrect: false }
    ],
    explanation: "In the male dialogue, Speaker B says: رِيَاضَتِي الْمُفَضَّلَةُ كُرَةُ الْقَدَمِ."
  },
  {
    id: "fq_028",
    objective: "vocab_recognition",
    prompt: "Which word means 'volleyball' in Arabic?",
    visualKey: "volleyball",
    audioStimulus: null,
    options: [
      { id: "opt_a", label: "كُرَةُ الطَّائِرَةِ", translit: "kurat aṭ-ṭā'irah", isCorrect: true },
      { id: "opt_b", label: "الرِّيَشَةُ الطَّائِرَةُ", translit: "ar-rīshah aṭ-ṭā'irah", isCorrect: false },
      { id: "opt_c", label: "كُرَةُ السَّلَّةِ", translit: "kurat as-sallah", isCorrect: false },
      { id: "opt_d", label: "تَنِسُ الطَّاوِلَةِ", translit: "tinis aṭ-ṭāwilah", isCorrect: false }
    ],
    explanation: "كُرَةُ الطَّائِرَةِ is volleyball (flying ball), whereas الرِّيَشَةُ الطَّائِرَةُ is badminton."
  }
];


// --- FILE: js/audio.js ---
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

const audioEngine = new AudioEngine();


// --- FILE: js/app.js ---
/**
 * PROJECT ETERA - SPORTS MODULE
 * Master Application Controller & 54-Slide Storyboard Router
 */


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


})();
