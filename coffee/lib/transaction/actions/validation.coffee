Action = require '../action'
_ = require 'underscore'
ValidationManager = require('../../validation');

class ValidateAction extends Action
  constructor: () ->
    @validationManger = new ValidationManager
  
  add: (field, validator)->
    @validationManger.addValidator(field, validator)

  onExec: (data, callback)->
    res = @validationManger.validate(data);
    data.errors = [] unless (data.errors? and data.errors instanceof Array)
    (data.errors.push(err) for err in @validationManger.getErrors())
    callback (if res then "success" else "failed"), data

module.exports = ValidateAction