chrome.tabs.onUpdated.addListener((tabId,changeinfo,tab) => {
  if(tab.url && tab.url.includes("youtube.com/watch"))
  {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters); //This is a cool wrapper function to deal with URLs
    chrome.tabs.sendMessage(tabId,{ 
      //This is where you can pass content to your content string
      type: 'NEW',
      videoId: urlParameters.get("v"),
      //The content script now needs to be able to understnad any of those messages
    });

  }

});