'use strict';

const defaults = {
  domain: null,
  maxAge: null
};

const cookies = function (config) {
  config = Object.assign({}, defaults, config);

  // -- middleware

  return function (req, res, next) {
    res.setSessionCookie = (name, value) => {
      res.cookie(name, value, { httpOnly: true, domain: config.domain });
    };

    res.setCookie = (name, value, maxAge) => {
      maxAge = maxAge || config.maxAge;
      res.cookie(name, value, { maxAge: maxAge, httpOnly: true, domain: config.domain });
    };

    next();
  };
};

module.exports = cookies;
