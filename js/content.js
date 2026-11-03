/**
 * PROJECT ETERA - SPORTS MODULE
 * Content Data Model & Storyboard Registry
 * Modern Standard Arabic (MSA / fuṣḥā)
 */

export const VOCABULARY_ITEMS = [
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

export const SENTENCE_ITEMS = [
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

export const FEMALE_DIALOGUE = [
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

export const MALE_DIALOGUE = [
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

export const GENDER_NOTICES = {
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

export const MODULE_METADATA = {
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
