FieldValidator = require('./index').FieldValidator

class IpValidator extends FieldValidator
  constructor: (field) ->
    @errorMessage = "Field \"{{field}}\" should be valid IP "

  doValidate:(data)->
    data.match(/^\d\d?\d?\.\d\d?\d?\.\d\d?\d?\.\d\d?\d?$/) != null

module.exports = IpValidator