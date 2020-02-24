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
            addSqlString("product_id",reqBody.projectNumber);
      }

      if(reqBody.projectName!="")
      {
            addSqlString("product_name",reqBody.projectName);
      }

      if(reqBody.supplierNumber!="")
      {
            addSqlString("corp_id",reqBody.supplierNumber);
      }

      if(reqBody.status!="")
      {
            addSqlString("product_status",reqBody.status)
      }
}

function queryPayProjectInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from product_list"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryPayProjectInfo;