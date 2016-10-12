console.log('sbmFB.js loaded');

(function(){
    var fb = {}
    fb.connect=function(scopes){
        scopes = scopes || ""  // defayl is empty string
        url='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22834T&redirect_uri='+encodeURIComponent((location.origin+location.pathname).slice(0,-1))+'&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'
        4

    }

    // ini
    fb.connect()
})()


