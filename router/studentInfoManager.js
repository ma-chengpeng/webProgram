const express = require('express');
const getStudentQueryResult=require('../db/model/studentInfo.js')

const updateUserInfo=require("../db/updateModel/studentInfo.js")

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});

const router  = express.Router();

const fs = require("fs");

const multer = require("multer");
router.use(multer({ dest: '/tmp/'}).array('image'));

const methods=require("./methods.js");

router.post('/queryStudentInfo',urlEncodeParser,function(req,res){

    getStudentQueryResult(req.body,function(results){
        methods.sendResultForStudentInfoManager(results,res);
        methods.saveResultAsxlsxForStudentInfoManager(results);
    });
})

router.post('/exportFiles',urlEncodeParser,function(req,res){
    path=__dirname+"/exportFiles/";
    res.sendFile(path+"user_info.xlsx");
})

router.post('/fileUpload', function (req, res) {
  
    var des_file = __dirname + "/uploadFiles/" + req.files[0].originalname;
    
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{

               res.send("上传成功");
               
               updateUserInfo(des_file);
    
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


module.exports = router;