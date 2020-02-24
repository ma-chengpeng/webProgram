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
            addSqlString("clear_id",reqBody.clearNumber);
      }

      if(reqBody.goodsNumber!="")
      {
            addSqlString("stock_id",reqBody.goodsNumber);
      }

      if(reqBody.earnestStatus!="")
      {
            addSqlString("deposit_status",reqBody.earnestStatus);
      }

      if(reqBody.finalPaymentStatus!="")
      {
            addSqlString("remain_status",reqBody.finalPaymentStatus);
      }

      if(reqBody.finalPaymentData!="")
      {
            addSqlString("remain_paytime",reqBody.finalPaymentData);
      }
      if(reqBody.earnestData!="")
      {
            addSqlString("deposit_paytime",reqBody.earnestData);
      }
}

function queryGoodsInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from clear_info"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryGoodsInfo;