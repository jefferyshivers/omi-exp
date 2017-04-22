var Spotify = require('machinepack-spotify');

// Get access token to use with requests to Spotify Web API.
Spotify.getAccessToken({
clientId: 'dc597c350ec3414a8ce0db6feec91e89',
clientSecret: 'e119cd904c594580a3544225d73bc9de',
}).exec({
// An unexpected error occurred.
error: function (err) {

},
// OK.
success: function () {

},
});
