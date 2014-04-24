// Generated by CoffeeScript 1.7.1
var EqualValidator, GroupValidator,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GroupValidator = require('./index').GroupValidator;

EqualValidator = (function(_super) {
  __extends(EqualValidator, _super);

  function EqualValidator() {
    return EqualValidator.__super__.constructor.apply(this, arguments);
  }

  EqualValidator.prototype.validate = function(data) {
    return data.length > 1 && data[0] === data[1];
  };

  EqualValidator.prototype.getError = function(field) {
    this.errorMessage = "Fields {{{field}}} must be equal";
    return EqualValidator.__super__.getError.call(this, "\"" + field.split(/\,/).slice(0, 2).join('" and "') + "\"");
  };

  return EqualValidator;

})(GroupValidator);

module.exports = EqualValidator;
