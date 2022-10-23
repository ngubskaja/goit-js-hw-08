{/* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script> */}

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay=throttle((data)=>{
        localStorage.setItem("videoplayer-current-time", data.seconds);
    }, 1000)
    
    
    player.on('timeupdate', onPlay);
    
    player.on("loaded", function () {
        if (localStorage.getItem("videoplayer-current-time")) {
            player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
        }
    });

    // player.setCurrentTime(seconds);
    // player.setCurrentTime(30.456).then(function(seconds) {
    //     // seconds = the actual time that the player seeked to
    // }).catch(function(error) {
    //     switch (error.name) {
    //         case 'RangeError':
    //             // the time was less than 0 or greater than the video’s duration
    //             break;
    
    //         default:
    //             // some other error occurred
    //             break;
    //     }
    // });


