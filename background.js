// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
});



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "performAction") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs.length > 0) {
                const currentURL = tabs[0].url;
                if(currentURL.toLowerCase().includes('amazon')) {
    chrome.runtime.sendMessage({ action: "changePopupContent" });
}
            }
        })
    }

    // Send a response back (if needed)
    sendResponse({ response: "Message processed successfully!" });
});
