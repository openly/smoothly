class Schema

	constructor: (dbBackend, @schemaName, @schema) ->
		@conn = dbBackend.createConnection();
		@model = @conn.model(@schemaName, @schema)

	getModel : ()->
		@model

module.exports = Schema 