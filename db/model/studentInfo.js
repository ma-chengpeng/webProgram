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
            addSqlString("stu_id",reqBody.StudentNumber);
      }

      if(reqBody.StudentName!="")
      {
            addSqlString("stu_name",reqBody.StudentName);
      }

      if(reqBody.Department!="")
      {
            addSqlString("department",reqBody.Department);
      }

      if(reqBody.Major!="")
      {
          addSqlString("major",reqBody.Major);
      }

      if(reqBody.Status!="")
      {
          addSqlString("status",reqBody.Status);
      }

      if(reqBody.Grade!="")
      {
          addSqlString("grade",reqBody.Grade);
      }

      if(reqBody.Sex!="")
      {
        addSqlString("gender",reqBody.Sex);
      }
}

function queryStudentInfo(reqBody,callback)
{
    sql_conditions="";
    START=0;
    WHERE_OR_AND=" and ";

    consistSqlString(reqBody);


  
    connection.query("SELECT * from user_info"+sql_conditions, function (error, results, fields) {
          if (error) throw error;
          callback(results);
    });
}

module.exports=queryStudentInfo;