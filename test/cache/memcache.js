var Memcache = require('../../src/lib/cache/memcache.js')
var async = require('async')

var memcacheURL = 'localhost:11211'
var memcacheOptions = {
	timeout : 3000,
	retries : 1
}
var ttl = 2;	

var memcache = new Memcache(memcacheURL, memcacheOptions, ttl);

var calls = [
	
	function(callback){
		memcache.set("some_key2", function(cb){
		  cb("some_val23", 2, function(err, obj){
		  	console.log("saving to cache", obj)
		  	callback();
		  });
		})
	},

	function(callback){
		memcache.get( 'some_key2', function(err, obj){
			console.log("value from cahce ", obj)
		callback();
		})
	},

	function(callback){
		setTimeout(function(){
			memcache.get( 'some_key2', function(err, obj){
				console.log("value from cahce after timeout", obj)
				callback();
			})
		}, 2000);
	}

];

async.series(calls,function(){
})