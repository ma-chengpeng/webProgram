const express = require('express');
const app=express();

app.use('/staticResource', express.static('staticResource'));

const indexRouter = require('./router/userLoginRouter.js');
app.use('/index',indexRouter);

const studentInfoManager=require('./router/studentInfoManager.js');
app.use('/studentInfoManager',studentInfoManager);

const groupManager=require('./router/groupManager.js');
app.use('/groupManager',groupManager);

const supplierManager=require('./router/supplierManager.js');
app.use('/supplierManager',supplierManager);

const payProjectManager=require('./router/payProjectManager.js');
app.use('/payProjectManager',payProjectManager);


app.get('/',function(req,res){
    res.sendFile(__dirname + "/staticResource/html/index.html")
})


const server = app.listen(8888,function(){
    const host = server.address().address
    const port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})