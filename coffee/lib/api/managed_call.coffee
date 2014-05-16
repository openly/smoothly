APICall = require './call'
class ManagedAPICall extends APICall
  exec: (data, callback)->
    @status = {start: new Date}
    super data, (e,resp)=>
      @status.end = new Date;
      @status.error = e.code if e?
      @onComplete(e, resp);
    callback(null,{status:'initialized'});

  onComplete: (e, response)->
    console.log "Nothing to do on complete"    
  

module.exports = ManagedAPICall