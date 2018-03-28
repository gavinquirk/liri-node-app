
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




// TWITTER
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
} else if (process.argv[2] === 'movie-this') {
    var movieQuery = process.argv[3]
    var request = require('request')
    request('https://www.omdbapi.com/?t=' + movieQuery + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        if (error) {
            return console.log('Error occurred: ' + error)
        } else {
        var movie = JSON.parse(body)
        console.log('Title: ' + movie.Title)
        console.log('Release Year: ' + movie.Year)
        console.log('IMDB Rating: ' + movie.imdbRating)
        console.log('Rotten Tomatoes Rating: ' + movie.Ratings[1].Value)
        console.log('Country of Origin: ' + movie.Country)
        console.log('Language: ' + movie.Language)
        console.log('Plot: ' + movie.Plot)
        console.log('Actors: ' + movie.Actors)
        }
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
