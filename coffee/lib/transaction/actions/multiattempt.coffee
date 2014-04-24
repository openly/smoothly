Action = require '../action'
_ = require 'underscore'

class MultiAttemptAction extends Action
  constructor: (action, failStatuses, maxAttempts) ->
    @action = action
    @failStatuses = if failStatuses instanceof Array then failStatuses else [failStatuses];
    @maxAttempts = maxAttempts
    @noAttempts = 0;
  
  onExec: (data, callback)->
    curStatus = '';

    @noAttempts = @noAttempts + 1
    console.log "Attempt ##{@noAttempts} of #{@maxAttempts}"
    @action.exec data, (status, newData)=>
      statuses = if status instanceof Array then status else [status]

      intersect = _.intersection(statuses, @failStatuses);

      if intersect.length < 1 or @noAttempts >= @maxAttempts
        callback status, newData
      else
        @onExec data, callback

  callAction: ()->


module.exports = MultiAttemptAction