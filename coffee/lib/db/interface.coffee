
class DBInterface
  
  constructor: (schema) ->
    throw Error "Implementations shoud have the contructor to set up the DBInterface"

  create : (data, cb) ->
    throw Error "Implementations shoud have create to set up the DBInterface"

  read : (criteria, cb) ->
    throw Error "Implementations shoud have read to set up the DBInterface"

  readAll : (criteria, cb) ->
    throw Error "Implementations shoud have readAll to set up the DBInterface"

  update : (criteria, data, options, cb) ->
    throw Error "Implementations shoud have update to set up the DBInterface"
  
  delete : (criteria, cb) ->
    throw Error "Implementations shoud have delete to set up the DBInterface"

module.exports = DBInterface