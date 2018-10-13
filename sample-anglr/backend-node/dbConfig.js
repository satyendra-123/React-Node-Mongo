var mysql = require('mysql');

var connectionInfo = {
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db',
    port: 3306
};

if(process.env.VCAP_SERVICES){
    var services = JSON.parse(process.env.VCAP_SERVICES);
    var mysqlConfig = services["p-mysql"];
    if(mysqlConfig){
        var node = mysqlConfig[0];    
        connectionInfo.host = node.credentials.hostname,
        connectionInfo.port = node.credentials.port,
        connectionInfo.user = node.credentials.username,
        connectionInfo.password = node.credentials.password,
        connectionInfo.database = node.credentials.name
    }
}else{
    console.log('connect to localhost mysql')
    connectionInfo.user = 'root'
    connectionInfo.password = 'kotiys'
    connectionInfo.database = 'sweet-bhandar'
    connectionInfo.host = 'localhost',
    connectionInfo.port = 3306
}

//connection to mysql
var connection = mysql.createConnection(connectionInfo);
connection.connect()

exports.query = function (query, callback) {
    /* var connection = mysql.createConnection(connectionInfo); */
    connection.query(query, function (queryError, result) {
        callback(queryError, result);
    });
    connection.end();
};

module.exports = connection