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

[Copyright (c) 2018 Cork Labs](http://cork-labs.mit-license.org/2018)
