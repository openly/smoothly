var ValidationManager = require('../../src/lib/validation');
var RequiredValidator = require('../../src/lib/validation/required');
var UrlValidator = require('../../src/lib/validation/url');

var vm = new ValidationManager;
var rq = new RequiredValidator;
var url = new UrlValidator;
// req.setErrorMessage('Filed A is needed/required');

vm.addValidator('a',rq);
vm.addValidator('a',url);


console.log("Invalid: ", vm.validate({a:''}));
console.log(vm.getErrors());
console.log("Invalid: #$QW!#", vm.validate({a:'#$QW!#'}));
console.log(vm.getErrors());
console.log("Invalid: wwwsadasd.google.com ", vm.validate({a:'wwwsadasd.google.com'}));
console.log(vm.getErrors());
console.log("Invalid: asdasdasdasd!!@## ", vm.validate({a:'asdasdasdasd!!@##'}));
console.log(vm.getErrors());

console.log("Valid URL: ww.google.com ", vm.validate({a:'www.google.com'}));
console.log("Valid URL: https://www.google.co.in/#q=escape+character+for+coffeescript ", vm.validate({a:'https://www.google.co.in/#q=escape+character+for+coffeescript'}));
console.log("Valid URL: www.google.ust ", vm.validate({a:'www.google.ust'}));
console.log("Valid URL: http://www.google.co.in/#q=escape+character+for+coffeescript ", vm.validate({a:'http://www.google.co.in/#q=escape+character+for+coffeescript'}));
