const mysql = require('mysql');
const pool = require('../mysqlConfig/mysql.js');
const mapper = require('../mapping/mMapper.js');

// ��ǰ̨����JSON�����ļ򵥷�װ
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '����ʧ��'
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