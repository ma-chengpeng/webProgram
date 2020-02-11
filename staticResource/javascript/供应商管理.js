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
	xmlhttp.open("POST","/supplierManager/querySupplierInfo",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("supplierNumber="+document.getElementById("supplierNumber").value+
				 "&supplierName="+document.getElementById("supplierName").value+
				 "&contactName="+document.getElementById("contactName").value+
				 "&supplierType="+document.getElementById("supplierType").value+
				 "&groupNumber="+document.getElementById("groupNumber").value);	 
}
