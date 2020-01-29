const express = require('express');
const getSupplierQueryResult=require('../db/model/supplierInfo')

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});

const router  = express.Router();

const fs = require("fs");

const multer = require("multer");
router.use(multer({ dest: '/tmp/'}).array('image'));

const methods=require("./methods.js");

router.post('/querySupplierInfo',urlEncodeParser,function(req,res){

    getSupplierQueryResult(req.body,function(results){
        methods.sendResultForSupplierManager(results,res);
    });
})

router.post('/fileUpload', function (req, res) {
 
    console.log(req.files[0]);  // 上传的文件信息
  
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.send( JSON.stringify( response ) );
        });
    });
 })


module.exports = router;