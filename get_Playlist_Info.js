const token = 'BQBtG-B7rnjB6npALDPVMkEDVbmcH7dO6nvjkDkdZaheTFvWD9ODB83u-huvDicQbZE8qLw76d0WgpeDivOtbiiIPa9xB44H1CPXqfLhjspkIkj1btTKhG9QpJugWrhXFi8_ckYgdz0TIY3Xwkamxhs3Ee4p_px8y78kTAkK8gBbE6ncibj2HBZ_D4gXhyf8XnZ26BoFGb51k26W_4SNfSrOn4fmSk6SsFGFHGehIdxoqzVIESqf-pDcKrj1hZ-6pOUqrsmCgRrHium2BXd-30FceDv3';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

async function start(){
const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
  }

start()