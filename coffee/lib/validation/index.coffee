objval = require '../util/objval'
mustache = require 'mustache'

class Validator
  constructor: () ->
    @errorMessage = "The data is not valid";
  
  setErrorMessage: (errorMessage)->
    @errorMessage = errorMessage;

  validate: (data)->
    throw new Error('validate must be implemented by the subclass of Validator');

  getError: (field)->
    mustache.render(@errorMessage,{field: field});

class FieldValidator extends Validator
  constructor: () ->
    @errorMessage = "Field #{@field} is not valid";

  validate: (data)->
    @doValidate(data[0])
  
  doValidate: (data)->
    throw new Error('Do validate must be implemented by the subclass of FieldValidator');

class GroupValidator extends Validator
  constructor: () ->
    @errorMessage = "Data is not valid";


class ValidationManager
  constructor: () ->
    @validators = {}

  addValidator: (field, validator)->
    @validators[field] = [] unless @validators[field]?
    @validators[field].push(validator)

  validate: (data)->
    @errors = []
    for field,fieldValidators of @validators
      
      fields = field.split /\,/
      validatorData = (objval(data, fld.trim()) for fld in fields)
      
      fieldValidationFailed = false

      for fieldValidator in fieldValidators
        if fieldValidationFailed isnt true
          res = fieldValidator.validate(validatorData)
          if res is false
            fieldValidationFailed = true
            @errors.push(fieldValidator.getError(field))

    return @errors.length < 1

  getErrors: ()->
    @errors

module.exports = ValidationManager
module.exports.Validator = Validator;
module.exports.FieldValidator = FieldValidator;
module.exports.GroupValidator = GroupValidator;