const connection=require("../connect.js");
function toggleStatus(groupId,callback){
    connection.query("SELECT 状态 from 商户集团信息表 where 集团编号 = '"+ groupId +"' ", function (error, results, fields) {
        if (error) throw error;
        status=results[0].状态;
        if (status==1){
            status=0;
        }
        else{
            status=1;
        }
        connection.query("UPDATE 商户集团信息表 SET 状态 = '"+status +"' where 集团编号 = '"+ groupId +"' ");
        connection.query("UPDATE 商户信息表 SET 状态 ='"+status+"' where 集团编号 = '"+groupId+"' ");
        callback(status.toString());
  });
}
module.exports=toggleStatus;