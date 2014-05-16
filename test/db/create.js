var dbBackend = new MongoDBBackend('localhost','abhi');

var someSchema = new DBSchema(dbBackend, 'Something', {
  'name'  : String,
  'email' : String
});

var creator = DBEntryCreator(someSchema);
creator.create({
  "name":"asdf",
  "email":"asdf@asdf.com"
},function(e, newData){
  console.log(newData._id);
})