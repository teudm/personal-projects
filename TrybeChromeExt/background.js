// listening for an event / one-time requests
// coming from the popup
const themes = {
  'dracula': {
    'bgcolor': '#282a36',
    'textcolor': '#f8f8f2',
    'linkcolor': '#bd93f9'
  },
  'trybe': {
    'bgcolor': '#FFF',
    'textcolor': '#212529',
    'linkcolor': '#212529'
  }
}
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
      case "dracula":
        setTheme(themes.dracula);
        break;
      case "trybe":
        setTheme(themes.trybe);
        break;
  }
  return true;
});

// send a message to the content script
function setTheme(theme) {
  chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, {type: "theme", theme: theme});
      // setting a badge
      chrome.browserAction.setBadgeText({text: 'VQV', tabId: tab.id});
      chrome.browserAction.setBadgeBackgroundColor({color: theme.bgcolor, tabId: tab.id});
  });
}