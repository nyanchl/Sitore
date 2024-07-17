import axios from 'axios'

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

    if (message.action === "addInNotion") {
        const token = import.meta.env.VITE_NOTION_TOKEN
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28"
        }
        axios.get('https://api.notion.com/v1/databases/9344c853e4cd4a7b9db8d3a8c7e6bcae?v=73bf70c277a647fdafb5f052256308b6', { headers: headers })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error)
        })
    }
});