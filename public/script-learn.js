const words = [
    {
      sanskrit: "विद्या",
      meaning: "Knowledge — the light that removes darkness of ignorance.",
      audio: "assets/audio/vidya.mp3"
    },
    {
      sanskrit: "शान्तिः",
      meaning: "Peace — an inner state of balance and tranquility.",
      audio: "assets/audio/shanti.mp3"
    },
    {
      sanskrit: "गुरुः",
      meaning: "Teacher — one who dispels darkness and leads to light.",
      audio: "assets/audio/guru.mp3"
    },
    {
      sanskrit: "प्रेम",
      meaning: "Love — a feeling of deep affection and universal connection.",
      audio: "assets/audio/prema.mp3"
    },
    {
      sanskrit: "धैर्यम्",
      meaning: "Courage — the strength to face fear, pain, or difficulty.",
      audio: "assets/audio/dhairyam.mp3"
    },
    {
      sanskrit: "सत्यं",
      meaning: "Truth — the quality of being in accordance with fact or reality.",
      audio: "assets/audio/satyam.mp3"
    },
    {
      sanskrit: "अहिंसा",
      meaning: "Non-violence — a principle of not causing harm to any living being.",
      audio: "assets/audio/ahimsa.mp3"
    },
    {
      sanskrit: "धर्मः",
      meaning: "Duty — righteous conduct based on moral laws and responsibilities.",
      audio: "assets/audio/dharma.mp3"
    },
    {
      sanskrit: "कर्म",
      meaning: "Action — every deed has consequences based on intention and effect.",
      audio: "assets/audio/karma.mp3"
    },
    {
      sanskrit: "मित्रम्",
      meaning: "Friend — someone who supports, shares, and cares.",
      audio: "assets/audio/mitram.mp3"
    },
    {
      sanskrit: "स्वतन्त्रता",
      meaning: "Freedom — the state of being independent and making one’s own choices.",
      audio: "assets/audio/svatantrata.mp3"
    },
    {
      sanskrit: "स्मितम्",
      meaning: "Smile — a gentle expression of joy or friendliness.",
      audio: "assets/audio/smitam.mp3"
    },
    {
      sanskrit: "शक्ति",
      meaning: "Power — inner strength and energy that fuels action.",
      audio: "assets/audio/shakti.mp3"
    },
    {
      sanskrit: "भक्ति",
      meaning: "Devotion — heartfelt love and surrender to the Divine.",
      audio: "assets/audio/bhakti.mp3"
    },
    {
      sanskrit: "मोक्षः",
      meaning: "Liberation — freedom from the cycle of birth and death.",
      audio: "assets/audio/moksha.mp3"
    },
    {
      sanskrit: "आशा",
      meaning: "Hope — the feeling of expectation and desire for a positive future.",
      audio: "assets/audio/aasha.mp3"
    },
    {
      sanskrit: "कर्तव्यं",
      meaning: "Responsibility — duty that must be fulfilled with care and honesty.",
      audio: "assets/audio/kartavyam.mp3"
    },
    {
      sanskrit: "ज्ञानम्",
      meaning: "Wisdom — understanding deeper truths of life and self.",
      audio: "assets/audio/jnanam.mp3"
    },
    {
      sanskrit: "आनन्दः",
      meaning: "Bliss — a state of deep joy and spiritual happiness.",
      audio: "assets/audio/anandah.mp3"
    },
    {
      sanskrit: "संधानम्",
      meaning: "Harmony — the balance and unity in thoughts, words, and actions.",
      audio: "assets/audio/sandhanam.mp3"
    }
  ];
  
  let index = 0;
  
  function showWord(i) {
    const word = words[i];
    document.getElementById("sanskrit-word").textContent = word.sanskrit;
    document.getElementById("english-meaning").textContent = word.meaning;
    document.getElementById("word-audio").src = word.audio;
  }
  
  function nextWord() {
    if (index < words.length - 1) {
      index++;
      showWord(index);
    }
  }
  
  function prevWord() {
    if (index > 0) {
      index--;
      showWord(index);
    }
  }
  
  showWord(index);
  