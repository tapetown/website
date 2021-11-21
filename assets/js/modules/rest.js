import { URL } from './constants.js'

class Rest {
    getNowPlaying() {
        return new WebSocket(URL.PLAYIN_NOW)
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
