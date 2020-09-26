var mysql = require('mysql')
var ip = '127.0.0.1'
var DB = 'node_test'
var username = 'root'
var password = ''

var connection = mysql.createConnection({
    host:ip,
    user:username,
    password:password,
    database:DB
})

connection.connect(function(err){
    if(err) throw err
})

module.exports = connection