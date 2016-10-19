console.log('sbmFB.js loaded');

(function(){
    fb = {}
    
    fb.connect=function(scopes){
        scopes = scopes || ""  // defayl is empty string
        fb.url='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22834T&redirect_uri='+encodeURIComponent((location.origin+location.pathname).slice(0,-1))+'&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'
        window.open(fb.url)

    }

    fb.UI=function(div){ // assemble user interface
        if(typeof(div)=='string'){
            div=document.getElementById(div)
        }
        if(typeof(div)=='string'){
            throw('target division for UI assembly not found')
        }
        // UI div found
        h='<h3>[<a href="https://github.com/sbm-it/fitbit" target="_blank">source</a>] FitBit data:</h3>'
        h+='<li id="accessToken"> Assess Token: <span style="color:orange">'+fb.parms.access_token+'</span> </li>'
        location.hash="" // clear token from hash
        


        div.innerHTML=h
        4
        4

    }



    // ini
    if(location.hash.length==0){
        fb.connect()
    }else{
        var parms=location.hash.slice(1).split('&')
        fb.parms={}
        parms.forEach(function(p){
            p = p.split('=')
            fb.parms[p[0]]=p[1]
        })
        //location.hash="" // hide login parms
        if(fb.parms.access_token){ // if logged in, assemble UI
            if(document.getElementById('appSpace')){
                fb.UI(appSpace)
            }
        }
    }
    //
})()


