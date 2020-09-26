var express = require('express')

var app = express()

app.get('/', function (req, res){
    res.send('<h1>ANSTYKA SYAHRIAL</h1>')
})

app.listen(8080,() => {
    console.log('SERVER JALAN DI PORT 8080')
})