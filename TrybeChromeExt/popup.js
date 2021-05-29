window.onload = function() {
  document.getElementById("dracula").onclick = function() {
      chrome.extension.sendMessage({
          type: "dracula"
      });
  }
  document.getElementById("trybe").onclick = function() {
    chrome.extension.sendMessage({
        type: "trybe"
    });
}
}