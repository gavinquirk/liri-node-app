
// Variables for npm use
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

// Conditionals to listen for user command
if (process.argv[2] === 'my-tweets') {
    myTweets()
} else if (process.argv[2] === 'spotify-this-song') {
    spotifyThisSong(process.argv[3])
} else if (process.argv[2] === 'movie-this') {
    movieThis(process.argv[3])
} else if (process.argv[2] === 'do-what-it-says') {
    doWhatItSays()
}

// My Tweets Function
function myTweets() {
    var params = { screen_name: 'gqtw10' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) {
            console.log('Error Occurred: ' + error)
        } else {
            for (var i = 0; i < tweets.length && i < 20; i++) { //SET AMOUNT OF TWEETS
                console.log(tweets[i].created_at)
                console.log(tweets[i].text)
            }
        }
    })
}

// Spotify This Song Function
function spotifyThisSong(songQuery) {
    spotify.search({ type: 'track', query: songQuery, limit: '1' }, function (error, data) {
        if (error) {
            console.log('Error Occurred: ' + error);
        } else {
            console.log('Artist Name: ' + data.tracks.items[0].artists[0].name); //artist name
            console.log('Song Name: ' + data.tracks.items[0].name); //song name
            console.log('Album Name: ' + data.tracks.items[0].album.name) //album name
            console.log('Preview URL: ' + data.tracks.items[0].preview_url); //preview url
        }
    })
}

// Movie This Function
function movieThis(movieQuery) {
    var request = require('request')
    request('https://www.omdbapi.com/?t=' + movieQuery + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        if (error) {
            console.log('Error Occurred: ' + error)
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

// Do What It Says Function
function doWhatItSays() {
    var filename = 'random.txt'
    fs.readFile(filename, 'utf8', function (error, data) {
        if (error) {
            console.log(error)
        } else {
            var instructions = data.split(',')
            var command = instructions[0]
            var query = instructions[1]
            if (command === 'my-tweets') {
                myTweets()
            } else if (command === 'spotify-this-song') {
                spotifyThisSong(query)
            } else if (command === 'movie-this') {
                movieThis(query)
            }
        }
    })
}