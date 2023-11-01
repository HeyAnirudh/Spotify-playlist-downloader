export const CLIENT_ID="90b988b203dd4b0f9a9095e18906016f";
export const SPOTIFY_AUTH_ENDPOINT="https://accounts.spotify.com/authorize";
export const REDIRECT_URL_POST_LOGIN="http://127.0.0.1:5500/PostLogin.html";
export const SPACE_DELIMITER = "%20";

export const SCOPES = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
    ];
export const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);




