const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updateGroupInfo(file){
    var groupInfo=xlsx.parse(file)[0].data;

    for(i=1;i<groupInfo.length;i++){
        groupId     =groupInfo[i][0]
        groupName   =groupInfo[i][1]
        remark      =groupInfo[i][2]
        status      =groupInfo[i][3]


         var  addSql = 'INSERT INTO group_info(group_id,group_name,remark,status) VALUES(?,?,?,?) \
         ON DUPLICATE KEY UPDATE group_name=?,remark=?,status=?';
         var  addSqlParams = [groupId,groupName,remark,status,
                              groupName,remark,status];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updateGroupInfo