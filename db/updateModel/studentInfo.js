const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updateUserInfo(file){
    var userInfo=xlsx.parse(file)[0].data;

    for(i=0;i<userInfo.length;i++){

        var  addSql = 'INSERT INTO user_info(stu_id,collage,stu_name,department,major,gender,grade,status,password) VALUES(?,?,?,?,?,?,?,?,?) \
        ON DUPLICATE KEY UPDATE collage=?,stu_name=?,department=?,major=?,gender=?,grade=?,status=?,password=?';
        var  addSqlParams = [userInfo[i][0], userInfo[i][1],userInfo[i][2], userInfo[i][3],userInfo[i][4],userInfo[i][5],userInfo[i][6],userInfo[i][7],userInfo[i][8],
                             userInfo[i][1],userInfo[i][2], userInfo[i][3],userInfo[i][4],userInfo[i][5],userInfo[i][6],userInfo[i][7],userInfo[i][8]  ];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updateUserInfo