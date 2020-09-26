'use strict'

exports.ok = function(values,res){
    var data={
        'status' : 200,
        'values' : values
    }
    res.json(data)
    res.end()
}

exports.fail = function(err,res){
    var data={
        'status' : 404,
        'values' : 'request cannot proceed',
        'error'  : err

    }
    res.json(data)
    res.end
}