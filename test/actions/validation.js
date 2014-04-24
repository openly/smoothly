var Transaction = require('../../src/lib/transaction')
var State = require('../../src/lib/transaction/state')
var ValidateAction = require('../../src/lib/transaction/actions/validation')
var RequiredValidator = require('../../src/lib/validation/required');


var trans = new Transaction('test');

var state1 = new State('state1');
var act1 = new ValidateAction();
state1.setAction(act1)

act1.add('a',new RequiredValidator);

trans.addState(state1)

trans.addTransition('start','state1');
trans.addTransition('state1.success','end');
trans.addTransition('state1.failed','end');

trans.exec({},function(data){
  console.log(data);
})

trans.exec({a:""},function(data){
  console.log(data);
})


trans.exec({a:"abd"},function(data){
  console.log(data);
})