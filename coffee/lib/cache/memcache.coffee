Memcached = require 'memcached'
Cache = require './cache.js'

class Memcache extends Cache

	constructor: (memcacheServerUrl, options) ->
		@memcached = new Memcached(memcacheServerUrl, options);

	get : (key,callback) ->
		@memcached.get key, callback

	set: (key, val, ttl, callback) =>
		@memcached.set key, val, ttl, callback

module.exports = Memcache