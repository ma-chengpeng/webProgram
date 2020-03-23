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
	xmlhttp.open("POST","/payProjectManager/queryPayProjectInfo",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("projectNumber="+document.getElementById("projectNumber").value+
				 "&projectName="+document.getElementById("projectName").value+
				 "&supplierNumber="+document.getElementById("supplierNumber").value+
				 "&status="+document.getElementById("status").value);
}

function changeStatus(obj){
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
			if (xmlhttp.responseText=="fail"){
				alert("供应商所属集团禁用，不可切换");
			}
			else{
				document.getElementById(obj.value).innerHTML=xmlhttp.responseText;
		
			}
		}
	}
	xmlhttp.open("POST","/payProjectManager/changeStatus",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("corpId="+obj.value);
}
