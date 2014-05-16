FieldValidator = require('./index').FieldValidator

class EmailValidator extends FieldValidator
  constructor: (field) ->
    @errorMessage = "Field \"{{field}}\" should be a valid email"

  doValidate:(data)->
    !data? or data.match(/\w+@\w+\.\w+/) != null

module.exports = EmailValidator