chrome.action.onClicked.addListener(async (tab) => {
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
      await chrome.tabs.sendMessage(tab.id, { action: "startAutoUnfollow" });
    } catch (err) {
      console.error("Failed to start auto unfollow:", err);
    }
  });
  