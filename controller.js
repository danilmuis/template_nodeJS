'use strict'

var response = require('./response')
var connection = require('./connection')

exports.users = function(req,res){
    connection.query('SELECT * FROM users',function(error,result,fields){
        if(error){
            console.log(error)
            response.fail(err,res)
        }else{
            response.ok(result,res)
        }
    })
}

exports.index = function(req,res){
    response.ok('hello from node js',res)
}

exports.findUsers = function(req,res){
    var id = req.params.id
    connection.query('SELECT * FROM users WHERE id = ?',
    [id],
    function(err,result,fields){
        if(err){
            console.log(err)
            response.fail(err,res)
        }else{
            response.ok(result,res)
        }
    })
}

exports.createUsers = function(req,res){
    var nama = req.body.nama
    var email = req.body.email
    var tanggal = req.body.tanggal

    connection.query('INSERT INTO users (nama,email,tanggal) values (?,?,?)',
    [nama,email,tanggal], 
    function(err,result,fields){
        if(err){
            console.log(err)
            response.fail(err,res)
        }else{
            response.ok('User berhasil ditambahkan',res)
        }
    })
}

exports.updateUsers = function(req,res){
    var id = req.params.id
    var nama = req.body.nama
    var email = req.body.email
    var tanggal = req.body.tanggal

    connection.query('UPDATE users SET nama = ?, email = ?, tanggal = ? WHERE id = ?', 
    [nama,email,tanggal,id],
    function(err,result,fields){
        if(err){
            console.log(err)
            response.fail(err,res)
        }else{
            response.ok('User berhasil diupdate',res)
        }
    })
}

exports.deleteUsers = function(req,res){
    var id = req.body.id

    connection.query('DELETE FROM users WHERE id = ?',
    [id],
    function(err,result,fields){
        if(err){
            console.log(err)
            response.fail(err,res)
        }else{
            response.ok('User dengan id '+id+' berhasil dihapus',res)
        }
    })
}