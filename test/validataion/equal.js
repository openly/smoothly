var ValidationManager = require('../../src/lib/validation');
var EqualValidator = require('../../src/lib/validation/equal');

var vm = new ValidationManager;

var ev = new EqualValidator;
// req.setErrorMessage('Field A is needed/required');

vm.addValidator('a,b',ev);


console.log("Invalid: ", vm.validate({a:'one',b:'two'}));
console.log(vm.getErrors());

console.log("Valid: ", vm.validate({a:'one',b:'one'}));
console.log(vm.getErrors());