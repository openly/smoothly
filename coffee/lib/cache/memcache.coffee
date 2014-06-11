Memcached = require 'memcached'

class Memcache

	constructor: (memcacheServerUrl, options) ->
		@memcached = new Memcached(memcacheServerUrl, options);

	get : (key,callback) ->
		@memcached.get key, callback

	set: (key, callback) =>
		cb = (val, ttl, innerCallback) =>
			@memcached.set key, val, ttl, innerCallback
		callback cb

module.exports = Memcache