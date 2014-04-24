FieldValidator = require('./index').FieldValidator

class RequiredValidator extends FieldValidator
  constructor: () ->
    @errorMessage = "Field \"{{field}}\" is required"

  doValidate:(data)->
    data? and data.match(/\w/) != null

module.exports = RequiredValidator