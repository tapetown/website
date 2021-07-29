class Rest {
    getNowPlaying() {
        return new WebSocket('wss://papetown.live/api/live/nowplaying/tapetown')
    }

    getNextLive() {
        return fetch('assets/js/data.json')
            .then((res) => res.json())
            .then(({ data }) => data)
    }
}

export { Rest }
