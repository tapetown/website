class Layout {
    constructor() {
        this.backgrounds = [
            'background9.png'
        ]

        this.setBackgroundImage()
    }

    setBackgroundImage() {
        document.querySelector('body').style.backgroundImage = this.getBackgroundLink()
    }

    getBackgroundLink() {
        return `url(assets/img/${this.getRandomBackground()}`
    }

    getRandomBackground() {
        return this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
    }
}

export { Layout }
