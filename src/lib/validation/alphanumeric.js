// Generated by CoffeeScript 1.7.1
var AlphanumericValidator, FieldValidator,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FieldValidator = require('./index').FieldValidator;

AlphanumericValidator = (function(_super) {
  __extends(AlphanumericValidator, _super);

  function AlphanumericValidator(field) {
    this.errorMessage = "Field \"{{field}}\" should be valid alphanumeric ";
  }

  AlphanumericValidator.prototype.doValidate = function(data) {
    return data.match(/^\w+$/) !== null;
  };

  return AlphanumericValidator;

})(FieldValidator);

module.exports = AlphanumericValidator;