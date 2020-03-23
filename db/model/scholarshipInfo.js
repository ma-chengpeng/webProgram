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
      if(reqBody.发放编号!="")
      {
            addSqlString("发放编号",reqBody.发放编号);
      }

      if(reqBody.学号!="")
      {
            addSqlString("学号",reqBody.学号);
      }
      if(reqBody.奖学金类型!="")
      {
            addSqlString("奖学金类型",reqBody.奖学金类型);
      }
      if(reqBody.名称!="")
      {
            addSqlString("名称",reqBody.名称);
      }
      if(reqBody.等级!="")
      {
            addSqlString("等级",reqBody.等级);
      }
      if(reqBody.发放渠道!="")
      {
            addSqlString("发放渠道",reqBody.发放渠道);
      }



}

function queryScholarshipInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);
  
    console.log(sql_conditions);
    connection.query("SELECT * from 奖学金信息表"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryScholarshipInfo;