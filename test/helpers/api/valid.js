var http = require('http');

function ValidAPIServer(){
  var self = this
  var srv = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    self.onReq(req,res);
  });
  this.listen = function(port, callback){
    srv.listen(port, callback);
  }

  this.onReq = function(req, res){
    res.end(JSON.stringify({'status':'success'}));
  }

  this.stop = function(){ srv.close(); }
}

module.exports = ValidAPIServer;