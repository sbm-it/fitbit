console.log('sbmFB.js loaded');

(function(){
    fb = {}
    fb.connect=function(scopes){
        scopes = scopes || ""  // defayl is empty string
        fb.url='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22834T&redirect_uri='+encodeURIComponent((location.origin+location.pathname).slice(0,-1))+'&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'
        window.open(fb.url)

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
        4
    }
    //
})()


