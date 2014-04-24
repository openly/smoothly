class Action
  constructor: () ->
    
  onBeforeExec: (data, callback)->
    callback(null, data);

  onAfterExec: (data, callback)->
    callback(null, data);

  onExec: (data, callback)->
    throw new InvalidStateException('onExec is expected to be set in Action.');

  exec: (data, callback)->
    @onBeforeExec data, (e, onBeforeModifiedData)=>
      @onExec onBeforeModifiedData, (state, onExecModifiedData)=>
        onExecModifiedData ?= onBeforeModifiedData;
        @onAfterExec onExecModifiedData, (e, onAfterExecModifiedData)=>
          callback state, onAfterExecModifiedData


module.exports = Action;