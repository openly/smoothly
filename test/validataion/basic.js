var ValidationManager = require('../../src/lib/validation');
var RequiredValidator = require('../../src/lib/validation/required');

var vm = new ValidationManager;

var req = new RequiredValidator;
req.setErrorMessage('Filed A is needed/required');

vm.addValidator('a',req);


console.log("Invalid: ", vm.validate({a:''}));
console.log(vm.getErrors());
console.log("Valid: ", vm.validate({a:'abcd'}));
console.log(vm.getErrors());