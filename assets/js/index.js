import {
    Tabs,
    PlayerController,
    PlayerView,
    Rest,
    Donation
} from './modules/index.js'

new Tabs()
new PlayerController(new PlayerView(), new Rest())
new Donation()

// хайрес картинка на видео
$('iframe.yt-hd-thumbnail').youTubeHDThumbnail({
    darkenThumbnail: false
});
