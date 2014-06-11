mongoose = require 'mongoose'
Database = require '../../db'

class MongoDB extends Database

	constructor:(DBUrl, DBName) ->
		@DBUrl 	= DBUrl
		@DBName = DBName

	createConnection: ()->
		conn = mongoose.createConnection('mongodb://localhost/test');
		conn.Schema = mongoose.Schema
		conn
		

module.exports = MongoDB

