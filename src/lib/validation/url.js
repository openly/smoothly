// Generated by CoffeeScript 1.7.1
var FieldValidator, UrlValidator,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

FieldValidator = require('./index').FieldValidator;

UrlValidator = (function(_super) {
  __extends(UrlValidator, _super);

  function UrlValidator(field) {
    this.errorMessage = "Field \"{{field}}\" should be valid url ";
  }

  UrlValidator.prototype.doValidate = function(data) {
    return data.match(/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i) !== null;
  };

  return UrlValidator;

})(FieldValidator);

module.exports = UrlValidator;
