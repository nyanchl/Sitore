
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getLastAccessedUrl") {
        chrome.tabs.onActivated.addListener((activeInfo) => {
            console.log("hello")
            console.log(activeInfo.tabId)
            chrome.tabs.get(activeInfo.tabId, (tab) => {
                if (tab.url) {
                    sendResponse({ url: tab.url })
                } else {
                    sendResponse({ url: "" })
                }
            });
            return true;
        });
    }
});
