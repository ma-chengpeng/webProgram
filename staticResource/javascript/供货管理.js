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
	xmlhttp.open("POST","/goodsManager/queryGoodsInfo",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("goodsNumber="+document.getElementById("goodsNumber").value+
				 "&groupNumber="+document.getElementById("groupNumber").value+
				 "&supplierNumber="+document.getElementById("supplierNumber").value+
				 "&supplierName="+document.getElementById("supplierName").value)
}