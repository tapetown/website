

// PRELOADER
    
$(window).on('load', function () {
    var $preloader = $('#p_prldr');
       $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.delay(3500).fadeOut();
    $preloader.delay(4000).fadeOut('slow');
});

// END OF PRELOADER//

// SCREEN LOADING EVENTS//
window.addEventListener("load", initAudioPlayer); //инициировать плеер
window.addEventListener("load", initMixcloud); //иннициировать mixcloud
window.addEventListener("focus", updateButton); //обновить статус кнопки плэй
window.addEventListener("load", showPage); 


var cat1 = [
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fm-e-t-a-l-w-rubén-marino-tolosa-tapetownlive-30-07-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fknown-unknown-w-asiriunh-tapetownlive-10-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fplotno-slozheno-w-endemic-tapetownlive-12-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmoonoton-hypnotic-connection-x-tapetown-27-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmuzikalist-hypnotic-connection-x-tapetown-27-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fsangam-hypnotic-connection-x-tapetown-27-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmo-bitz-tapetownlive-29-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frobot-r2-tapetownlive-11-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fdub-field-windrush-generation-tapetownlive-09-08-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fjackit-tapetownlive-05-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fman-on-the-drums-tapetownlive-11-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Feskapisté-tapetownlive-12-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-12-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fasiriunh-tapetownlive-12-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fm-e-t-a-l-w-ruben-marino-tolosa-tapetownlive-17-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fimanou-live-tapetownlive-19-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fzhneaa-tapetownlive-19-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkrokopulos-tapetownlive-19-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fsavvier-tapetownlive-19-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fnight-cab-w-rwanda-tapetownlive-20-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fzima-tapetownlive-08-10-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkasia-ekstovich-tape-set-tapetownlive-23-09-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fdanil-inyushkin-tapetownlive-03-10-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fгорький-опыт-tapetownlive-03-10-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmllffn-tapetownlive-03-10-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Flytvah-tapetownlive-15-11-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fm-e-t-a-l-w-ruben-marino-tolosa-tapetownlive-05-11-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fnight-cab-w-rwanda-tapetownlive-24-11-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Ftime-crusader-tapetownlive-01-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fknown-unknown-café-del-mar-tapetownlive-17-11-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Flytvah-tapetownlive-20-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fberouac-tapetownlive-19-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkibosh-live-tapetownlive-19-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmaka-kibo-tapetownlive-19-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fm-e-t-a-l-w-rubén-marino-tolosa-tapetownlive-23-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frubicon-tapetownlive-26-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frutz-tapetownlive-26-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fwerfol-tapetownlive-26-12-2020-posted-2-days-ago%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmo-bitz-tapetownlive-26-12-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Flow-tape-tapetownlive-26-12-2020-posted-2-days-ago%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmarina-bibik-tapetownlive-05-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Funfound-tapetownlive-05-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fnight-cab-w-rwanda-tapetownlive-10-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmouraz-tapetownlive-07-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fspira-tapetownlive-29-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fneporyadok-tapetownlive-29-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvollok-tapetownlive-29-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fsinusoidal-tapetownlive-29-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fman-on-the-drums-tapetownlive-07-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fberouac-tapetownlive-16-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fflowrovsky-b2b-dj-ndqt-tapetownlive-16-01-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fwilly-fon-willy-tapetownlive-09-02-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fm-e-t-a-l-w-ruben-marino-tolosa-tapetownlive-11-02-2021%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fabove-the-mind-tapetownlive-17072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fdub-field-w-rutz-tapetownlive-22072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-22072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fforgotten-disco-star-tapetownlive-23-07-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Feskapist%C3%A9-tapetownlive-23-07-2020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-savvier-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-mo-bitz-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-asiriunh-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-kasia-ekstovich-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-rutz-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-werfol-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-keprah-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fvideo-marathon-eskapist%C3%A9-tapetownlive-11072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fknown-unknown-w-asiriunh-tapetownlive-29062020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frwanda-tapetownlive-10072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fwerfol-tapetownlive-06072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fwillie-fon-willie-tapetownlive-06072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fdub-field-w-rutz-keprah-tapetownlive-02072020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmuzikalist-tapetownlive-26062020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Ftapetown-podcast-owen-pitch%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fendemic-tapetownlive-03062020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fabove-the-mind-tapetownlive-24052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmo-bitz-b2b-heidebrecht-tapetownlive-230520%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frobot-r2-tapetownlive-23052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fasiriunh-tapetownlive-21052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fzima-tapetownlive-21052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fwerfol-tapetownlive-16052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Frutz-tapetownlive-16052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2F%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8-tapetownlive-14052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fon85-tapetownlive-14052020%2F',,
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2F%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%BB%D0%B8%D0%BF%D0%B0-tapetownlive-14052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fhighlife-tapetownlive-12052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmavleeva-tapetownlive-08052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkovalev-tapetownlive-08052020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmurdergallery-tapetownlive-03042020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fbaker-b2b-greenwald-tapetownlive-03042020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fhulewicz-b2b-either-b2b-sereja-borisov-tapetownlive-31032020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fsinusoidal-tapetownlive-03042020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fsveta-pavlova-tapetownlive-02042020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Ftimbol-tapetownlive-01042020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fboseg-tapetownlive-x-red%D1%8Fum-27032020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fn%C3%B9rguyana-tapetownlive-x-red%D1%8Fum-27032020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Feskapist%C3%A9-tapetownlive-22032020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-22032020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fsavvier-tapetownlive-22032020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-23022020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmo-bitz-tapetownlive-23022020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fasiriunh-tapetownlive-16022020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkrokopulos-tapetownlive-16022020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-16022020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Feskapist%C3%A9-tapetownlive-16022020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Feskapist%C3%A9-tapetownlive-19012020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmo-bitz-tapetownlive-22122019%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkeprah-tapetownlive-22122019%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fasiriunh-tapetownlive-19012020%2F',
'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fmo-bitz-tapetownlive-190120%2F',


    ];


function get1 () {
   var iframe1 = document.getElementById('mix1');
   var index1 = Math.floor(Math.random()*cat1.length);
   var url1 = cat1[index1];
   iframe1.src = url1;
 }

function get2() {
   var iframe2 = document.getElementById('mix2');
   var index2 = Math.floor(Math.random()*cat1.length);
   var url2 = cat1[index2];
   iframe2.src = url2;
}

function get3() {
   var iframe3 = document.getElementById('mix3');
   var index3 = Math.floor(Math.random()*cat1.length);
   var url3 = cat1[index3];
   iframe3.src = url3;
}

window.setTimeout(get1(), 3000);
window.setTimeout(get2(), 3000);
window.setTimeout(get3(), 3000);

var reload = document.getElementById('reload');
reload.addEventListener("click", function() {

   get1(); 
   get2();
   get3();

});

var nowPlayingTimeout;
var nowPlaying; 

// подгрузка названия трека
function loadNowPlaying() { 
$.ajax({ 
      cache: false,
        dataType: "json",
        url: 'https://papetown.live/api/nowplaying_static/tapetown.json',
          success: function(np) {
              // Do something with the Now Playing data.
            nowPlaying = np;
            // console.log(np.now_playing.song.text);
            //     console.log(np.live.is_live);
            //   console.log(np.live.streamer_name); 

              nowPlayingTimeout = setTimeout(loadNowPlaying, 1000);
              var content = np.now_playing.song.text;
              $("#now1").html(content);
        }

      }).fail(function() {
          nowPlayingTimeout = setTimeout(loadNowPlaying, 10000);
      });

  }

    $(function() {
      loadNowPlaying();
  }); 


  // регулятор громкости 

  (function(){ 
    var ttplaya = document.querySelectorAll('.ttplaya');
    for(i=0;i<ttplaya.length;i++) {
    
    var player = ttplaya[i];
    var VolumeSlider = player.querySelector('.volume-bar');
    
    VolumeSlider.addEventListener('input', function(){
    audio.volume = parseInt(this.value)/100;
    console.log(audio.volume);
    step=1;
    min=0;
    max=100;
    value=70;
    }, false);
      

}
  })(this);



