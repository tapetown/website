import { URL } from './constants.js'

class Rest {
    getNowPlaying() {
        return new WebSocket(URL.PLAYING_NOW)
    }

    getNowPlayingFromFile() {
        return this.extractData(fetch(URL.PLAYING_NOW_FROM_FILE))
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
