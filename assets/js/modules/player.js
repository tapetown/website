class Player {
    constructor(rest) {
        this.rest = rest
        this.audio = document.getElementById('myTune')
        this.playButton = document.getElementById('btn')
        this.slider = document.querySelector('.volume-bar')
        this.now = document.getElementById('now1')
        this.tba = document.getElementById('tba')

        this.setPlayerState = this.setPlayerState.bind(this)
        this.init()
    }

    init() {
        this.playButton.addEventListener('click', this.setPlayerState)
        this.initVolumeSlider()
        this.setNowPlayingText()
        this.setNextLiveText()
    }

    initVolumeSlider() {
        this.slider.addEventListener('input', () => {
            this.audio.volume = parseInt(this.slider.value, 10) / 100
        })

    }

    setPlayerState() {
        this.audio.paused ? this.audio.play() : this.audio.pause()
        this.setButtonState()
    }

    setNowPlayingText() {
        this.rest.getNowPlaying().addEventListener('message', (event) => {
            this.now.textContent = this.definePlayingText(JSON.parse(event.data)) || '...'
        })
    }

    definePlayingText(data) {
        const { live: { is_live, streamer_name } } = data

        return is_live ? streamer_name : data?.now_playing?.song?.text
    }

    setNextLiveText() {
        this.rest.getNextLive().then((res) => {
            this.tba.textContent = res.upcoming;
        })
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

export { Player }
