import {
    Layout,
    Tabs,
    PlayerController,
    PlayerView,
    Rest,
    Donation
} from './modules/index.js'

new Layout()
new Tabs()
new PlayerController(new PlayerView(), new Rest())
new Donation()

// LIVE VIDEO

// var text = ["VIDEO", "LIVE NOW"];
// var counter = 0;
// var elem = document.getElementById("changeText");
// var delayInMilliseconds = 1500;
// setTimeout(change, delayInMilliseconds);
// setInterval(change, 1800);

// function change() {
//     elem.classList.add('hide');
//     setTimeout(function () {
//         elem.innerHTML = text[counter];
//         elem.classList.remove('hide');
//         counter++;
//         if (counter >= text.length) {
//             counter = 0;
//         }
//     }, 1000);
// }

// END OF LIVE VIDEO

// хайрес картинка на видео
$('iframe.yt-hd-thumbnail').youTubeHDThumbnail({
    darkenThumbnail: false
});

