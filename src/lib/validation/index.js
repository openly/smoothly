// Generated by CoffeeScript 1.7.1
var FieldValidator, GroupValidator, ValidationManager, Validator, mustache, objval,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

objval = require('../util/objval');

mustache = require('mustache');

Validator = (function() {
  function Validator() {
    this.errorMessage = "The data is not valid";
  }

  Validator.prototype.setErrorMessage = function(errorMessage) {
    return this.errorMessage = errorMessage;
  };

  Validator.prototype.validate = function(data) {
    throw new Error('validate must be implemented by the subclass of Validator');
  };

  Validator.prototype.getError = function(field) {
    return mustache.render(this.errorMessage, {
      field: field
    });
  };

  return Validator;

})();

FieldValidator = (function(_super) {
  __extends(FieldValidator, _super);

  function FieldValidator() {
    this.errorMessage = "Field " + this.field + " is not valid";
  }

  FieldValidator.prototype.validate = function(data) {
    return this.doValidate(data[0]);
  };

  FieldValidator.prototype.doValidate = function(data) {
    throw new Error('Do validate must be implemented by the subclass of FieldValidator');
  };

  return FieldValidator;

})(Validator);

GroupValidator = (function(_super) {
  __extends(GroupValidator, _super);

  function GroupValidator() {
    this.errorMessage = "Data is not valid";
  }

  return GroupValidator;

})(Validator);

ValidationManager = (function() {
  function ValidationManager() {
    this.validators = {};
  }

  ValidationManager.prototype.addValidator = function(field, validator) {
    if (this.validators[field] == null) {
      this.validators[field] = [];
    }
    return this.validators[field].push(validator);
  };

  ValidationManager.prototype.validate = function(data) {
    var field, fieldValidationFailed, fieldValidator, fieldValidators, fields, fld, res, validatorData, _i, _len, _ref;
    this.errors = [];
    _ref = this.validators;
    for (field in _ref) {
      fieldValidators = _ref[field];
      fields = field.split(/\,/);
      validatorData = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = fields.length; _i < _len; _i++) {
          fld = fields[_i];
          _results.push(objval(data, fld.trim()));
        }
        return _results;
      })();
      fieldValidationFailed = false;
      for (_i = 0, _len = fieldValidators.length; _i < _len; _i++) {
        fieldValidator = fieldValidators[_i];
        if (fieldValidationFailed !== true) {
          res = fieldValidator.validate(validatorData);
          if (res === false) {
            fieldValidationFailed = true;
            this.errors.push(fieldValidator.getError(field));
          }
        }
      }
    }
    return this.errors.length < 1;
  };

  ValidationManager.prototype.getErrors = function() {
    return this.errors;
  };

  return ValidationManager;

})();

module.exports = ValidationManager;

module.exports.Validator = Validator;

module.exports.FieldValidator = FieldValidator;

module.exports.GroupValidator = GroupValidator;