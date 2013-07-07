/* TODO: Don't listen to this event, but a message from content.js */

function checkBlogTO(tabID, changeInfo, tabWindow) {
	if (tabWindow.url.indexOf('blogto.com') > -1)
		chrome.pageAction.show(tabID);
};

chrome.tabs.onUpdated.addListener(checkBlogTO);