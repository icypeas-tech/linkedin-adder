const scriptTag = document.createElement("script");
scriptTag.src = chrome.runtime.getURL("elementsMap.js");
document.head.appendChild(scriptTag);

function addInvitations() {
	const connections = document.querySelectorAll(elementsMap.addButton);
  
	for (let i = 0; i < connections.length; i++) {
	  connections[i].click();
  }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.action === "addInvitations") {
	  	addInvitations();
	}
});


  