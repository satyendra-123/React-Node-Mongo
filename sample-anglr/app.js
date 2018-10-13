const express = require('express');
var path = require('path');
var db = require('./backend-node/dbConfig');
var mongo = require('./backend-node/mongodbConfig');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
 const port = process.env.port || 5000; 

//controller
list_data = function(req, res) {
    //callDb('select * from sweets', res)
    callMongoDb('', res)
};

var callDb = function(sendQry, res){
    let result;
    db.query(sendQry, function (error, results, fields) {
        if (error) throw error;
        result = JSON.stringify(results)
        console.log('Mysql response:', result)
        res.send(JSON.parse(result))
      });
}

var callMongoDb = function (sendQry, res) {
    let result;
    mongo.qry(sendQry, function (error, results, fields) {
        if (error) throw error;
        result = JSON.stringify(results)
        console.log('Mongo response:', result)
        res.send(JSON.parse(result))
    })
}

//backend service
app.route('/api/sweets')
.get(list_data)

app.route('/api/sweets/:id')
.get(function(req, res){
    Sweets.forEach(element => {
           if( element.id == req.params.id){
               res.json(element)
           }
    });
})

 //server startup
app.listen(port, () => console.log(`Listening on port ${port}`));   
module.exports = app;

//Sample Data
Sweets = [{
    'id':101,
    'name':'Gulab Jamun',
    'price': 400
},
{
    'id':102,
    'name':'Kaju Katali',
    'price': 500
},
{
    'id':103,
    'name':'Rasgulla',
    'price': 420
},
{
    'id':104,
    'name':'Gadbad',
    'price': 390
},
{
    'id':105,
    'name':'Coconut Holige',
    'price': 450
},
{
    'id':106,
    'name':'Maalpua',
    'price': 560
},
{
    'id':107,
    'name':'MotiChoor Laddoos',
    'price': 460
},
{
    'id':108,
    'name':'Rajbhog',
    'price': 600
},
]
