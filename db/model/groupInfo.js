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
      if(reqBody.companyNumber!="")
      {
            addSqlString("集团编号",reqBody.companyNumber);
      }

      if(reqBody.companyName!="")
      {
            addSqlString("集团名称",reqBody.companyName);
      }

      if (reqBody.status!="")
      {
            addSqlString("状态",reqBody.status)
      }
}

function queryGroupInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from 商户集团信息表"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryGroupInfo;