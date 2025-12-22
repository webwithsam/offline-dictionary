
chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{

    if(changeInfo.status === "complete"){
    // get the active tab
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        // Execute the script on the active tab
        chrome.scripting.executeScript({
            target:{tabId: tabs[0].id},
            files: ['./content/ndaniyacontent.js']
           
          
                                       })
    
                                                                    })
    }
})
    
     

 

