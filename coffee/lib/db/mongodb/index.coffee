mongoose = require 'mongoose'
Database = require '../../db'

class MongoDB extends Database

	constructor:(@dbHost, @dbName) ->
		@conn = mongoose.createConnection(@dbHost + @dbName);
		@conn.Schema = mongoose.Schema

	registerSchema: ()->
		@conn

module.exports = MongoDB