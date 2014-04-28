(function() {
  'use strict';
  var getCurrentSong, ttBody;

  console.log('YOU WIN');

  ttBody = document.getElementsByTagName('body')[0];

  getCurrentSong = function() {
    console.log('Getting current song');
    return {
      song: 'testSong',
      artist: 'testArtist'
    };
  };

  chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    console.log('Received message');
    console.log(msg);
    if (msg.from) {
      if (msg.from === 'ttPopup') {
        if (msg.action && msg.action === 'getCurrentSong') {
          return callback(getCurrentSong());
        }
      } else if (msg.from === 'ttBackground') {
        return console.log('test');
      }
    }
  });

}).call(this);
