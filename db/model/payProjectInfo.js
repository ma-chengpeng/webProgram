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
      if(reqBody.projectNumber!="")
      {
            addSqlString("商品编号",reqBody.projectNumber);
      }

      if(reqBody.projectName!="")
      {
            addSqlString("商品名称",reqBody.projectName);
      }

      if(reqBody.supplierNumber!="")
      {
            addSqlString("商户代码",reqBody.supplierNumber);
      }

      if(reqBody.status!="")
      {
            addSqlString("商品状态",reqBody.status)
      }
}

function queryPayProjectInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from 商品清单"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryPayProjectInfo;