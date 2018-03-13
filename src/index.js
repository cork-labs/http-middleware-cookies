'use strict';

const defaults = {
  domain: null,
  maxAge: null,
  secure: true
};

const cookies = function (config) {
  config = Object.assign({}, defaults, config);

  // -- middleware

  return function (req, res, next) {
    res.setSessionCookie = (name, value) => {
      res.cookie(name, value, { httpOnly: true, secure: config.secure, domain: config.domain });
    };

    res.setCookie = (name, value, maxAge) => {
      maxAge = maxAge || config.maxAge;
      res.cookie(name, value, { maxAge: maxAge, httpOnly: true, secure: config.secure, domain: config.domain });
    };

    res.unsetCookie = (name) => {
      res.cookie(name, null, { maxAge: 0, httpOnly: true, secure: config.secure, domain: config.domain });
    };

    next();
  };
};

module.exports = cookies;
