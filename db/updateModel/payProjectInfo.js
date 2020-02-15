const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updatePayProjectInfo(file){
    var payProjectInfo=xlsx.parse(file)[0].data;

    for(i=1;i<payProjectInfo.length;i++){
        productId           =payProjectInfo[i][0]
        productName         =payProjectInfo[i][1]
        productUnitPrice    =payProjectInfo[i][2]
        corpId              =payProjectInfo[i][3]
        productStatus       =payProjectInfo[i][4]
        attribute1          =payProjectInfo[i][5]
        attribute2          =payProjectInfo[i][6]
        attribute3          =payProjectInfo[i][7]
        remark              =payProjectInfo[i][8]


         var  addSql = 'INSERT INTO product_list(product_id,product_name,product_unit_price,corp_id,product_status,attribute1,attribute2,attribute3,remark) VALUES(?,?,?,?,?,?,?,?,?) \
         ON DUPLICATE KEY UPDATE product_name=?,product_unit_price=?,corp_id=?,product_status=?,attribute1=?,attribute2=?,attribute3=?,remark=?';
         var  addSqlParams = [productId,productName,productUnitPrice,corpId,productStatus,attribute1,attribute2,attribute3,remark,
                              productName,productUnitPrice,corpId,productStatus,attribute1,attribute2,attribute3,remark];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updatePayProjectInfo