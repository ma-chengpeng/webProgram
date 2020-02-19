const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updateUserInfo(file){
    var userInfo=xlsx.parse(file)[0].data;

    for(i=1;i<userInfo.length;i++){
        studentId  =userInfo[i][0]
        collage    =userInfo[i][1]
        studentName=userInfo[i][2]
        department =userInfo[i][3]
        major      =userInfo[i][4]
        gender     =userInfo[i][5]
        grade      =userInfo[i][6]
        status     =userInfo[i][7]
        password   =userInfo[i][8]


        var  addSql = 'INSERT INTO user_info(stu_id,collage,stu_name,department,major,gender,grade,status,password) VALUES(?,?,?,?,?,?,?,?,?) \
        ON DUPLICATE KEY UPDATE collage=?,stu_name=?,department=?,major=?,gender=?,grade=?,status=?,password=?';
        var  addSqlParams = [studentId, collage,studentName, department,major,gender,grade,status,password,
            collage,studentName, department,major,gender,grade,status,password  ];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updateUserInfo