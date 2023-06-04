document.addEventListener("DOMContentLoaded", function () {
  var getDataButton = document.getElementById("getDataButton");
//   var setDataButton = document.getElementById("setDataButton");
//   var dataInput = document.getElementById("dataInput");

  getDataButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "getData" }, function (response) {
      console.log("Data retrieved:", response.data);
    });

    // Function to send a message to the content script
    function sendMessageToContentScript(message) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }
    
    // Example usage: Send a message to the content script
    var message = { action: 'doSomething' };
    sendMessageToContentScript(message);
  });

//   setDataButton.addEventListener("click", function () {
//     var data = dataInput.value;
//     chrome.runtime.sendMessage(
//       { action: "setData", data: data },
//       function (response) {
//         console.log("Data set:", data);
//       }
//     );
//   });
});
