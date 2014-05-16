var APIBackend = require('../../../src/lib/api/backend');
var APICall = require('../../../src/lib/api/call');
var APIRequestMethods =  require('../../../src/lib/api/req_methods');
var assert =  require('assert');

var ValidAPIServer = require('../../helpers/api/valid');

var be = new APIBackend('http://localhost:1234');
var call = new APICall(be, APIRequestMethods.GET, '/test');

var s = new ValidAPIServer();
s.onReq = function(req,res){
  assert.equal(req.url,"/test?a=b&c=d", "Unexpected url");
  res.end(JSON.stringify({status:'success'}))
}

s.listen(1234, function(){
  call.exec({query:{a:'b',c:'d'}},function(e, resp){
    console.log("Finished");
    assert.equal(resp.status, "success", "Expecting success status");
    s.stop();
    process.exit();
  });
})
