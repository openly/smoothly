qs = require 'querystring'
APIRequestMethod = require './req_methods'
class APICall
  constructor: (backend, method, path) ->
    [@backend,@method, @path] = [backend, method, path];

  exec: (data, callback)->
    url = "#{@path}?#{qs.stringify(data.query)}";
    url = url.replace /\?$/, ''
    console.log "#{@method.toUpperCase()}: #{url}"
    getCall.call(@, url, data, callback) if @method is APIRequestMethod.GET
    postCall.call(@, url, data, callback) if @method is APIRequestMethod.POST
    putCall.call(@, url, data, callback) if @method is APIRequestMethod.PUT
    deleteCall.call(@, url, data, callback) if @method is APIRequestMethod.DELETE
    headCall.call(@, url, data, callback) if @method is APIRequestMethod.HEAD

  getCall = (url, data, callback)->
    @backend.get url, callback

  postCall = (url, data, callback)->
    @backend.post url, data.params, callback

  putCall = (url, data, callback)->
    @backend.put url, data.params, callback

  deleteCall = (url, data, callback)->
    @backend.delete url, callback

  headCall = (url, data, callback)->
    @backend.head url, callback

module.exports = APICall