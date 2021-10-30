import {
    Layout,
    Tabs,
    PlayerController,
    Donation,
    PlayerView,
    Rest
} from './modules'

new Layout()
new Tabs()
new PlayerController(new PlayerView(), new Rest())
new Donation()

// хайрес картинка на видео
$('iframe.yt-hd-thumbnail').youTubeHDThumbnail({
    darkenThumbnail: false
});
