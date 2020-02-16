const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updateClearInfo(file){
    var clearInfo=xlsx.parse(file)[0].data;

    for(i=1;i<clearInfo.length;i++){
        clearId             =clearInfo[i][0]
        stockId             =clearInfo[i][1]
        depositAmount       =clearInfo[i][2]
        depositStatus       =clearInfo[i][3]
        remainAmount        =clearInfo[i][4]
        remainStatus        =clearInfo[i][5]
        depositPaytime      =clearInfo[i][6]
        remainPaytime       =clearInfo[i][7]
      

         var  addSql = 'INSERT INTO clear_info(clear_id,stock_id,deposit_amount,deposit_status,remain_amount,remain_status,deposit_paytime,remain_paytime) VALUES(?,?,?,?,?,?,?,?) \
         ON DUPLICATE KEY UPDATE stock_id=?,deposit_amount=?,deposit_status=?,remain_amount=?,remain_status=?,deposit_paytime=?,remain_paytime=?';
         var  addSqlParams = [clearId,stockId,depositAmount,depositStatus,remainAmount,remainStatus,depositPaytime,remainPaytime,
                              stockId,depositAmount,depositStatus,remainAmount,remainStatus,depositPaytime,remainPaytime];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updateClearInfo