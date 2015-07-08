chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file: "prism.css"}, function () {
    chrome.tabs.executeScript(null, {file: "preinsert.js"}, function () {
      chrome.tabs.executeScript(null, {file: "prism.js"});
    });
  });
});