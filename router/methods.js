module.exports={
    sendResultForStudentInfoManager: function(results,response)
    {
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
                <th>学号</th>\
                <th>大学</th>\
                <th>学生姓名</th>\
                <th>学院</th>\
                <th>专业</th>\
                <th>年级</th>\
                <th>性别</th>\
                <th>在读状态</th>\
            </tr>\
        </thead>\
        <tbody> \
        ";
        var Count=0;
        var isGetInformation=false;
        while(results[Count]!=undefined)
        {   
            isGetInformation=true;
            resultToHtml+="<tr>";
            resultToHtml+="<td>'"+ results[Count].stu_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].collage+"'</td>";
            resultToHtml+="<td>'"+ results[Count].stu_name+"'</td>";
            resultToHtml+="<td>'"+ results[Count].department+"'</td>";
            resultToHtml+="<td>'"+ results[Count].major+"'</td>";
            resultToHtml+="<td>'"+ results[Count].grade+"'</td>";
            resultToHtml+="<td>'"+ results[Count].gender+"'</td>";
            resultToHtml+="<td>'"+ results[Count].status+"'</td>";
            resultToHtml+="</tr>";
            Count++;
        }
        resultToHtml+="</tbody>\
                    </table>";
        if(isGetInformation==false)
        {
            resultToHtml="<h1 class='"+"test"+"'>未查询到相关信息</h1>"
        }
        response.send(resultToHtml);
    }
    
    

};
