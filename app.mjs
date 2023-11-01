/* Auth to spotify  */

// import {CLIENT_ID,SPOTIFY_AUTH_ENDPOINT,REDIRECT_URL_POST_LOGIN,SCOPES_URL_PARAM} from './secret.js' ;
CLIENT_ID=require('./secret.js');
SPOTIFY_AUTH_ENDPOINT=require('./secret.js');
REDIRECT_URL_POST_LOGIN=require('./secret.js');
SCOPES_URL_PARAM=require('./secret.js');


// const CLIENT_ID="";
// const SPOTIFY_AUTH_ENDPOINT="https://accounts.spotify.com/authorize";
// const REDIRECT_URL_POST_LOGIN="http://127.0.0.1:5500/PostLogin.html";
// const SPACE_DELIMITER = "%20";

// const SCOPES = [
//     "user-read-currently-playing",
//     "user-read-playback-state",
//     "playlist-read-private",

//   ];

// const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

function getReturedParamsFromUrl( hash){
    const stringAfterHasing= hash.substring(1);
    const paramsURL=stringAfterHasing.split('&');
    const paramsSplitUp= paramsURL.reduce((accumulator,currentvalue)=>{
        // console.log(currentvalue);
        const[key,value]=currentvalue.split('=');
        accumulator[key]=value;
        return accumulator;

    },{});

    return paramsSplitUp;
};

function WebApp(){
   
    if (window.location.hash) {
        const { access_token, expires_in, token_type } =
          getReturedParamsFromUrl(window.location.hash);
  
        localStorage.clear();
  
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("p", expires_in);
      }
    };


function login() {
    console.log("Login initiated")
    window.location=`${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_POST_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
 

    // if (localStorage.getItem("accessToken") && localStorage.getItem("tokenType") && localStorage.getItem("expireIn")){
    //     window.location.href="./PostLogin.html"
    // }
    // else {
    //     console.log("error 404")
    // }
    console.log("Getting accessToken from local storage",localStorage.getItem("accessToken"))
    console.log("Getting tokenType from local storage",localStorage.getItem("tokenType"))
    console.log("Getting accessexpiresIn from local storage",localStorage.getItem("expiresIn"))
    };
access_token=localStorage.getItem("accessToken")
tokentype=localStorage.getItem("tokenType")
expireIn=localStorage.getItem("expireIn")

const code = true;

if (code) {
    getData()
    
} 
else {
    console.log("code undefined")
    
}


async function getData() {
    access_token=localStorage.getItem("accessToken")
    const dataVar=document.getElementById("data")
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${access_token}` }
    });
    response=await result.json()
    console.log(response)
    console.log(typeof(response.display_name))
    const name="Welcome"+ " "+ response.display_name
    dataVar.innerText=name
    if (response.images[0]) {
        const profileImage = new Image(50, 50); 
        profileImage.src = response.images[0].url;
        profileImage.style.borderRadius =20+"px";
        document.getElementById("avatar").appendChild(profileImage);
        document.getElementById("imgUrl").innerText = response.images[0].url;
    }
}




WebApp()
console.log("Getting accessToken from local storage",localStorage.getItem("accessToken"))
console.log("Getting tokenType from local storage",localStorage.getItem("tokenType"))
console.log("Getting accessexpiresIn from local storage",localStorage.getItem("expiresIn"))


const getRefreshToken = async () => {

    // refresh token that has been previously stored
    const refreshToken = localStorage.getItem('refresh_token');
    const url = "https://accounts.spotify.com/api/token";
 
     const payload = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       body: new URLSearchParams({
         grant_type: 'refresh_token',
         refresh_token: refreshToken,
         client_id: CLIENT_ID
       }),
     }
     const body = await fetch(url, payload);
     const response= await body.json();
 
     localStorage.setItem('accessToken', response.accessToken);
     localStorage.setItem('refresh_token', response.refreshToken);
   }

// getRefreshToken()













