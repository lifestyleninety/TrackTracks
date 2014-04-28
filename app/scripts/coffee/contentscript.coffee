'use strict'

console.log 'YOU WIN'

# Global Declaration
ttBody = document.getElementsByTagName('body')[0]
#chrome.extension.getURL('fav.html')

getCurrentSong = ->
  console.log 'Getting current song'
  # IF RDIO:
  #currentSong = $('.text_metadata .song_title')[0].innerText
  #currentArtist = $('.text_metadata .artist_title')[0].innerText
  #song: currentSong
  #artist: currentArtist
  song: 'testSong'
  artist: 'testArtist'

# Listener
chrome.runtime.onMessage.addListener (msg, sender, callback) ->
  console.log 'Received message'
  console.log msg
  if msg.from
    if msg.from is 'ttPopup'
      if msg.action and msg.action is 'getCurrentSong'
        callback getCurrentSong()
    else if msg.from is 'ttBackground'
      console.log 'test'
