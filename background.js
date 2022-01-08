// When the extension is installed or upgraded ...
/*chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, 
 function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
    {
     // That fires when a page's URL contains a 'g' ...
     conditions: [
     new chrome.declarativeContent.PageStateMatcher({
       pageUrl: { urlContains: 'google.com' },
     })
    ],
     // And shows the extension's page action.
     actions: [ new chrome.declarativeContent.ShowPageAction() ]
   }
 ]);
});
});
*/



// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the letter 'g' is found in the tab's URL...
    if (tab.url.indexOf('g') > -1) {
      // ... show the page action.
      chrome.pageAction.show(tabId);
    }
  };
  
  // Listen for any changes to the URL of any tab.
  chrome.tabs.onUpdated.addListener(checkForValidUrl);