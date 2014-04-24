class State
  constructor: (name) ->
    @name = name;

  getName: ()->
    @name

  setLogger: (logger)->
    

  setAction: (action)->
    @action = action;

  enter: (data, callback)->
    callback('undefined_action',data) unless @action?
    @action.exec(data, callback);

module.exports = State;