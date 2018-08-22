# icloud-login-module
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

_NO LONGER MAINTAINED / ARCHIVED ONLY FOR HISTORICAL PURPOSES_

Creates a new iCloud session

## Install
Since this is not yet available on npm, you can install the module by following
these steps:

1. Clone this repository

		$ git clone https://github.com/idealwebsolutions/icloud-login-module.git

2. Install dependencies

    $ npm install

## Example

See `example.js`

## API
### login(appleId, password, [options], callback)
This function will attempt to login into icloud and create a new
session. It takes three parameters, `appleId`, `password`, `callback` and one
optional parameter `options`. `callback` will
return an error or session depending on result. The `options` parameter allows for an `extendedLogin`
(bool) key, and/or the option to specify the `twoStepAuthentication` (bool) key.
Currently neither options supported as of yet,
rather only specified to be included for future releases. See above an example.

## Bugs/Errors
Feel free to submit any errors or bugs that you may come across. Pull requests also are welcomed.

## TODO
- Support for Two Step Authentication
- Tests

## License
MIT
