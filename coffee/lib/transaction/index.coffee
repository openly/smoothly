_ = require 'underscore'
State = require './state'
Action = require './action'
uuid = require '../util/uuid'

class Transaction
  constructor: (name) ->
    @name = name;
    @states = [];
    @transitions = [];
    @currentState = 'start';

  setLogger: (logger)->
    @logger = logger;

  addState: (state)->
    @states.push(state);

  addTransition: (event, stateName)->
    @transitions.push({'event': event, 'state': stateName});

  exec: (data, callback)->
    @id = uuid();
    endState = new State('end');
    endAction = new Action;
    endAction.onExec = callback;
    endState.setAction endAction;
    @addState endState
    @addTransition 'end','end'
    @raiseEvent('start', data);

  raiseEvent: (event, data)->
    @logger.logTransition(@, event, data) if @logger?
    transition = @findEventTransition(event);

    return @raiseEvent('end', data) unless transition?;

    stateObj = @getState transition.state

    @currentState = stateObj

    throw new Error("State #{transition.state} has no object set.") unless stateObj?;

    stateObj.enter data, (status, newData) =>
      @logger.logStateStatus @, stateObj, status, newData if @logger?
      @raiseEvent("#{stateObj.getName()}.#{status}", newData) if typeof status is "string";
      @checkAndRaise(stateObj.getName(), status, newData) if status instanceof Array;

  checkAndRaise: (stateName, statuses, data)->
    selStatus = _.find statuses, (status)=>
      transition = @findEventTransition("#{stateName}.#{status}")
      transition?
    @raiseEvent "#{stateName}.#{selStatus}", data


  findEventTransition: (event)->
    _.find @transitions, (transition)->
      transition.event == event;

  getState: (name)->
    _.find @states,(state)->
      state.getName() == name;

module.exports = Transaction;
