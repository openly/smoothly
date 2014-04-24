var Transaction = require('../src/lib/transaction')
var State = require('../src/lib/transaction/state')
var Action = require('../src/lib/transaction/action')

var logger = {
  logTransition: function(transaction, event, data){
    console.log((new Date).toISOString() + " [" + transaction.name + "#" + transaction.id + "]: Transition to " + event +
      (transaction.currentState == null?"":" From " + transaction.currentState.getName()));
    console.log((new Date).toISOString() + " [" + transaction.name + "#" + transaction.id + "]: Data\n" + JSON.stringify(data,undefined,2));
  },
  logStateStatus: function(){}
}


var trans = new Transaction('test');

trans.setLogger(logger);

var state1 = new State('state1');
var state2 = new State('state2');
var state3 = new State('state3');

var act1 = new Action;
var act2 = new Action;
var act3 = new Action;

act1.onExec = function(data, callback){
  if(data.fail){
    setTimeout(function(){
      callback(['data_failure', 'failed'], {act1: 'fail'});
    }, 2000);
  }
  else{
    callback('success', {act1: 'pass'});
  }
}

act2.onExec = function(data, callback){
  console.log("adsf",data);
  console.log('Action 2');

  callback('success');
}


act3.onExec = function(data, callback){
  console.log('Action 3');
  callback('success');
}


state1.setAction(act1);
state2.setAction(act2);
state3.setAction(act3);

trans.addState(state1);
trans.addState(state2);
trans.addState(state3);

trans.addTransition('start','state1');
trans.addTransition('state1.success','state2');
trans.addTransition('state1.failed','state3');
trans.addTransition('state2.success','end');
trans.addTransition('state3.success','end');

trans.exec({fail:false}, function(endData){
  console.log(endData);
});


trans.exec({fail:true}, function(endData){
  console.log(endData);
});