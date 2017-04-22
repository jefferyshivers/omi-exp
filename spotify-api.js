var Spotify = require('machinepack-spotify');

// Get access token to use with requests to Spotify Web API.
Spotify.getAccessToken({
clientId: 'dc597c350ec3414a8ce0db6feec91e89',
clientSecret: 'e119cd904c594580a3544225d73bc9de',
}).exec({
// An unexpected error occurred.
error: function (err) {
  console.log("no good!!!");
},
// OK.
success: function () {
  console.log("woohooo!!!");

},
});


$.ajax({
        url: 'https://api.spotify.com/v1/audio-analysis/{06AKEBrKUckW0KREUWRnvT}',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer BQCF3Sq0PEba47j6oH51kUtYVzQ5g2Wb1FKZaMvZoty2tE5dZtF_rKVrGeNHJjgnVk8-SJjDh7No0rBzIbUcfjA_Idg2bflm7NTRmxNnIwDN4NNx4SCM3Q3ZWksx37v15W1sQMUedlI8j6WU")
        },
        error: function (err) {
          console.log("this did not work");
        },
        success: function(data){
            //alert(data);
            console.log("This worked!!!!!");
            //process the JSON data etc
        }
})
