# 学校教务管理平台

## 目录介绍  
### db
./db/model 数据库每个表的处理，业务逻辑操作
```  
eg./db/model/studentInfo.js作为一个模块封装了对user_info该表的业务逻辑操作
```  
./db/connect.js 连接数据库  

### node_modules  
nodejs的模块目录，通过npm install *<模块名>*  安装的模块**自动**存储在这个文件夹下
```
eg npm install mysql   //安装mysql模块
```  
### router
各种路由信息，每一个文件负责处理来自前端一个页面的所有请求get,post等  
```
eg ./router/studentInfoManager.js处理来自学生信息管理的请求
```    

### staticResource  
存放css,javascript,html,images资源，在html中需要引用相应资源时从该目录开始寻址   
```
eg  在html/学生信息管理.html 中要调用javascript/学生信息管理.js文件，用如下声明<script src="/staticResource/javascript/学生信息管理.js"></script> 
```

### pre-prepare
前期准备的资料，包括axure原型设计资料等，存放设计资料等杂项

### server.js
项目启动入口，node server.js即可启动项目

## mysql 信息  

依照./pre-prepare/DB/sql.sql文件建表

    host     : '127.0.0.1'  
    user     : 'program',  
    password : 'program',  
    database : 'webprogram'  

## 客户端浏览器访问
    127.0.0.1:8888

