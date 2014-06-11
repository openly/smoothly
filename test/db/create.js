var MongoDBBackend = require('../../src/lib/db/mongodb');
var DBInterface = require('../../src/lib/db/mongodb/mongodb-interface.js');
var DBSchema =  require('../../src/lib/db/mongodb/schema.js');
var dbBackend = new MongoDBBackend('mongodb://localhost:27017/', 'test') 

var async = require('async')

var someSchema = new DBSchema(dbBackend, 'Something', {
  'name'  : String,
  'email' : String
});

var dbInterface = new DBInterface(someSchema);

dbInterface.create({
  "name":"testData",
  "email":"testData@testData.com"
},function(e, newData){
  console.log(newData._id);
})
