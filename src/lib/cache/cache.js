// Generated by CoffeeScript 1.7.1
var Cache;

Cache = (function() {
  function Cache(dbHost, dbName) {
    throw Error("Implementations shoud have the contructor to set up the Cache");
  }

  Cache.prototype.set = function(key, val, ttl, callback) {
    throw Error("Implementations shoud have set to set up the Cache");
  };

  Cache.prototype.get = function(key, callback) {
    throw Error("Implementations shoud have get to set up the Cache");
  };

  return Cache;

})();

module.exports = Cache;