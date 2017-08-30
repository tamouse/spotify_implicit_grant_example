const SPOTIFY_CLIENT_ID = '';
const RESPONSE_CALLBACK = '/loggedin.html';
const ORIGIN = window.location.origin;
const SPOTIFY_ENDPOINT = 'https://accounts.spotify.com/authorize';

var waitRetryLimit = 50;
var waitRetry = 0;
var loginWindow = null;

function WaitForSpotify() {
    if (waitRetry > waitRetryLimit) {
        // loginWindow.close();
        let msg = "Exceeded wait retry limit for spotify login";
        console.error(msg);
        alert(msg);
        return;
    }
    waitRetry++;
    if (window.spotifyEntries === null) {
        setTimeout(WaitForSpotify, 500)
    } else {
        loginWindow.close()
    }
}

function buildQueryString(params) {
    return Object.keys(params)
        .map(key => {
            return `${key}=${params[key]}`
        })
        .join('&')
}

function spotifyLoginUrl() {
    const queryString = buildQueryString({
        client_id: SPOTIFY_CLIENT_ID,
        response_type: 'token',
        redirect_uri: ORIGIN + RESPONSE_CALLBACK,
        state: randomString()
    });
    const uri = `${SPOTIFY_ENDPOINT}?${queryString}`;
    console.log("spotifyLoginUrl: ", uri);
    return uri;
}

function randomString() {
    return (Math.random() * Math.random()).toString(36).substring(2) +
        (Math.random() * Math.random()).toString(36).substring(2);
}

export default () => {
    window.spotifyEntries = null;
    loginWindow = window.open(spotifyLoginUrl(), 'Spotify Login',
        'width=200,height=300,resizable,scrollbars=yes,status=1');
    WaitForSpotify();
}

