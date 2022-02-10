import { URL, TIMEOUT } from '../constants.js'

class PlayerController {
    constructor(view, rest) {
        this.view = view
        this.rest = rest
        this.djLive = false
        this.setPlayerState = this.setPlayerState.bind(this)

        this.view.playButton.addEventListener('click', this.setPlayerState)
        this.view.setAudioSource(URL.AUDIO_STREAM)
        this.setVolumeSlider()
        this.setNowPlaying()
        this.setNowPlayingFromFile()
        this.setNextLive()
    }

    setPlayerState() {
        this.view.getAudioState() ? this.view.play() : this.view.pause()
        this.view.setButtonState()
    }

    setVolumeSlider() {
        this.view.slider.addEventListener('input', (e) => {
            this.view.setVolume(e.target.value)
        })
    }

    setNowPlaying() {
        this.rest.getNowPlaying().addEventListener('message', (event) => {
            if (!this.djLive) {
                this.view.setNowText(JSON.parse(event.data)?.now_playing?.song?.text)
            }
        })
    }

    setNowPlayingFromFile() {
        setInterval(() => {
            this.rest.getNowPlayingFromFile().then(({ dj_live, streamer_name }) => {
                this.djLive = dj_live

                if (dj_live) {
                    this.view.setFlash()
                    this.view.setNowText(streamer_name)
                } else {
                    this.view.unsetFlash()
                }
            })
        }, TIMEOUT.PLAYING_NOW_FROM_FILE_REFRESH)
    }

    setNextLive() {
        this.rest.getNextLive().then((res) => {
            this.view.setTbaText(res)
        })
    }
}

export { PlayerController }
