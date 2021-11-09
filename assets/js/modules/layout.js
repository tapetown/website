class Layout {
    constructor() {
        this.backgrounds = [
            'background9.png'
        ]
        // this.darkBackground = $('#p_prldr')
        // this.animation = this.darkBackground.find('.svg_anm')
        // this.hidePreloader = this.hidePreloader.bind(this)
        // window.addEventListener('load', this.hidePreloader)
        this.setBackgroundImage()
    }

    static DARK_BACKGROUND_DURATION = 50
    static ANIMATION_DURATION = 50

    // hidePreloader() {
    //     this.animation.delay(Layout.DARK_BACKGROUND_DURATION).fadeOut()
    //     this.darkBackground.delay(Layout.ANIMATION_DURATION).fadeOut('fastest')
    // }

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
