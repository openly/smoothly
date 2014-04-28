var ValidationManager = require('../../src/lib/validation');
var RequiredValidator = require('../../src/lib/validation/required');
var AlphanumericValidator = require('../../src/lib/validation/alphanumeric');

var vm = new ValidationManager;
var rq = new RequiredValidator;
var an = new AlphanumericValidator;
// req.setErrorMessage('Filed A is needed/required');

vm.addValidator('a',rq);
vm.addValidator('a',an);


console.log("Invalid: ", vm.validate({a:''}));
console.log(vm.getErrors());
console.log("Invalid: ", vm.validate({a:'#$QW!#'}));
console.log(vm.getErrors());
console.log("Valid Alphanumeric: ", vm.validate({a:'asd1223456789ASD'}));