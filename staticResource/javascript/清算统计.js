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
	xmlhttp.open("POST","/clearManager/queryClearInfo",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("clearNumber="+document.getElementById("clearNumber").value+
				 "&goodsNumber="+document.getElementById("goodsNumber").value+
				 "&earnestStatus="+document.getElementById("earnestStatus").value+
				 "&finalPaymentStatus="+document.getElementById("finalPaymentStatus").value+
				 "&finalPaymentData="+document.getElementById("finalPaymentData").value+
				 "&earnestData="+document.getElementById("earnestData").value);
}