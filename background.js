var browser_name  = function () {
    let userAgent = navigator.userAgent;

    if(userAgent.match(/chrome|chromium|crios/i)){
        browser_name = "chrome";
    } else if(userAgent.match(/firefox|fxios/i)){
        browser_name = "firefox";
    } else if(userAgent.match(/safari/i)){
        browser_name = "safari";

    } else if(userAgent.match(/opr\//i)){
        browser_name = "opera";

    } else if(userAgent.match(/edg/i)){
        browser_name = "edge";
    } else {
        browser_name ="Unidentified browser"
    }
}
browser_name.webNavigation.onCommitted.addListener(function(tab)) {
    
}

