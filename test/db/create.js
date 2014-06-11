var MongoDBBackend = require('../../src/lib/db/mongodb');
var DBInterface = require('../../src/lib/db/mongodb/db-interface.js');
var DBSchema =  require('../../src/lib/db/mongodb/schema.js');
var async = require('async')
var dbBackend = new MongoDBBackend('mongodb://localhost:27017/', 'test') 

var someSchema = new DBSchema(dbBackend, 'Something', {
  'name'  : String,
  'email' : String
});

var dbInterface = new DBInterface(someSchema);
var newRecordId;



var calls = [
	
	function(callback){
		dbInterface.create({
		  "name":"testData",
		  "email":"testData@testData.com"
		},function(e, newData){
			newRecordId = newData._id;
		  console.log(newData._id);
		  callback();
		})
	},

	function(callback){
		dbInterface.readOne({"name":"testData"}, function(err, obj){
			console.log(err)
			console.log(obj)
			callback();
		})
	},

	function(callback){
		dbInterface.readAll({"name":"testData"}, function(err, obj){
			console.log(err)
			console.log(obj)
			callback();
		})
	},

	function(callback){
		dbInterface.update ({"name": "testData"}, {"name": "testData_modefied"}, function(err, obj){
			console.log(err)
			console.log(obj)
			callback();
		})
	},

	function(callback){
		dbInterface['delete']({"name": "testData_modefied"}).remove(function(err, obj){
			console.log(err)
			console.log(obj)
			callback();
		})
	}
];

async.series(calls,function(){
})