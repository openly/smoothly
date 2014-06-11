# This class just passes the arguments to the model. But it is important to have this class to have a 
# Single interface for all the databases say MySQL etc.
DBInterface = require '../../../../src/lib/db/interface.js'

class MongodbInterface extends DBInterface

	constructor : (schema) ->
		@model = schema.getModel()

	create : (data, cb) ->
		@model(data).save cb

	readOne : (criteria, cb) ->
		@model.findOne criteria, cb

	readAll : (criteria, cb) ->
		@model.find criteria, cb

	update : (criteria, data, options, cb) ->
		@model.findOneAndUpdate criteria, data, options, cb

	delete : (criteria, cb) ->
		@model.find(criteria).remove cb

module.exports = MongodbInterface
