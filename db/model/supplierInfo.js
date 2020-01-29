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
            addSqlString("corp_id",reqBody.supplierNumber);
      }

      if(reqBody.supplierName!="")
      {
            addSqlString("corp_name",reqBody.supplierName);
      }

      if(reqBody.contactName!="")
      {
            addSqlString("corp_account_contact1",reqBody.contactName);
      }
}

function querySupplierInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from corp_info"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=querySupplierInfo;