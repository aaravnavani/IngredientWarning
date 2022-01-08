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


//tab.url.indexOf('google.com') > -1
// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the tabs url starts with "http://specificsite.com"...
    if (tab.url.indexOf('https://artofproblemsolving.com/') == 0) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
};
  
  // Listen for any changes to the URL of any tab.
  chrome.tabs.onUpdated.addListener(checkForValidUrl);
