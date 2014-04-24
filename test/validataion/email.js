var ValidationManager = require('../../src/lib/validation');
var RequiredValidator = require('../../src/lib/validation/required');
var EmailValidator = require('../../src/lib/validation/email');

var vm = new ValidationManager;

var req = new RequiredValidator;
var ev = new EmailValidator;
// req.setErrorMessage('Filed A is needed/required');

vm.addValidator('a',req);
vm.addValidator('a',ev);


console.log("Invalid: ", vm.validate({a:''}));
console.log(vm.getErrors());
console.log("Invalid Email: ", vm.validate({a:'abcd'}));
console.log(vm.getErrors());

console.log("Valid Email: ", vm.validate({a:'abcd@abcd.ab'}));
console.log(vm.getErrors());