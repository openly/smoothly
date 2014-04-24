setobjval = require ('../../src/lib/util/setobjval');

console.log(
  setobjval(
    {
      a:{
        b:{
          c:'A.B.C'
        }
      }
    },
    'a.b',
    'A.B'
  )
);