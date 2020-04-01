chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.executeScript({
        file: '/script.js'
      });
      chrome.tabs.insertCSS({
        file: '/styles/mdb.css',
        file: '/styles/bts.css' 
      });
  });