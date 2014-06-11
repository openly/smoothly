// Generated by CoffeeScript 1.7.1
var DBInterface;

DBInterface = (function() {
  function DBInterface(schema) {
    this.model = schema.getModel();
  }

  DBInterface.prototype.create = function(data, cb) {
    return this.model(data).save(cb);
  };

  DBInterface.prototype.readOne = function(criteria, cb) {
    return this.model.findOne(criteria, cb);
  };

  DBInterface.prototype.readAll = function(criteria, cb) {
    return this.model.find(criteria, cb);
  };

  DBInterface.prototype.update = function(criteria, data, options, cb) {
    return this.model.findOneAndUpdate(criteria, data, options, cb);
  };

  DBInterface.prototype["delete"] = function(criteria, cb) {
    return this.model.find(criteria).remove(cb);
  };

  return DBInterface;

})();

module.exports = DBInterface;