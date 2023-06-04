// copy data button selector
let copyButton = document.getElementById('copyButton');

/**
 * if the copy button is found then make a data object with the selected input fields and send it to the background js
 * otherwise console.log('can not copy data from this page')
 */
if(copyButton){
    copyButton.addEventListener("click", function () {
        
        let name= document.getElementById('name').value;
        let phone= document.getElementById('phone').value;
        let data= {
            name: name,
            phone: phone
        };
        if(name && phone){
            chrome.runtime.sendMessage({ action: "setData", data: data }, function (response) {
            console.log("Data set:", response.data);
            });
        }
        else{
            alert('can not copy all fields from this page');
        }
    });
}
else{
    console.log("can not copy data from this page");
}


// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'doSomething') {
      // Perform desired actions in the content script
      chrome.runtime.sendMessage({ action: 'getData' }, function(response) {
        console.log('Data retrieved:', response.data);
    });
      // ...
    }
  });