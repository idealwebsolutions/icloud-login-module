'use strict'

var SETUP_ENDPOINT = 'https://setup.icloud.com/setup/ws/1'

var format = require('util').format
var uuid = require('uuid')
var needle = require('needle')
var fastfall = require('fastfall')()
var randomUA = require('random-ua')

var Session = require('./lib/session')

// Exposes the 'login' functionality
module.exports = function (appleId, password, options, callback) {
  // Default options = twoStepAuthentication: false, extendedLogin: false
  options = options || {}
  var id = {}

  needle.defaults({
    user_agent: randomUA.generate()
  })

  fastfall([
    // Grab the current build version
    function (callback) {
      needle.get('https://www.icloud.com/system/cloudos/current/version.json', function (err, res) {
        return err || res.statusCode !== 200 ? callback(err, null) : callback(null, res.body)
      })
    },
    // Attempt to login with uuid
    function (version, callback) {
      id.uuid = uuid.v4()
      id.build = version.buildNumber || '16A84'

      var body = { apple_id: appleId, password: password, extended_login: false }
      var options = {
        headers: {
          'Origin': 'https://www.icloud.com'
        },
        json: true
      }

      var url = format('%s/login?clientBuildNumber=%s&clientId=%s', SETUP_ENDPOINT, id.build, id.uuid)

      needle.post(url, body, options, function (err, res) {
        return err ? callback(err, null, null) : callback(null, res.body, res.cookies)
      })
    }
  ],
    function (err, session, cookies) {
      if (!err && session && cookies) {
        session.id = id
        return callback(null, Session(cookies, session))
      } else {
        return callback(err, null)
      }
    })
}
