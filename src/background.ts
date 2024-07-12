chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("hello")
    console.log(activeInfo.tabId)
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        console.log(tab.url);
    });
});
