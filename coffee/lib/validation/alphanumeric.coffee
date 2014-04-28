FieldValidator = require('./index').FieldValidator

class AlphanumericValidator extends FieldValidator
  constructor: (field) ->
    @errorMessage = "Field \"{{field}}\" should be valid alphanumeric "

  doValidate:(data)->
    data.match(/^\w+$/) != null

module.exports = AlphanumericValidator