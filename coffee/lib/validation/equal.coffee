GroupValidator = require('./index').GroupValidator

class EqualValidator extends GroupValidator
  validate:(data)->
    return data.length > 1 and data[0] == data[1]

  getError: (field)->
    @errorMessage = "Fields {{{field}}} must be equal"
    super("\"" + field.split(/\,/)[0..1].join('" and "') + "\"")


module.exports = EqualValidator