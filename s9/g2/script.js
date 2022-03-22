fetch('audio.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    creaListAudio(risposta);
});
fetch('video.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    creaListaVideo(risposta);
});
var selAudio = document.querySelector('#player-audio');
var selVideo = document.querySelector('#player-video');
var video = document.querySelector('#video');
var audio = document.querySelector('#audio');
function creaListAudio(p) {
    for (var i = 0; i < p.length; i++) {
        var creaAudioLi = document.createElement('li');
        creaAudioLi.addEventListener('click', pAudio);
        selAudio.append(creaAudioLi);
        creaAudioLi.innerText = p[i].audio_name;
    }
}
function creaListaVideo(p) {
    for (var i = 0; i < p.length; i++) {
        var creaVideoLi = document.createElement('li');
        creaVideoLi.addEventListener('click', pVideo);
        selVideo.append(creaVideoLi);
        creaVideoLi.innerText = p[i].video_name;
    }
}
function pVideo() {
    video.setAttribute('src', 'video/' + this.innerText + '.mp4');
}
function pAudio() {
    audio.setAttribute('src', 'audio/' + this.innerText + '.mp3');
}
