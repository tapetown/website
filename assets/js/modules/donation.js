class Donation {
    constructor() {
        this.cash = document.getElementById('cash')
        this.payButton = document.getElementById('paybtn')
        this.openPopUp = document.querySelector('[data-popup-open]')
        this.closePopUp = document.querySelector('[data-popup-close]')

        this.mount()
    }

    mount() {
        this.payButton.addEventListener('click', () => {
            this.cash.play()
        })
        this.initOpenPopUp()
        this.initClosePopUp()
    }

    initOpenPopUp() {
        this.openPopUp.addEventListener('click', () => {
            $('[data-popup="' + this.openPopUp.getAttribute('data-popup-open') + '"]')
                .fadeIn(350)
        })
    }

    initClosePopUp() {
        this.closePopUp.addEventListener('click', () => {
            $('[data-popup="' + this.closePopUp.getAttribute('data-popup-close') + '"]')
                .fadeOut(350)
        })
    }
}

export { Donation }
