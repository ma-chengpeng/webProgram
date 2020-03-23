const connection=require("../connect.js");
function toggleStatus(corpId,callback){
    connection.query("SELECT 商品状态 from 商品清单 where 商品编号 = '"+ corpId +"' ", function (error, results, fields) {
        if (error) throw error;
        status=results[0].商品状态;
        if (status==1){
            status=0;
        }
        else{
            status=1;
        }
        connection.query("UPDATE  商品清单 SET 商品状态 = '"+status +"' where 商品编号 = '"+ corpId +"' ");
        callback(status.toString());
  });
}
module.exports=toggleStatus;