//RANDOM BACKGROUND SCRIPT//
var images = ['background.png', 'background2.png', 'background3.png', 'background1.png', 'background4.png'];
$('body').css({'background-image': 'url(assets/img/' + images[Math.floor(Math.random() * images.length)] + ')'
    });
//END OF RBS//

// MIXCLOUD IFRAME LOADING


window.setTimeout(function () {
        var iframe = document.getElementById('iframes1');
        iframe.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Ftime-crusader-tapetownlive-01-12-2020%2F');
    }, 3000); 

window.setTimeout(function () {
        var iframe = document.getElementById('iframes2');
        iframe.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fnight-cab-w-rwanda-tapetownlive-24-11-2020%2F');
    }, 3000); 

window.setTimeout(function () {
        var iframe = document.getElementById('iframes3');
        iframe.setAttribute('src', 'https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ftapetown%2Fkasia-ekstovich-tape-set-tapetownlive-23-09-2020%2F');
    }, 3000); 


//

document.body.classList.add('js-loading');
function showPage() {
  document.body.classList.remove('js-loading');
}

  var xx = document.getElementById('cash');
    var paybtn = document.getElementById('paybtn');
    paybtn.addEventListener('click', function(e) {
      e.preventDefault();
     xx.play();
      });

$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});



//TABS//
var tabs = Array.prototype.slice.call(document.getElementsByClassName('menu-items'), 0);
var tabsContent = Array.prototype.slice.call(document.getElementsByClassName('menu-item-content'), 0);
tabs.forEach((element, i) => {
    element.onclick = () => {
        //подсвечивание выбранной вкладки
        tabs.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        })
        element.classList.add('active');
        //отображение содержимого вкладки
        tabsContent.forEach(element => {
            if (element.style.display == 'block');
                element.style.display = 'none';
        })
        tabsContent[i].style.display = 'block';
    }
});
//END OF//
  
//AUDIO PLAYER//         
var audio, playPause;
function initAudioPlayer(){
    audio = document.getElementById('myTune');
    playPause = document.getElementById('btn');
    playPause.addEventListener('click', function(e) {
      e.preventDefault();
      playPause.classList.toggle('fa-play');
      playPause.classList.toggle('fa-pause');
      if (audio.paused) {
        audio.play();

        stopMixcloud();
      } else {
        audio.pause();
      }
      return false;
    }, false);
    updateButton();
  }
//END OF//  


        //PLAY BUTTON STATUS CHANGE// 
        var audio;
        audio = document.getElementById('myTune');
        function updateButton() {
            if(audio.paused) {
              $('#btn').removeClass('fa fa-pause');
              $('#btn').addClass('fa fa-play');
          } else {
              $('#btn').removeClass('fa fa-play');
              $('#btn').addClass('fa fa-pause');
          }
        }
        //END OF//

//MIXCLOUD WIDGET AND PLAYBACK SWITCH//
var mixcloudWidgets;
function initMixcloud() {
    mixcloudWidgets = Array.from(document.getElementsByClassName('mixcloudWidget'), e => Mixcloud.PlayerWidget(e));
    mixcloudWidgets.forEach(function(w) {
        w.ready.then(function() {
            w.events.play.on(onMixcloudPlay(w));
        });
    });
}

        //STOP MIXCLOUD WHEN RADIO IS PLAYING//
        function stopMixcloud() {
            mixcloudWidgets.forEach(function(w) {
                            w.pause();
            });
        }

        //STOP RADIO WHEN MIXCLOUD IS PLAYING//
        function onMixcloudPlay(widget) {
            return function() {
                audio.pause();
                mixcloudWidgets.forEach(function(w) {
                    if (w != widget)
                        w.pause();
                });
            }
}






