const mongoClient = require('mongodb').MongoClient
const assert = require('assert');

var db;

/* var mlabMongoUsr = 'admin';
var mlabMongoPwd = 'kotiys'  */
var mlabMongoUrl  = "mongodb://admin:kotiys@ds012578.mlab.com:12578/monglabdb"

const dbName = 'monglabdb'

/* mongoClient.connect(mlabMongoUrl, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to mongo lab ms azure us west server");
    db = client.db(dbName);
     insertDocuments(db, function(){
        client.close();
    })
    client.close();
}); */


/* const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('sweets');
    // Insert some documents
    collection.insertMany(
        [{id:101, name:"Rasgulla", price:400},
        {"id":102,"name":"Rajbhog","price":500},
        {"id":103,"name":"Gulab Jamun","price":480},
        {"id":104,"name":"Barfi","price":580},
        {"id":105,"name":"Kheer","price":380},
        {"id":106,"name":"Malai Barfi","price":560},
        {"id":107,"name":"Kallakand","price":490},
        {"id":108,"name":"Kaju Katli","price":600},
        {"id":109,"name":"Boondi Laddo","price":350}], function(err, result) {
      assert.equal(err, null);
      assert.equal(9, result.result.n);
      assert.equal(9, result.ops.length);
      console.log("Inserted 9 documents into the collection");
      callback(result);
    });
  } */

module.exports = db