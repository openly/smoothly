GroupValidator = require('./index').GroupValidator

class EqualValidator extends GroupValidator
  constructor:()->
    @errorMessage = "Fields {{{field}}} must be equal"

  validate:(data)->
    return data.length > 1 and data[0] == data[1]

  getError: (field)->
    super("\"" + field.split(/\,/)[0..1].join('" and "') + "\"")


module.exports = EqualValidator