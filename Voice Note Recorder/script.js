// JavaScript file
let startRecordBtn = document.getElementById('startRecord');
let stopRecordBtn = document.getElementById('stopRecord');
let playAudioBtn = document.getElementById('playAudio');

let recorder;
let audioChunks = [];

startRecordBtn.addEventListener('click', startRecording);
stopRecordBtn.addEventListener('click', stopRecording);
playAudioBtn.addEventListener('click', playAudio);

function startRecording() {
  audioChunks = [];
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = event => audioChunks.push(event.data);
      recorder.start();
      startRecordBtn.disabled = true;
      stopRecordBtn.disabled = false;
      playAudioBtn.disabled = true;
    });
}

function stopRecording() {
  recorder.stop();
  startRecordBtn.disabled = false;
  stopRecordBtn.disabled = true;
  playAudioBtn.disabled = false;
}

function playAudio() {
  const audioBlob = new Blob(audioChunks);
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  audio.play();
}
