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
      if(reqBody.orderNumber!="")
      {
            addSqlString("bill_id",reqBody.orderNumber);
      }

      if(reqBody.createData!="")
      {
            addSqlString("create_time",reqBody.createData);
      }

      if(reqBody.studentNumber!="")
      {
            addSqlString("stu_id",reqBody.studentNumber);
      }
}

function queryPayOrderInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from bill_info"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryPayOrderInfo;