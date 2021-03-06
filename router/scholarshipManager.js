const express = require('express');
const  getScholarshipQueryResult=require('../db/model/scholarshipInfo.js')

const updateScholarshipInfo=require("../db/updateModel/scholarshipInfo.js")

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});

const router  = express.Router();

const fs = require("fs");

const multer = require("multer");
router.use(multer({ dest: '/tmp/'}).array('image'));

const methods=require("./methods.js");

router.post('/queryScholarshipInfo',urlEncodeParser,function(req,res){
    
     getScholarshipQueryResult(req.body,function(results){
        console.log(results)
        methods.sendResultForScholarshipManager(results,res);
        methods.saveResultAsxlsxForScholarshipManager(results);
     });
})

// router.post('/fileUpload', function (req, res) {
 
    
//      var des_file = __dirname + "/uploadFiles/" + req.files[0].originalname;
    
//      fs.readFile( req.files[0].path, function (err, data) {
//           fs.writeFile(des_file, data, function (err) {
//            if( err ){
//                 console.log( err );
//            }else{
 
//                 res.send("上传成功");
                
//                 updatePayRecordInfo(des_file);
     
//                 fs.unlink(des_file, function(err) {
//                      if (err) {
//                          console.log(err);
//                      }
//                      console.log("文件删除成功！");
//                  });
//             }
 
//          });
//      });
// })

// router.post('/exportFiles',function(req,res){
//      path=__dirname+"/exportFiles/";
//      res.sendFile(path+"all_pay_list.xlsx");
// })


module.exports = router;