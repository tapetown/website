class PlayerView {
    constructor() {
        this.audio = document.getElementById('myTune')
        this.playButton = document.getElementById('btn')
        this.slider = document.querySelector('.volume-bar')
        this.flash = document.querySelector('.flash')
        this.now = document.getElementById('now1')
        this.tba = document.getElementById('tba')
    }

    setAudioSource(url) {
        const source = document.createElement('source')
        source.setAttribute('src', url)
        source.setAttribute('type', 'audio/mpeg')

        this.audio.appendChild(source)
    }

    getAudioState() {
        return this.audio.paused
    }

    play() {
        this.audio.play()
    }

    pause() {
        this.audio.pause()
    }

    setVolume(value) {
        this.audio.volume = parseInt(value, 10) / 100
    }

    setNowText(text) {
        this.now.textContent = text
    }

    setTbaText(text) {
        this.tba.textContent = text
    }

    setFlash() {
        this.flash.style.display = 'block'
    }

    unsetFlash() {
        this.flash.style.display = 'none'
    }

    setButtonState() {
        if (this.audio.paused) {
            this.playButton.classList.remove('fa', 'fa-pause')
            this.playButton.classList.add('fa', 'fa-play')
        } else {
            this.playButton.classList.remove('fa', 'fa-play')
            this.playButton.classList.add('fa', 'fa-pause')
        }
    }
}

export { PlayerView }
