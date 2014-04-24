// Generated by CoffeeScript 1.7.1
var EmailValidator, FieldValidator,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FieldValidator = require('./index').FieldValidator;

EmailValidator = (function(_super) {
  __extends(EmailValidator, _super);

  function EmailValidator(field) {
    this.errorMessage = "Field \"{{field}}\" should be a valid email";
  }

  EmailValidator.prototype.doValidate = function(data) {
    return data.match(/\w+@\w+\.\w+/) !== null;
  };

  return EmailValidator;

})(FieldValidator);

module.exports = EmailValidator;