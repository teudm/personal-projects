window.onload = function() {
  document.getElementById("black").onclick = function() {
      chrome.extension.sendMessage({
          type: "black"
      });
  }
  document.getElementById("white").onclick = function() {
    chrome.extension.sendMessage({
        type: "white"
    });
}
}