(function() {
  var getCurrentSong, setCurrentSong;

  setCurrentSong = function(songInfo) {
    if (songInfo) {
      document.getElementById('currentSong').innerText = songInfo.song;
      document.getElementById('currentArtist').innerText = songInfo.artist;
    }
  };

  getCurrentSong = function() {
    return chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      return chrome.tabs.sendMessage(tabs[0].id, {
        from: 'ttPopup',
        action: 'getCurrentSong'
      }, function(res) {
        setCurrentSong(res);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', function() {
    return document.getElementById('getCurrentSong').addEventListener('click', getCurrentSong);
  });

}).call(this);
