var APIBackend = require('../../../src/lib/api/backend');
var APICall = require('../../../src/lib/api/call');
var APIRequestMethods =  require('../../../src/lib/api/req_methods');
var assert =  require('assert');

var ValidAPIServer = require('../../helpers/api/valid');

var be = new APIBackend('http://localhost:1234');
var call = new APICall(be, APIRequestMethods.POST, '/test');

var s = new ValidAPIServer();
s.onReq = function(req,res){
  var paramsStr = "";
  req.on('data', function(d){ paramsStr += d });
  req.on('end', function(d){ 
    assert.equal(paramsStr, "{\"a\":\"b\",\"c\":\"d\"}", "Incorrect value of params");
    res.end(JSON.stringify({status:'success'}))
  });

  assert.equal(req.method,"POST", "Unexpected url");
  assert.equal(req.url,"/test", "Unexpected url");
}

s.listen(1234, function(){
  call.exec({params:{a:'b',c:'d'}},function(e, resp){
    console.log("Finished");
    assert.equal(resp.status, "success", "Expecting success status");
    s.stop();
    process.exit();
  });
})
