import requests

from urllib.parse import urlencode
import base64
import webbrowser


client_id="90b988b203dd4b0f9a9095e18906016f"
client_secret="b09e2c8b183044e694284f679fd3b9c9"

auth_header={
    "client_id":client_id,
    "response_type":"code",
    "redirect_uri":"http://google.com/callback",
    "scope": "user-library-read"

}

p=webbrowser.open("https://accounts.spotify.com/authorize?" + urlencode(auth_header))



code="AQDjUaWJUaOsBftmLSDvlTPawc28YqWZJDeNTxjpQiLlS-TSQJYA031803khwatt1FNJKgPAtwzosG2F0P4D1Xs8Hb87G4T3LjySZ4nojDSriHsMyJ0cTtJ5GNrQCi9q-k1Al9tmmZ97Yv2qgZUprCkb4E9G3LsH_Hlg4H5Zrj9tih9ln_fe9mgFDEwq"


# encoded_credentials = base64.b64encode(client_id.encode() + b':' + client_secret.encode()).decode("utf-8")

# token_headers = {
#     "Authorization": "Basic " + encoded_credentials,
#     "Content-Type": "application/x-www-form-urlencoded"
# }

# token_data = {
#     "grant_type": "authorization_code",
#     "code": code,
#     "redirect_uri": "http:/google.com/callback"
# }

# r = requests.post("https://accounts.spotify.com/api/token", data=token_data, headers=token_headers)

# token = r.json()["access_token"]

# print(token)

# user_headers = {
#     "Authorization": "Bearer " + token,
#     "Content-Type": "application/json"
# }

# user_params = {
#     "limit": 50
# }

# user_tracks_response = requests.get("https://api.spotify.com/v1/me/tracks", params=user_params, headers=user_headers)

# print(user_tracks_response.json())