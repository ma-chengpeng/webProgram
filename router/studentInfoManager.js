const express = require('express');
const getStudentQueryResult=require('../db/model/studentInfo.js')

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});

const router  = express.Router();

const fs = require("fs");

const multer = require("multer");
router.use(multer({ dest: '/tmp/'}).array('image'));


router.post('/queryStudentInfo',urlEncodeParser,function(req,res){

    getStudentQueryResult(req.body,function(results){
        console.log("get result");
        console.log(results[0]==undefined);
        
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
          <thead>\
            <tr>\
                <th>学号</th>\
                <th>大学</th>\
                <th>学生姓名</th>\
                <th>学院</th>\
                <th>专业</th>\
                <th>年级</th>\
                <th>性别</th>\
                <th>在读状态</th>\
                <th>测试</th>\
            </tr>\
	    </thead>\
	    <tbody> \
         ";
        var Count=0;
        while(results[Count]!=undefined)
        {   resultToHtml+="<tr>";
            resultToHtml+="<td>'"+ results[Count].stu_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].collage+"'</td>";
            resultToHtml+="<td>'"+ results[Count].stu_name+"'</td>";
            resultToHtml+="<td>'"+ results[Count].department+"'</td>";
            resultToHtml+="<td>'"+ results[Count].major+"'</td>";
            resultToHtml+="<td>'"+ results[Count].grade+"'</td>";
            resultToHtml+="<td>'"+ results[Count].gender+"'</td>";
            resultToHtml+="<td>'"+ results[Count].status+"'</td>";
            resultToHtml+="</tr>";
            Count++;
        }
        resultToHtml+="</tbody>\
                       </table>";
        resultToHtml+="<h1 class='"+"test"+"'>hello</h1>";
        res.send(resultToHtml);
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