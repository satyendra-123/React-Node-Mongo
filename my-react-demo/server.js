const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://Satyendra:testclMONGO@cluster0-shard-00-00-kfrti.mongodb.net:27017,cluster0-shard-00-01-kfrti.mongodb.net:27017,cluster0-shard-00-02-kfrti.mongodb.net:27017/myDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

const port = process.env.port || 5000;

app.get('/api/hello', (req, res) => {
    //connect to Mongo Db in cloud
    MongoClient.connect(uri, function(err, db) {
        db.close();
      });
      res.send({ express: 'Hello From Express' })
});

app.listen(port, () => console.log(`Listening on port ${port}`));  