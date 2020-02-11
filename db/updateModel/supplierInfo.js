const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updateSupplierInfo(file){
    var corpInfo=xlsx.parse(file)[0].data;

    for(i=1;i<corpInfo.length;i++){
        corpId              =corpInfo[i][0]
        corpName            =corpInfo[i][1]
        corpBankAccount     =corpInfo[i][2]
        corpAccountContact1 =corpInfo[i][3]
        corpAccountContact1Phone    =corpInfo[i][4]
        corpAccountContact1Email    =corpInfo[i][5]
        corpAccountContact1Remark    =corpInfo[i][6]
        setAccountType        =corpInfo[i][7]
        backable              =corpInfo[i][8]
        corpType              =corpInfo[i][9]
        groupId               =corpInfo[i][10]
        corpAddress           =corpInfo[i][11]
        status                =corpInfo[i][12]
        if (backable=="否"){
            backable=0;
        }
        else{
            backable=1
        }


        var  addSql = 'INSERT INTO corp_info(corp_id,corp_name,corp_bank_account,corp_account_contact1,corp_account_contact1_phone,corp_account_contact1_email,corp_account_contact1_remark,set_account_type,backable,corp_type,group_id,corp_address,status) \
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?) \
        ON DUPLICATE KEY UPDATE corp_name=?,corp_bank_account=?,corp_account_contact1=?,corp_account_contact1_phone=?,corp_account_contact1_email=?,corp_account_contact1_remark=?,set_account_type=?,backable=?,corp_type=?,corp_address=?,status=?';
        var  addSqlParams = [corpId,corpName,corpBankAccount,corpAccountContact1,corpAccountContact1Phone,corpAccountContact1Email,corpAccountContact1Remark,setAccountType,backable,corpType,groupId,corpAddress,status,
                             corpName,corpBankAccount,corpAccountContact1,corpAccountContact1Phone,corpAccountContact1Email,corpAccountContact1Remark,setAccountType,backable,corpType,corpAddress,status];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updateSupplierInfo