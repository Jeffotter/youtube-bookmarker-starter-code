(() => {
    let youtubeLeftControls, youtubePlayer; //One is going to be for accessing the player and one is going to be accessing for the controls
    let currentVideo = "";
    chrome.runtime.onMessage.addListener((obj,sender,response) => {
        const {type,value,videoId} = obj;
        
        if(type === 'NEW') {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });

    const newVideoLoaded = () => {
        const bookmarkBtnExists =document.getElementsByClassName("bookmark-btn")[0];

        if(!bookmarkBtnExists){
            const bookmarkBtn = document.createElements('img');

            bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");//THis sources the images 
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "Click to bookmark current timestamp";

            youtubeLeftControls = document.getElementsByClassName()

        }

    }

})();