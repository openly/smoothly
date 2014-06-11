var DBCache = require('../../src/lib/cache/dbcache.js')
var async = require('async')


var dbcache = new DBCache('mongodb://localhost:27017/', 'test');

var calls = [
	
	function(callback){
		dbcache.set("myKey", "myval2", 4, function(err, obj){
			callback();
		})
	},

	function(callback){
		dbcache.get( 'myKey', function(err, obj){
			console.log("get before 3 seconds ", obj)
		callback();
		})
	},

	function(callback){
		dbcache.set("myKey", "myval3", 4, function(err, obj){
			callback();
		})
	},

	function(callback){	
		dbcache.get( 'myKey', function(err, obj){
			console.log("get updated key before 3 seconds ", obj)
		callback();
		})
	},

	function(callback){
		setTimeout(function(){
			dbcache.get( 'myKey', function(err, obj){
				console.log("get after 1 seconds ", obj)
				callback();
			})
		}, 1000);
	},

	function(callback){
		setTimeout(function(){
			dbcache.get( 'myKey', function(err, obj){
				console.log("get after 2 seconds ", obj)
				callback();
			})
		}, 2000);
	},

	function(callback){
		setTimeout(function(){
			dbcache.get( 'myKey', function(err, obj){
				console.log("get after 3 seconds ", obj)
				callback();
			})
		}, 3000);
	}
];

async.series(calls,function(){
})

