class Schema

	constructor: (dbBackend, @schemaName, @schema) ->
		@conn = dbBackend.registerSchema();
		@model = @conn.model(@schemaName, @schema)

	getModel : ()->
		@model

module.exports = Schema