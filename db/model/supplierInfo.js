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
      if(reqBody.supplierNumber!="")
      {
            addSqlString("商户代码",reqBody.supplierNumber);
      }

      if(reqBody.supplierName!="")
      {
            addSqlString("商户名称",reqBody.supplierName);
      }

      if(reqBody.contactName!="")
      {
            addSqlString("商户对账联系人1",reqBody.contactName);
      }
      
      if (reqBody.supplierType!="")
      {
            addSqlString("商户类型",reqBody.supplierType)
      }

      if (reqBody.groupNumber!="")
      {
            addSqlString("集团编号",reqBody.groupNumber)
      }

}

function querySupplierInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    connection.query("SELECT * from 商户信息表"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=querySupplierInfo;