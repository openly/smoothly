objval = require ('../../src/lib/util/objval');

console.log(objval({a:{b:{c:'A.B.C'}}},'a.b.c'));
console.log(objval({a:{b:'A.B'}},'a.b.c'));