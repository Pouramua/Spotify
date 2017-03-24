import request from 'superagent'

var userUrl = 'http://localhost:3000/users'

export default {
  getUsers: getUsers
}

function getUsers (callback) {
  request
    .get(userUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}
