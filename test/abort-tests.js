var assert = require('better-assert');
var Promise2 = require('../');
function mkpromise(state, val, promise_timeout) {
  return new Promise2(function (resolve, reject, bindabort) {
    var tid = setTimeout(
      (state == 'resolve' ? resolve : reject).bind(this, val),promise_timeout);
    bindabort(clearTimeout.bind(this, tid));
  });
}

var _it = it;
describe('abort-tests', function () {
  describe('abort-before', function () {
    it('called abort and cleared timeout', function(done) {
      var promise = mkpromise('reject', 'Did not abort!', 1000);
      setTimeout(function() { promise.abort() }, 500);
      promise.catch(function(reason) {
        if(reason == Promise2.Aborted)
          done();
        else
          done(reason);
      });
    })
  })
  describe('abort-after', function () {
    it('abort has called after and did not effect timeout', function(done) {
      var promise = mkpromise('reject', '', 500);
      setTimeout(function() { promise.abort() }, 1000);
      promise.catch(function(reason) {
        if(reason == Promise2.Aborted)
          done('Did abort!');
        else
          done();
      });
    })
  })
})
