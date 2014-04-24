var Transaction = require('../../src/lib/transaction')
var State = require('../../src/lib/transaction/state')
var MultiAttemptAction = require('../../src/lib/transaction/actions/multiattempt')
var Action = require('../../src/lib/transaction/action')


var trans = new Transaction('test');

var state1 = new State('state1');

var subAct1 = new Action();
var act1 = new MultiAttemptAction(subAct1, 'failed', 5);


var i = 5;

subAct1.onExec = function(data, callback){
  if(i++ < 9)
    callback ('failed', {'status':'failed'});
  else
    callback('success', {'status':'success'})
}

state1.setAction(act1);

trans.addState(state1);

trans.addTransition('start','state1');
trans.addTransition('state1.success','end');

trans.exec({
  a:[
    "1","2","3","4"
  ]
}, function(endData){
  console.log("End Data:",endData);
});


// trans.exec({}, function(endData){
//   console.log(endData);
// });