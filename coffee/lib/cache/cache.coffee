class Cache
	constructor: (dbHost, dbName) ->
		throw Error "Implementations shoud have the contructor to set up the Cache"

	set : (key, val, ttl, callback) ->
		throw Error "Implementations shoud have set to set up the Cache"

	get : (key,callback) ->
		throw Error "Implementations shoud have get to set up the Cache"

module.exports = Cache