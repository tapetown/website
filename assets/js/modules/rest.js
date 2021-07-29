class Rest {
    getNowPlaying() {
        return new WebSocket('wss://papetown.live/api/live/nowplaying/tapetown')
    }

    getNowPlayingFromJson() {
        return this.extractData(fetch('assets/js/data.json'))
            .then(({ now_playing }) => now_playing)
    }

    getNextLive() {
        return this.extractData(fetch('assets/js/data.json'))
            .then(({ upcoming }) => upcoming)
    }

    extractData(promise) {
        return promise
            .then((res) => res.json())
            .then(({ data }) => data)
    }
}

export { Rest }
