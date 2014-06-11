class DBInterface
  constructor: () ->
  

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