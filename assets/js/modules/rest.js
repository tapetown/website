import { URL } from './constants.js'

class Rest {
    getNowPlaying() {
        return fetch(URL.PLAYIN_NOW)
            .then((res) => res.json())
            .then((data) => data)
    }

    getNowPlayingFromJson() {
        return this.extractData(fetch(URL.PLAYING_LIVE))
            .then(({ now_playing }) => now_playing)
    }

    getNextLive() {
        return this.extractData(fetch(URL.PLAYING_LIVE))
            .then(({ upcoming }) => upcoming)
    }

    extractData(promise) {
        return promise
            .then((res) => res.json())
            .then(({ data }) => data)
    }
}

export { Rest }
