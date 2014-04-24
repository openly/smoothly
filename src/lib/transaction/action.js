// Generated by CoffeeScript 1.7.1
var Action;

Action = (function() {
  function Action() {}

  Action.prototype.onBeforeExec = function(data, callback) {
    return callback(null, data);
  };

  Action.prototype.onAfterExec = function(data, callback) {
    return callback(null, data);
  };

  Action.prototype.onExec = function(data, callback) {
    throw new InvalidStateException('onExec is expected to be set in Action.');
  };

  Action.prototype.exec = function(data, callback) {
    return this.onBeforeExec(data, (function(_this) {
      return function(e, onBeforeModifiedData) {
        return _this.onExec(onBeforeModifiedData, function(state, onExecModifiedData) {
          if (onExecModifiedData == null) {
            onExecModifiedData = onBeforeModifiedData;
          }
          return _this.onAfterExec(onExecModifiedData, function(e, onAfterExecModifiedData) {
            return callback(state, onAfterExecModifiedData);
          });
        });
      };
    })(this));
  };

  return Action;

})();

module.exports = Action;