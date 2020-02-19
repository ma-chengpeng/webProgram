const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updatePayRecordInfo(file){
    var payRecordInfo=xlsx.parse(file)[0].data;
    for(i=1;i<payRecordInfo.length;i++){

        sequenceNum         =payRecordInfo[i][0]
        channelId           =payRecordInfo[i][1]
        stuId               =payRecordInfo[i][2]
        payStatus           =payRecordInfo[i][3]
        billAmount          =payRecordInfo[i][4]
        billId              =payRecordInfo[i][5]

         var  addSql = 'INSERT INTO all_pay_list(sequence_num,channel_id,stu_id,pay_status,bill_amount,bill_id) VALUES(?,?,?,?,?,?) \
         ON DUPLICATE KEY UPDATE channel_id=?,stu_id=?,pay_status=?,bill_amount=?,bill_id=?';
         var  addSqlParams = [sequenceNum,channelId,stuId,payStatus,billAmount,billId,
                             channelId,stuId,payStatus,billAmount,billId];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updatePayRecordInfo