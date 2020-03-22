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
      if(reqBody.StudentNumber!="")
      {
            addSqlString("学号",reqBody.StudentNumber);
      }

      if(reqBody.StudentName!="")
      {
            addSqlString("姓名",reqBody.StudentName);
      }

      if(reqBody.Department!="")
      {
            addSqlString("院系",reqBody.Department);
      }

      if(reqBody.Major!="")
      {
          addSqlString("专业",reqBody.Major);
      }

      if(reqBody.Status!="")
      {
          addSqlString("在读状态",reqBody.Status);
      }

      if(reqBody.Grade!="")
      {
          addSqlString("年级",reqBody.Grade);
      }

      if(reqBody.Sex!="")
      {
        addSqlString("性别",reqBody.Sex);
      }
}

function queryStudentInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);

    connection.query("SELECT * from 用户信息表"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryStudentInfo;