const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const lyricsContainer = document.getElementById('lyrics');

// Full Duvidha Lyrics with Timestamps
const lyricsData = [
    { time: 2.58, text: "[संगीत]" },
    { time: 32.57, text: "[प्रशंसा]" },
    { time: 41.76, text: "दुख शुरू थे मेरे जन्म से पहले जन्म से" },
    { time: 44.08, text: "पहले मेरी मौत इंतजार में कैसे कहूं" },
    { time: 46.08, text: "कहानियां अब सुनो पूरी लंबी कतार में जन्म" },
    { time: 49.04, text: "हुआ मेरा जेल में मां बाप का चेहरा मैंने" },
    { time: 51.28, text: "देखा नहीं हां रोती रही मां देव की जुदाई" },
    { time: 54.04, text: "मिली मुझे भेंट में मामा से मिला उपहार ये" },
    { time: 56.84, text: "मेरे मात पिता लाचार थे छह भाइयों को मारा" },
    { time: 59.44, text: "सामने आंसू थे मां की आंखों में वैसे तो" },
    { time: 62.44, text: "था भगवान में अजीब सा ये खेल है मेरे" },
    { time: 65.36, text: "मात-पिता मेरे देवता वो दोनों ही थे जेल" },
    { time: 68.2, text: "में कर्तव्य मिले मुझे जन्म से बचपन बीता" },
    { time: 71.88, text: "संघर्ष में जिस्मा ने पाला पोसा मुझे उससे" },
    { time: 74.36, text: "भी हो गया दूर में विधि का क्या विधान था" },
    { time: 77.2, text: "क्या लेख लिखा था कर्मों का तुम ठीक से रो" },
    { time: 80.36, text: "तो
