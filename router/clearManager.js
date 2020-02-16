const express = require('express');
const getClearQueryResult=require('../db/model/clearInfo.js')
const updateClearInfo=require('../db/updateModel/clearInfo.js')

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});

const router  = express.Router();

const fs = require("fs");

const multer = require("multer");
router.use(multer({ dest: '/tmp/'}).array('image'));

const methods=require("./methods.js");

router.post('/queryClearInfo',urlEncodeParser,function(req,res){
    getClearQueryResult(req.body,function(results){
        methods.sendResultForClearManager(results,res);
        methods.savaResultAsxlsxForClearManager(results);
    });
})

router.post('/fileUpload', function (req, res) {
 
    var des_file = __dirname + "/uploadFiles/" + req.files[0].originalname;
    
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{

               res.send("上传成功");
               
               updateClearInfo(des_file);
    
               fs.unlink(des_file, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("文件删除成功！");
                });
           }

        });
    });
})

router.post('/exportFiles',urlEncodeParser,function(req,res){
    path=__dirname+"/exportFiles/";
    res.sendFile(path+"clear_info.xlsx");
})

module.exports = router;