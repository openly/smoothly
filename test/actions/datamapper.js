var Transaction = require('../../src/lib/transaction')
var State = require('../../src/lib/transaction/state')
var DataMaperAction = require('../../src/lib/transaction/actions/datamaper')


var trans = new Transaction('test');

var state1 = new State('state1');

var act1 = new DataMaperAction({
  'a': 'b',
  'b': 'c',
  'c': 'd.e',
  'd':{
    'a':'e.b',
    'b':'e.c'
  }
});


state1.setAction(act1);

trans.addState(state1);

trans.addTransition('start','state1');
trans.addTransition('state1.success','end');

trans.exec({
  b:'Something B',
  c:'Something C',
  d:{
    e: 'Something D.E'
  },
  e:{
    b: 'Something E.B',
    c: 'Something E.C'
  }
}, function(endData){
  console.log(endData);
});


// trans.exec({}, function(endData){
//   console.log(endData);
// });