class Layout {
    constructor() {
        this.backgrounds = [
            'background9.svg'
        ]

        this.setBackgroundImage()
    }

    static DARK_BACKGROUND_DURATION = 50
    static ANIMATION_DURATION = 50



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
