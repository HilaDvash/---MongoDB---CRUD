var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.listCollections().toArray(function (err, collections) {
    //collections = [{"name": "coll1"}, {"name": "coll2"}]
    var exist = false;
    for (var i = 0; i < collections.length; i++) {
      if (collections[i].name == "documents") exist = true;
      console.log(collections[i].name);
    }
    if (exist == false) {
      dbo.createCollection("documents", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    }
  });
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.listCollections().toArray(function (err, collections) {
    //collections = [{"name": "coll1"}, {"name": "coll2"}]
    var exist = false;
    for (var i = 0; i < collections.length; i++) {
      if (collections[i].name == "types") exist = true;
      console.log(collections[i].name);
    }
    if (exist == false) {
      dbo.createCollection("types", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    }
  });
});

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.listCollections().toArray(function (err, collections) {
    //collections = [{"name": "coll1"}, {"name": "coll2"}]
    var exist = false;
    for (var i = 0; i < collections.length; i++) {
      if (collections[i].name == "errors") exist = true;
      console.log(collections[i].name);
    }
    if (exist == false) {
      dbo.createCollection("errors", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    }
  });
});
