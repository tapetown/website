class Tabs {
    constructor() {
        this.tabs = Array.from(document.getElementsByClassName('menu-items'))
        this.content = Array.from(document.getElementsByClassName('menu-item-content'))
        this.switchTab = this.switchTab.bind(this)

        this.tabs.forEach((tab, index) => {
            tab.addEventListener('click', this.switchTab(tab, index))
        })
    }

    switchTab(tab, index) {
        return () => {
            this.setUnactive()

            tab.classList.add('active')

            this.setContent(index)
        }
    }

    setUnactive() {
        this.tabs.forEach((tab) => {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active')
            }
        })
    }

    setContent(index) {
        this.content.forEach((tabContent) => {
            if (tabContent.style.display === 'block') {
                tabContent.style.display = 'none'
            }
        })

        this.content[index].style.display = 'block'
    }
}

export { Tabs }
