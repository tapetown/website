class Layout {
    constructor() {
        this.backgrounds = [
            'background.svg',
            'background2.svg',
            'background3.svg',
            'background4.svg',
            'background5.svg',
            'background6.svg',
            'background7.svg',
            'background8.svg'
        ]
        this.darkBackground = $('#p_prldr')
        this.animation = this.darkBackground.find('.svg_anm')
        this.hidePreloader = this.hidePreloader.bind(this)
        this.setBackgroundImage()
    }

    static DARK_BACKGROUND_DURATION = 1000
    static ANIMATION_DURATION = 1500

    hidePreloader() {
        this.animation.delay(Layout.DARK_BACKGROUND_DURATION).fadeOut()
        this.darkBackground.delay(Layout.ANIMATION_DURATION).fadeOut('slow')

        this.removeDarkBackground()
    }

    removeDarkBackground() {
        document.body.classList.remove('js-loading');
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
