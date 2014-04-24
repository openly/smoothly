Action = require '../action'
objval = require '../../util/objval'

class DataMaperAction extends Action
  constructor: (map) ->
    @map = map
  
  onExec: (data, callback)->
    callback('success', mapData(data, @map)) #doesnt fail


  mapData = (data, map)->
    retval = {};
    for key, srcKey of map
      retval[key] = mapData(data, srcKey) if typeof srcKey is 'object'
      retval[key] = objval(data, srcKey) if typeof srcKey is 'string'
    return retval

module.exports = DataMaperAction