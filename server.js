var express = require('express')
var app = express()
var port = 9000
var bodyParser = require('body-parser')


var controller = require('./controller')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./routes')
routes(app)

app.listen(port)
console.log('server start on port ' + port)