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
      if(reqBody.goodsNumber!="")
      {
            addSqlString("采购编号",reqBody.goodsNumber);
      }

      if(reqBody.groupNumber!="")
      {
            addSqlString("集团编号",reqBody.groupNumber);
      }

      if(reqBody.supplierNumber!="")
      {
            addSqlString("供应商商户号",reqBody.supplierNumber);
      }

      if(reqBody.supplierName!="")
      {
            addSqlString("供应商名称",reqBody.supplierName);
      }


}

function queryGoodsInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from 进货表"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryGoodsInfo;