
require("dotenv").config()
var keys = require('./keys')
var Twitter = require('twitter')
var Spotify = require('node-spotify-api')
var request = require('request')
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var inq = require('inquirer')
var pmpt = inq.createPromptModule()



// TWITTER
// if (process.argv[2] === 'my-tweets') {
//     var params = { screen_name: 'gqtw10' };
//     client.get('statuses/user_timeline', params, function (error, tweets, response) {
//         if (!error) {
//             for (var i = 0; i < 20; i++) {
//                 console.log(tweets[i].created_at)
//                 console.log(tweets[i].text)

//             }

//         }
//     })
// }

// SPOTIFY
spotify.search({ type: 'track', query: 'Airbag', limit: '1' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }


    console.log('Artist Name: ' + data.tracks.items[0].artists[0].name); //artist name
    console.log('Song Name: ' + data.tracks.items[0].name); //song name
    console.log('Album Name: ' + data.tracks.items[0].album.name) //album name
    console.log('Preview URL: ' + data.tracks.items[0].preview_url); //preview url

})

// OMDB
// var request = require('request');
// request('http://www.omdbapi.com/?apikey=trilogy&s=goodfellas', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
// //   console.log(response)
//   console.log(JSON.parse(body))
// });