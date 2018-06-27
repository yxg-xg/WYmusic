var express = require('express');
var mysql = require('mysql');
var mysqlConfig = require('../mysqlConfig/mysql.js')
var dao = require('../dao/mNameDao.js')
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {
  dao.findName(req, res, next)
  //res.render('index', { title: 'Express' });
});

module.exports = router;
