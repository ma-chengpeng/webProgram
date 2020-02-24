const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updatePayOrderInfo(file){
    var payOrderInfo=xlsx.parse(file)[0].data;

    for(i=1;i<payOrderInfo.length;i++){
        billId              =payOrderInfo[i][0]
        billAmount          =payOrderInfo[i][1]
        createTime          =new Date(1900,0,payOrderInfo[i][2])
        stuId               =payOrderInfo[i][3]
        payStatus           =payOrderInfo[i][4]
        billFailReason      =payOrderInfo[i][5]
        channelId          =payOrderInfo[i][6]

         var  addSql = 'INSERT INTO bill_info(bill_id,bill_amount,creat_time,stu_id,pay_status,bill_fail_reason,channel_id) VALUES(?,?,?,?,?,?,?) \
         ON DUPLICATE KEY UPDATE bill_amount=?,creat_time=?,stu_id=?,pay_status=?,bill_fail_reason=?,channel_id=?';
         var  addSqlParams = [billId,billAmount,createTime,stuId,payStatus,billFailReason,channelId,
                              billAmount,createTime,stuId,payStatus,billFailReason,channelId,];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updatePayOrderInfo