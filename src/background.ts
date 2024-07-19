function addInNotion(title: string | undefined, url: string | undefined) {
    const token = import.meta.env.VITE_NOTION_TOKEN
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
    }
    const body = JSON.stringify({
        "parent": {"page_id": "16f6ceb11a8846b9b04f79431c0be5ca"},
        "properties": {
            "title": { "title": [{ "text": { "content": title } }] }
        },
        "children": [
            {
                "object": "block",
                "type": "bookmark",
                "bookmark": {
                    "url": url,
                    "caption": []
                }
            }
        ]
    });

    fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "addInNotion") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const tab = tabs[0];
            if (tab) {
                sendResponse({ url: tab.url });
                addInNotion(tab.title, tab.url);
            } else {
                sendResponse({ url: null });
            }
        });
        return true;
    }
});