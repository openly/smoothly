var Memcache = require('../../src/lib/cache/memcache.js')
var async = require('async')

var memcacheURL = 'localhost:11211'
var memcacheOptions = {
	timeout : 3000,
	retries : 1
}

var memcache = new Memcache(memcacheURL, memcacheOptions);

var calls = [
	
	function(callback){
		memcache.set("some_key", "some_val", 2, function(err, obj){
		  	console.log("saving to cache", obj)
		  	callback()
		})
	},

	function(callback){
		memcache.get( 'some_key', function(err, obj){
			console.log("value from cahce ", obj)
		callback();
		})
	},

	function(callback){
		setTimeout(function(){
			memcache.get( 'some_key', function(err, obj){
				console.log("value from cahce after timeout", obj)
				callback();
			})
		}, 2000);
	}

];

async.series(calls,function(){
})