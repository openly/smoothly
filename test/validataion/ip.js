var ValidationManager = require('../../src/lib/validation');
var RequiredValidator = require('../../src/lib/validation/required');
var IpValidator = require('../../src/lib/validation/ip');

var vm = new ValidationManager;
var rq = new RequiredValidator;
var ip = new IpValidator;
// req.setErrorMessage('Filed A is needed/required');

vm.addValidator('a',rq);
vm.addValidator('a',ip);


console.log("Invalid: ", vm.validate({a:''}));
console.log(vm.getErrors());
console.log("Invalid: #$QW!#", vm.validate({a:'#$QW!#'}));
console.log(vm.getErrors());
console.log("Invalid: 123123.12312.31231.23", vm.validate({a:'123123.12312.31231.23'}));
console.log(vm.getErrors());
console.log("Invalid: 255.255.255", vm.validate({a:'255.255.255'}));
console.log(vm.getErrors());

console.log("Valid ip: 123.123.123.123 ", vm.validate({a:'123.123.123.123'}));
console.log("Valid ip: 255.255.255.255 ", vm.validate({a:'255.255.255.255'}));
console.log("Valid ip: 19.19.19.255 ", vm.validate({a:'19.19.19.19'}));