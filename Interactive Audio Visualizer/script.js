// JavaScript file
const audioFileInput = document.getElementById('audioFile');
const playButton = document.getElementById('playButton');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

let audioContext;
let audioSource;
let analyser;

playButton.addEventListener('click', () => {
    if (!audioFileInput.files[0]) {
        alert('Please select an audio file first!');
        return;
    }

    const audioFile = audioFileInput.files[0];
    const audio = new Audio(URL.createObjectURL(audioFile));

    if (!audioContext) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        audioSource = audioContext.createMediaElementSource(audio);
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);

        function drawVisualizer() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            analyser.getByteFrequencyData(dataArray);

            const barWidth = canvas.width / bufferLength;
            let x = 0;

            dataArray.forEach((value, index) => {
                const barHeight = value / 2;
                const r = (value + index) % 256;
                const g = (value * index) % 256;
                const b = (index * 2) % 256;

                ctx.fillStyle = `rgb(${r},${g},${b})`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

                x += barWidth + 2;
            });

            requestAnimationFrame(drawVisualizer);
        }

        drawVisualizer();
    }

    audio.play();
});
