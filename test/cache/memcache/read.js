// Basic TTL
var CacheManager = new BasicCacheManger();
CacheManager.setTTL('10s');
var CacheBackend = new MemeCahcheBackend();
CacheManager.setBackend(CacheBackend);
CacheManager.set("some_key",function(cb){
  cb(null,"some_val");
})
console.log(CacheManager.get('some_key'));
setTimeout(function(){
  console.log(CacheManager.get('some_key'));
}, 11000);

// Basic TTL with preload
var CacheManager = new BasicCacheManger();
CacheManager.setTTL('10s');
CacheManager.setPreloadTime('1s');
var CacheBackend = new MemeCahcheBackend();
CacheManager.setBackend(CacheBackend);
var ft = true;

CacheManager.set("some_key",function(cb){
  if(ft){
    ft = false;
    return cb(null, "firt time set content");
  }
  return cb(null, "other content");
});

console.log(CacheManager.get('some_key')); // Should be "firt time set content"
setTimeout(function(){
  console.log(CacheManager.get('some_key')); // Should be "firt time set content"
  console.log(CacheManager.get('some_key')); // Should be "other content"
  setTimeout(function(){
    console.log(CacheManager.get('some_key')); // Should be "other content" after reload
  }, 11000);
}, 1100); // just more than 1 s

// triggered
var CacheManager = new TriggeredReloadCacheManger();
var CacheBackend = new MemeCahcheBackend();
CacheManager.setBackend(CacheBackend);
var ft = true;

CacheManager.set("some_key",function(){
  if(ft){
    ft = false;
    return cb(null, "firt time set content");
  }
  return cb(null, "other content");
});
console.log(CacheManager.get('some_key'));
console.log(CacheManager.get('some_key'));

CacheManager.triggerReload(function(){
  console.log(CacheManager.get('some_key'));
});

