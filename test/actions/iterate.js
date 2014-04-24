var Transaction = require('../../src/lib/transaction')
var State = require('../../src/lib/transaction/state')
var IterateAction = require('../../src/lib/transaction/actions/iterate')
var Action = require('../../src/lib/transaction/action')


var trans = new Transaction('test');

var state1 = new State('state1');

var subAct1 = new IterateAction();
var act1 = new IterateAction(subAct1, 'a');

subAct1.onExec = function(data, callback){
  console.log("Data: ", data);
  callback ('success','Modifed '+ data);
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