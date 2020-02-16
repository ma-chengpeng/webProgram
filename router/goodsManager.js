const express = require('express');
const getGoodsQueryResult=require('../db/model/goodsInfo.js')
const updateGoodsInfo=require("../db/updateModel/goodsInfo.js")

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});

const router  = express.Router();

const fs = require("fs");

const multer = require("multer");
router.use(multer({ dest: '/tmp/'}).array('image'));

const methods=require("./methods.js");

router.post('/queryGoodsInfo',urlEncodeParser,function(req,res){

    getGoodsQueryResult(req.body,function(results){
         methods.sendResultForGoodsManager(results,res);
         methods.savaResultAsxlsxForGoodsManager(results);
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
               
               updateGoodsInfo(des_file);
    
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
    res.sendFile(path+"stock_list.xlsx");
})


module.exports = router;