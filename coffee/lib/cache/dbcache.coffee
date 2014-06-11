mongodb = require '../db/mongodb'
DBSchema = require '../db/mongodb/schema.js'
DBInterface = require '../db/mongodb/mongodb-interface.js'
Cache = require './cache.js'

class DBCache extends Cache

	constructor: (dbHost, dbName) ->
		db = new mongodb(dbHost, dbName)
		@deleteTimers = {}
		dbCacheSchema = new DBSchema db, "db_cache", 
		'key'  :
			type	: String
			index	: true
			unique	: true
		'val' : String
		@cacheInterface = new DBInterface(dbCacheSchema)

	removeEntryIfExists: (key, callback)->
		clearTimeout(@deleteTimers[key])
		@cacheInterface.delete { "key" : key }, (err, obj)->
			callback(err, obj)

	set : (key, val, ttl, callback) ->
		@removeEntryIfExists key, (err, obj)=>
			@createEntry key, val, (err, obj)=>
				@createCacheDeleteTimer key, ttl
				callback(err, obj) 

	createEntry: (key, val, callback)->
		@cacheInterface.create { "key" : key, "val" : val }, callback

	createCacheDeleteTimer: (key, ttl)->
		@deleteTimers[key] = setTimeout ()=>
			@removeEntryIfExists key, (err, obj)=>
		, ttl * 1000

	get : (key,callback) ->
		@cacheInterface.readOne 
			"key" : key 
			(err, obj)->
				callback err, obj

module.exports = DBCache