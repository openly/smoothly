Action = require '../action'
objval = require '../../util/objval'
setobjval = require '../../util/setobjval'
async = require 'async'

class IterateAction extends Action
  constructor: (action, dataKey) ->
    @action = action
    @dataKey = dataKey
  
  onExec: (data, callback)->
    targetData = objval(data, @dataKey);
    callback ['no_action','success'],data unless targetData instanceof Array

    async.map( 
      targetData,
      (item, callback)=>
        @action.exec item, (status, newItem)->
          callback null, newItem, 
      (e, results)=>
        callback 'success', setobjval data, @dataKey, results
    )

module.exports = IterateAction