'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;

const httpCookies = require('../src/index');

describe('httpCookies()', function () {
  it('should be a function', function () {
    expect(httpCookies).to.be.a('function');
  });

  describe('when invoked', function () {
    beforeEach(function () {
      this.config = {
        domain: 'foobar',
        maxAge: 42
      };
      this.middleware = httpCookies(this.config);
    });

    it('should return a middleware function', function () {
      expect(this.middleware).to.be.a('function');
      expect(this.middleware.length).to.equal(3);
    });

    describe('when the middleware function is invoked', function () {
      beforeEach(function () {
        this.req = {};
        this.res = {
          cookie: sinon.spy()
        };
        this.nextSpy = sinon.spy();
        this.middleware(this.req, this.res, this.nextSpy);
      });

      it('should invoke the next() argument', function () {
        expect(this.nextSpy).to.have.callCount(1);
      });

      it('should expose the "setSessionCookie" function in res', function () {
        expect(this.res.setSessionCookie).to.be.a('function');
      });

      it('should expose the "setSessionCookie" function with 2 arguments', function () {
        expect(this.res.setSessionCookie.length).to.equal(2);
      });

      it('should expose the "setCookie" function in res', function () {
        expect(this.res.setSessionCookie).to.be.a('function');
      });

      it('should expose the "setCookie" function with 3 arguments', function () {
        expect(this.res.setCookie.length).to.equal(3);
      });

      describe('when setSessionCookie() is invoked', function () {
        beforeEach(function () {
          this.res.setSessionCookie('name', 'value');
        });

        it('should invoke res.cookie()', function () {
          expect(this.res.cookie).to.have.callCount(1);
        });

        it('should forward the arguments and the configured domain to res.cookie()', function () {
          expect(this.res.cookie).to.have.been.calledWithExactly('name', 'value', {domain: this.config.domain, httpOnly: true});
        });
      });

      describe('when setCookie() is invoked', function () {
        beforeEach(function () {
          this.middleware(this.req, this.res, this.nextSpy);
          this.res.setCookie('name', 'value');
        });

        it('should invoke res.cookie()', function () {
          expect(this.res.cookie).to.have.callCount(1);
        });

        it('should forward the arguments, the configured maxAge, and the configured domain to res.cookie()', function () {
          expect(this.res.cookie).to.have.been.calledWithExactly('name', 'value', {domain: this.config.domain, maxAge: this.config.maxAge, httpOnly: true});
        });
      });

      describe('when setCookie() is invoked with a maxAge', function () {
        beforeEach(function () {
          this.maxAge = 33;
          this.middleware(this.req, this.res, this.nextSpy);
          this.res.setCookie('name', 'value', this.maxAge);
        });

        it('should invoke res.cookie()', function () {
          expect(this.res.cookie).to.have.callCount(1);
        });

        it('should forward the arguments, including maxAge, to res.cookie()', function () {
          expect(this.res.cookie).to.have.been.calledWithExactly('name', 'value', {domain: this.config.domain, maxAge: this.maxAge, httpOnly: true});
        });
      });
    });
  });
});
