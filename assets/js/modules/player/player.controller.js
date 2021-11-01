import { URL } from '../constants.js'

class PlayerController {
    constructor(view, rest) {
        this.view = view
        this.rest = rest
        this.setPlayerState = this.setPlayerState.bind(this)

        this.view.playButton.addEventListener('click', this.setPlayerState)
        this.view.setAudioSource(URL.AUDIO_STREAM)
        this.setVolumeSlider()
        this.setNowPlaying()
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
        this.rest.getNowPlaying().addEventListener('message', async (event) => {
            this.view.setNowText(await this.defineWhatPlaying(JSON.parse(event.data)))
        })
    }

    setNextLive() {
        this.rest.getNextLive().then((res) => {
            this.view.setTbaText(res)
        })
    }

    defineWhatPlaying(data) {
        const { live: { is_live } } = data

        if (is_live) {
            this.view.setFlash()
            return this.rest.getNowPlayingFromJson()
        }

        return Promise.resolve(data?.now_playing?.song?.text)
    }
}

export { PlayerController }
