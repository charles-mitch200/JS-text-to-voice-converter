let speech = new SpeechSynthesisUtterance();

// Changing the voices
let voices = [];

const voiceSelect = document.querySelector("select");

window.speechSynthesis.addEventListener("voiceschanged", () => {
  voices = window.speechSynthesis.getVoices();
  //  The default voice is the first voice in the voices array
  speech.voice = voices[0];
  // Display all available voices in the options part of the select element
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
});

// Use the selected voice for the speech
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Convert the text entered in the textarea to speech
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
