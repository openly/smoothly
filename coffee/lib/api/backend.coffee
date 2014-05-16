restify = require 'restify'

class APIBackend
  constructor: (baseURI) ->
    @client = restify.createJSONClient({url: baseURI})

  get: (path, callback)->
    @client.get path, (e, req, res, obj)->
      callback(e, obj)

  post: (path, params, callback)->
    @client.post path, params, (e, req, res, obj)->
      callback(e, obj)
      
  put: (path, params, callback)->
    @client.put path, params, (e, req, res, obj)->
      callback(e, obj)

  delete: (path, callback)->
    @client.delete path, (e, req, res, obj)->
      callback(e, obj)

  head: (path, callback)->
    @client.head path, (e, req, res, obj)->
      callback(e, obj)

module.exports = APIBackend