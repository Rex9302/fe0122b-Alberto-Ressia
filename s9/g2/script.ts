fetch('audio.json')
    .then(response => response.json())
    .then(risposta => {
        creaListAudio(risposta)
    })

fetch('video.json')
    .then(response => response.json())
    .then(risposta => {
        creaListaVideo(risposta)
    })

var selAudio = document.querySelector('#player-audio')
var selVideo = document.querySelector('#player-video')
var video = document.querySelector('#video')
var audio = document.querySelector('#audio')

function creaListAudio(p: any) {
    for (var i = 0; i < p.length; i++) {
        var creaAudioLi: any = document.createElement('li')
        selAudio.append(creaAudioLi)
        creaAudioLi.addEventListener('click', pAudio)
        creaAudioLi.setAttribute('id', p[i].audio_url)
        creaAudioLi.innerText = p[i].audio_name
    }
}
function creaListaVideo(p: any) {
    for (var i = 0; i < p.length; i++) {
        var creaVideoLi = document.createElement('li')
        selVideo.append(creaVideoLi)
        creaVideoLi.addEventListener('click', pVideo)
        creaVideoLi.setAttribute('id', p[i].video_url)
        creaVideoLi.innerText = p[i].video_name
    }
}
function pVideo() {
    video.setAttribute('src', 'video/' + this.id)
}
function pAudio() {
    audio.setAttribute('src', 'audio/' + this.id)
}