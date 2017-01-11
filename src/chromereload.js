'use strict'

// Reload client for Chrome Apps & Extensions.
// The reload client has a compatibility with livereload.
// WARNING: only supports reload command.
if (__DEV__) {
  var LIVERELOAD_HOST = 'localhost:'
  var LIVERELOAD_PORT = 35729
  var connection = new WebSocket('ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload')
  connection.onerror = function (error) {
    console.log('reload connection got error:', error)
  }

  connection.onmessage = function (e) {
    if (!e.data) return
    var data = JSON.parse(e.data)
    if (data && data.command === 'reload') {
      if (chrome.runtime.reload) {
        chrome.runtime.reload()
      } else {
        location.reload()
      }
    }
  }
}
