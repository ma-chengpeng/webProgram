function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("queryResult").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","/scholarshipManager/queryScholarshipInfo",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("发放编号="+document.getElementById("发放编号").value+
				 "&学号="+document.getElementById("学号").value+
				 "&奖学金类型="+document.getElementById("奖学金类型").value+
				 "&名称="+document.getElementById("名称").value+
                 "&等级="+document.getElementById("等级").value+
                 "&发放渠道"+document.getElementById("发放渠道").value);	 
}