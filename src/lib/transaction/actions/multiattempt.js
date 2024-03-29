// Generated by CoffeeScript 1.7.1
(function() {
  var Action, MultiAttemptAction, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Action = require('../action');

  _ = require('underscore');

  MultiAttemptAction = (function(_super) {
    __extends(MultiAttemptAction, _super);

    function MultiAttemptAction(action, failStatuses, maxAttempts) {
      this.action = action;
      this.failStatuses = failStatuses instanceof Array ? failStatuses : [failStatuses];
      this.maxAttempts = maxAttempts;
      this.noAttempts = 0;
    }

    MultiAttemptAction.prototype.onExec = function(data, callback) {
      var curStatus;
      curStatus = '';
      this.noAttempts = this.noAttempts + 1;
      console.log("Attempt #" + this.noAttempts + " of " + this.maxAttempts);
      return this.action.exec(data, (function(_this) {
        return function(status, newData) {
          var intersect, statuses;
          statuses = status instanceof Array ? status : [status];
          intersect = _.intersection(statuses, _this.failStatuses);
          if (intersect.length < 1 || _this.noAttempts >= _this.maxAttempts) {
            return callback(status, newData);
          } else {
            return _this.onExec(data, callback);
          }
        };
      })(this));
    };

    MultiAttemptAction.prototype.callAction = function() {};

    return MultiAttemptAction;

  })(Action);

  module.exports = MultiAttemptAction;

}).call(this);
