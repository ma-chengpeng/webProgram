const express = require('express');

const bodyParser = require('body-parser'); 
var urlEncodeParser = bodyParser.urlencoded({extended: false});
const router  = express.Router();

const path = require("path")
adminPath=path.resolve(__dirname,'../staticResource/html');

router.post('/userLogin',urlEncodeParser,function(req,res){
    console.log("login post method");
    //res.send(req.body);
    res.sendFile(adminPath + "/首页.html");
})

module.exports = router;