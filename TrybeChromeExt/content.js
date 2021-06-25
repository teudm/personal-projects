chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.type) {
      case "theme":
          const divs = document.querySelectorAll("div");
          if(divs.length === 0) {
              alert("There are no any divs in the page.");
          } else {
              for(let i=0; i<=divs.length; i++) {
                  divs[i].style.backgroundColor = message.theme.bgcolor;
              }
          }
      break;
  }
});