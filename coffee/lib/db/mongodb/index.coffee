mongoose = require 'mongoose'

class MongoDB

	constructor:(DBUrl, DBName) ->
		@DBUrl 	= DBUrl
		@DBName = DBName

	createConnection: ()->
		conn = mongoose.createConnection('mongodb://localhost/test');
		conn.Schema = mongoose.Schema
		conn
		

module.exports = MongoDB

