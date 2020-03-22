const connection=require("../connect.js");

var sql_conditions="";
var START=0;
var WHERE_OR_AND=" and ";

function addSqlString(key,value)
{
        if(START==0)
		    { 
			      WHERE_OR_AND=" where ";
			      START=1;
		    }
		    sql_conditions = sql_conditions + WHERE_OR_AND + key + "  = '"+value+"'  ";
		    WHERE_OR_AND =" and ";
}

function consistSqlString(reqBody)
{
      if(reqBody.clearNumber!="")
      {
            addSqlString("清算号",reqBody.clearNumber);
      }

      if(reqBody.goodsNumber!="")
      {
            addSqlString("采购编号",reqBody.goodsNumber);
      }

      if(reqBody.earnestStatus!="")
      {
            addSqlString("定金状态",reqBody.earnestStatus);
      }

      if(reqBody.finalPaymentStatus!="")
      {
            addSqlString("尾款状态",reqBody.finalPaymentStatus);
      }

      if(reqBody.finalPaymentData!="")
      {
            addSqlString("尾款支付期限",reqBody.finalPaymentData);
      }
      if(reqBody.earnestData!="")
      {
            addSqlString("定金支付时间",reqBody.earnestData);
      }
}

function queryGoodsInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from 清算表"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryGoodsInfo;