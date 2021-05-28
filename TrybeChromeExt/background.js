// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
      case "white":
        setBgColor('white');
        break;
      case "black":
        setBgColor('black');
        break;
  }
  return true;
});

// send a message to the content script
function setBgColor(color) {
  chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, {type: "set-bg-color", color: color});
      // setting a badge
      chrome.browserAction.setBadgeText({text: 'VQV'});
  });
}