const mysql = require('mysql');
const pool = require('../mysqlConfig/mysql.js');
const mapper = require('../mapping/mMapper.js');

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module .exports ={
    findName:function(req,res,next){
        pool.getConnection(function(err,connection){
            connection.query(mapper.findName,function(err,result){
                if(err){
                    console.log(err)
                }
                if(result){

                    jsonWrite(res,result)
                }
            })

        })

    }
}