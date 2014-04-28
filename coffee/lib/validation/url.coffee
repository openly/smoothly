FieldValidator = require('./index').FieldValidator

class UrlValidator extends FieldValidator
  constructor: (field) ->
    @errorMessage = "Field \"{{field}}\" should be valid url "

  doValidate:(data)->
    data.match(/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i) != null

module.exports = UrlValidator