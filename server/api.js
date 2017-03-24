var request = require('superagent')

var api = "https://mager-spotify-web.p.mashape.com/lookup/1/.json"
vra artist = "https://api.spotify.com/v1/artists/" + id

function apiDetails(callback){
  request.get(api)
    .then( (res) => {
      callback(res.body)
    })
    .catch( (err) => {
      console.log(err);
    })
}

apiDetails( (res) => {
  console.log("!")
})

module.exports = apiDetails
