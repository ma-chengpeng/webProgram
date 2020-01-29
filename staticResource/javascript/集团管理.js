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
			document.getElementById("ShowChange").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST","/groupManager/queryGroupInfo",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("companyNumber="+document.getElementById("companyNumber").value+
				 "&companyName="+document.getElementById("companyName").value+
				 "&status="+document.getElementById("status").value);
}