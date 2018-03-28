
require("dotenv").config()
var keys = require('./keys')
var Twitter = require('twitter')
var Spotify = require('node-spotify-api')
var request = require('request')
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var inq = require('inquirer')
var pmpt = inq.createPromptModule()
var fs = require('fs')




/* // TWITTER
if (process.argv[2] === 'my-tweets') {
    var params = { screen_name: 'gqtw10' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 3; i++) { //SET AMOUNT OF TWEETS
                console.log(tweets[i].text)
                console.log(tweets[i].created_at)
            }
        }
    })

    // SPOTIFY
} else if (process.argv[2] === 'spotify-this-song') {

    var userInput = process.argv[3]

    spotify.search({ type: 'track', query: userInput, limit: '1' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
        console.log('Artist Name: ' + data.tracks.items[0].artists[0].name); //artist name
        console.log('Song Name: ' + data.tracks.items[0].name); //song name
        console.log('Album Name: ' + data.tracks.items[0].album.name) //album name
        console.log('Preview URL: ' + data.tracks.items[0].preview_url); //preview url
        }
    })

    // OMDB
} else  */if (process.argv[3] === 'movie-this') {

    console.log('movieing this')
var movie = 'goodfellas'
var request = require('request')
request('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log(JSON.parse(body).Title)
})
}


// DO WHAT IT SAYS
// if (process.argv[2] === 'do-what-it-says') {
//     var filename = 'random.txt'
//     fs.readFile(filename, 'utf8', function (err, data) {
//         if (err) throw err
//         var instructions = data.split(',')
//         var command = instructions[0]
//         var target = instructions[1]
//         console.log(command)
//         console.log(target)
//     var query =
//         spotify.search({ type: 'track', query: userInput, limit: '1' }, function (err, data) {
//             if (err) {
//                 return console.log('Error occurred: ' + err);
//             }
//             console.log('Artist Name: ' + data.tracks.items[0].artists[0].name); //artist name
//             console.log('Song Name: ' + data.tracks.items[0].name); //song name
//             console.log('Album Name: ' + data.tracks.items[0].album.name) //album name
//             console.log('Preview URL: ' + data.tracks.items[0].preview_url); //preview url
//         })
//     })
// }
