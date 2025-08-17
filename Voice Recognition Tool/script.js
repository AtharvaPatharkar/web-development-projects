// JavaScript file
const startButton = document.getElementById('start-btn');
const transcriptionArea = document.getElementById('transcription');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    startButton.addEventListener('click', () => {
        recognition.start();
        startButton.disabled = true;
        startButton.textContent = 'Listening... 🎧';
    });

    recognition.onresult = (event) => {
        let transcript = '';
        for (const result of event.results) {
            transcript += result[0].transcript;
        }
        transcriptionArea.textContent = transcript;
    };

    recognition.onspeechend = () => {
        recognition.stop();
        startButton.disabled = false;
        startButton.textContent = '🎤 Start Recognition';
    };
} else {
    transcriptionArea.textContent = 'Your browser does not support Speech Recognition.';
    startButton.disabled = true;
}
