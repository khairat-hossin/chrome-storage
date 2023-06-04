chrome.runtime.onInstalled.addListener(function() {
    // Initialize storage with default values
    chrome.storage.sync.set({ key: 'value' }, function() {
      console.log('Default value is set.');
    });
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getData') {
      chrome.storage.sync.get(['key'], function(result) {
        sendResponse({ data: result.key });
      });
      return true; // Enable asynchronous response
    }
  
    if (request.action === 'setData') {
      var data = request.data;
      chrome.storage.sync.set({ key: data }, function() {
        sendResponse({ data: data });
      });
      return true; // Enable asynchronous response
    }
  });