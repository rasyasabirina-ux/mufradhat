/**
 * PROJECT ETERA - SPORTS MODULE
 * Comprehensive Question Banks & Shuffle Mechanics
 * Follows Storyboard Section 8 & Section 10 Technical Model
 */

// Utility: Fisher-Yates shuffle that returns a new array copy
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Utility: Draw N unique items without replacement
export function drawSample(bank, count) {
  const shuffled = shuffleArray(bank);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
}

// VOCABULARY GROUP 1 QUESTION BANK (Words 1 - 6)
export const VOCAB_GROUP_1_BANK = [
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
export const VOCAB_GROUP_2_BANK = [
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
export const SENTENCES_BANK = [
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
export const CONVERSATION_BANK = [
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
export const FINAL_QUIZ_BANK = [
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
