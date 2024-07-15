
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getLastAccessedUrl") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const tab = tabs[0];
            if (tab) {
                sendResponse({ url: tab.url });
            } else {
                sendResponse({ url: null });
            }
        });
        return true;
    }
});
