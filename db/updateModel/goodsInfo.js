const connection=require("../connect.js");
const xlsx = require('node-xlsx')

function updateGoodsInfo(file){
    var goodsInfo=xlsx.parse(file)[0].data;

    for(i=1;i<goodsInfo.length;i++){
        stockId       =goodsInfo[i][0]
        stockAmount   =goodsInfo[i][1]
        corpId        =goodsInfo[i][2]
        corpName      =goodsInfo[i][3]
        groupId       =goodsInfo[i][4]

         var  addSql = 'INSERT INTO stock_list(stock_id,stock_amount,corp_id,corp_name,group_id) VALUES(?,?,?,?,?) \
         ON DUPLICATE KEY UPDATE stock_amount=?,corp_id=?,corp_name=?,group_id=?';
         var  addSqlParams = [stockId,stockAmount,corpId,corpName,groupId,
                              stockAmount,corpId,corpName,groupId];

        connection.query(addSql,addSqlParams,function (err,result){
           if(err){
                console.log('[INSERT ERROR] - ',err.message);
            }         
        })
    }
}
module.exports=updateGoodsInfo