'use strict'

function Session (cookies, session) {
  if (!(this instanceof Session)) {
    return new Session(cookies, session)
  }

  this.cookies = cookies
  this.session = session

  Object.defineProperty(this, 'cookies', {
    value: this.cookies,
    writable: true,
    enumerable: true
  })

  Object.defineProperty(this, 'session', {
    value: this.session,
    writable: false,
    enumerable: true
  })
}

module.exports = Session
