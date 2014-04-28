setCurrentSong = (songInfo) ->
  if songInfo
    document.getElementById('currentSong').innerText = songInfo.song
    document.getElementById('currentArtist').innerText = songInfo.artist
    return

getCurrentSong = ->
  chrome.tabs.query
    active: true
    currentWindow: true
  , (tabs) ->
    chrome.tabs.sendMessage tabs[0].id,
      from: 'ttPopup'
      action: 'getCurrentSong'
    , (res) ->
      setCurrentSong res
      return

document.addEventListener 'DOMContentLoaded', ->
  document.getElementById('getCurrentSong').addEventListener 'click', getCurrentSong
