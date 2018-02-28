# HTTP Middleware Cookies

> Express middleware, exposes simple cookie related methods in `res`.


## Getting Started

```shell
npm install --save @cork-labs/http
```

```javascript
const httpCookies = require('@cork-labs/http-middleware-cookies');
app.use(httpCookies());

// in some route
app.get('/', (req, res, next) => {
  res.setCookie('name', 'value');
})
```


## Config

```javascript
httpCookies({ domain: 'example.com', maxAge: });
```

### domain (default: null)

All cookies set are valid for this domain.


### maxAge (default: null)

Default time to live (in seconds) for cookies set with `setCookie()`.

If no default is configured, `setCookie()` will act as `setSessionCookie()`

## API

### res.setCookie(name, value[, maxAge])

Sets a cookie valid for the provided `maxAge` (in seconds).

If no `maxAge` provided will use the one provided at configuration time.

### res.setSessionCookie(name, value)

Sets a cookie valid for the session only.


## Develop

```shell
# lint and fix
npm run lint

# run test suite
npm test

# lint and test
npm run build

# serve test coverage
npm run coverage

# publish a minor version
node_modules/.bin/npm-bump minor
```

### Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Check [CONTRIBUTING](./CONTRIBUTING) before submitting issues and PRs.


## Tools

- [npm-bump](https://www.npmjs.com/package/npm-bump)
- [chai](http://chaijs.com/api/)
- [sinon](http://sinonjs.org/)
- [sinon-chai](https://github.com/domenic/sinon-chai)


## [MIT License](LICENSE)

[Copyright (c) 2005 Cork Labs](http://cork-labs.mit-license.org/2015)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
