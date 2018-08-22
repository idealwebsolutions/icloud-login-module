'use strict'

var login = require('./index')

var credentials = {
  appleID: 'YOUR_APPLE_ID',
  password: 'YOUR_APPLE_PASSWORD'
}

// Login
login(credentials.appleID, credentials.password, {},
  function (err, session) {
    if (err) {
      return console.error(err)
    }
    console.log(session)
  }
)
