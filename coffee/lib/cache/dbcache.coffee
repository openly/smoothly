mongodb = require '../db/mongodb'
DBSchema = require '../db/mongodb/schema.js'
DBInterface = require '../db/mongodb/db-interface.js'

class DBCache

	constructor: (DBUrl, DBName) ->
		db = new mongodb(DBUrl, DBName)
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

	# set : (key, val, ttl, callback) ->
	# 	@removeEntryIfExists(key).then ->
	# 		@createEntry(key, val).then ->
	# 			@createCacheDeleteTimer(key, ttl)

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