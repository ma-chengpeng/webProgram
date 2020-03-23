const xlsx = require('node-xlsx')
const fs = require('fs')
module.exports={

    sendResultForStudentInfoManager: function(results,response)
    {
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
                <th>学号</th>\
                <th>学校</th>\
                <th>姓名</th>\
                <th>院系</th>\
                <th>专业</th>\
                <th>性别</th>\
                <th>年级</th>\
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
            resultToHtml+="<td>"+ results[Count].学号+"</td>";
            resultToHtml+="<td>"+ results[Count].学校+"</td>";
            resultToHtml+="<td>"+ results[Count].姓名+"</td>";
            resultToHtml+="<td>"+ results[Count].院系+"</td>";
            resultToHtml+="<td>"+ results[Count].专业+"</td>";
            resultToHtml+="<td>"+ results[Count].年级+"</td>";
            resultToHtml+="<td>"+ results[Count].性别+"</td>";
            resultToHtml+="<td>"+ results[Count].在读状态+"</td>";
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
    },//SEND

    saveResultAsxlsxForStudentInfoManager:function(results){
        title=[ "学号","学校","姓名","院系","专业","性别","年级","在读状态"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].学号);
            item.push(results[Count].学校);
            item.push(results[Count].姓名);
            item.push(results[Count].院系);
            item.push(results[Count].专业);
            item.push(results[Count].性别);
            item.push(results[Count].年级);
            item.push(results[Count].在读状态);
            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "user_info", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/user_info.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },
    
    sendResultForGroupManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
                <th>集团编号</th>\
                <th>集团名称</th>\
                <th>状态</th>\
                <th>备注</th>\
                <th>切换启用状态</th>\
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
            resultToHtml+="<td>"+ results[Count].集团编号+"</td>";
            resultToHtml+="<td>"+ results[Count].集团名称+"</td>";
            resultToHtml+="<td id= '"+ results[Count].集团编号  +"' >"+ results[Count].状态+"</td>";
            resultToHtml+="<td>"+ results[Count].备注+"</td>";
            resultToHtml+="<td><button type= '"+ "button" +"' onclick= '"+ "changeStatus(this)" +"' value= '"+results[Count].集团编号+"' >切换</button></td>";
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
    },//SEND

    saveResultAsxlsxForGroupManager:function(results){
        title=[ "集团编号","集团名称","备注","状态"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].集团编号);
            item.push(results[Count].集团名称);
            item.push(results[Count].备注);
            item.push(results[Count].状态);
            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "group_info", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/group_info.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForSupplierManager:function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>供应商号</th>\
            <th>供应商名称</th>\
            <th>银行账户</th>\
            <th>联系人</th>\
            <th>联系人电话</th>\
            <th>联系人邮箱</th>\
            <th>联系人备注</th>\
            <th>支付方式</th>\
            <th>可否退款</th>\
            <th>供应商类型</th>\
            <th>供应商地址</th>\
            <th>集团号</th>\
            <th>状态</th>\
            <th>切换启用状态</th>\
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
            resultToHtml+="<td>"+ results[Count].商户代码+"</td>";
            resultToHtml+="<td>"+ results[Count].商户名称+"</td>";
            resultToHtml+="<td>"+ results[Count].商户银行账号+"</td>";
            resultToHtml+="<td>"+ results[Count].商户对账联系人1+"</td>";
            resultToHtml+="<td>"+ results[Count].商户对账联系人1电话+"</td>";
            resultToHtml+="<td>"+ results[Count].商户对账联系人1邮箱+"</td>";
            resultToHtml+="<td>"+ results[Count].商户对账联系人1备注+"</td>";
            resultToHtml+="<td>"+ results[Count].结算类型+"</td>";
            resultToHtml+="<td>"+ results[Count].是否支持退货+"</td>";
            resultToHtml+="<td>"+ results[Count].商户类型+"</td>";
            resultToHtml+="<td>"+ results[Count].商户地址+"</td>";
            resultToHtml+="<td>"+ results[Count].集团编号+"</td>";
            resultToHtml+="<td id='"+ results[Count].集团编号 +"'>"+ results[Count].状态+"</td>";
            resultToHtml+="<td><button type= '"+ "button" +"' onclick= '"+ "changeStatus(this)" +"' value= '"+results[Count].集团编号+"' >切换</button></td>";
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
    },//SEND

    savaResultAsxlsxForSupplierManager:function(results){
        title=[ "商户代码","商户名称","商户银行账号","商户对账联系人","联系人电话","联系人邮箱","联系人备注","结算类型","是否支持退货","商户类型","集团编号","商户地址","状态"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].商户代码);
            item.push(results[Count].商户名称);
            item.push(results[Count].商户银行账号);
            item.push(results[Count].商户对账联系人1);
            item.push(results[Count].商户对账联系人1电话);
            item.push(results[Count].商户对账联系人1邮箱);
            item.push(results[Count].商户对账联系人1备注);
            item.push(results[Count].结算类型);
            item.push(results[Count].是否支持退货);
            item.push(results[Count].商户类型);
            item.push(results[Count].商户地址);
            item.push(results[Count].集团编号);
            item.push(results[Count].状态);

            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "corp_info", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/corp_info.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForPayProjectManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>商品编号</th>\
            <th>商品名称</th>\
            <th>单价</th>\
            <th>商户代码</th>\
            <th>商品状态</th>\
            <th>属性一</th>\
            <th>属性二</th>\
            <th>属性三</th>\
            <th>备注</th>\
            <th>切换商品状态</th>\
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
            resultToHtml+="<td>"+ results[Count].商品编号+"</td>";
            resultToHtml+="<td>"+ results[Count].商品名称+"</td>";
            resultToHtml+="<td>"+ results[Count].商品单价+"</td>";
            resultToHtml+="<td>"+ results[Count].商户代码+"</td>";
            resultToHtml+="<td id='"+ results[Count].商品编号+"'>"+ results[Count].商品状态+"</td>";
            resultToHtml+="<td>"+ results[Count].属性1+"</td>";
            resultToHtml+="<td>"+ results[Count].属性2+"</td>";
            resultToHtml+="<td>"+ results[Count].属性3+"</td>";
            resultToHtml+="<td>"+ results[Count].备注+"</td>";
            resultToHtml+="<td><button type= '"+ "button" +"' onclick= '"+ "changeStatus(this)" +"' value= '"+results[Count].商品编号+"' >切换</button></td>";
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
    },//SEND

    savaResultAsxlsxForPayProjectManager:function(results){
        title=[ "项目编号","项目名称","单价","供应商号","状态","属性一","属性二","属性三","备注"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].商品编号);
            item.push(results[Count].商品名称);
            item.push(results[Count].商品单价);
            item.push(results[Count].商户代码);
            item.push(results[Count].商品状态);
            item.push(results[Count].属性1);
            item.push(results[Count].属性2);
            item.push(results[Count].属性3);
            item.push(results[Count].备注);
            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "product_list", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/product_list.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForPayOrderManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>订单号</th>\
            <th>订单总额</th>\
            <th>创建时间</th>\
            <th>学号</th>\
            <th>支付状态</th>\
            <th>支付渠道</th>\
            <th>失败原因</th>\
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
            resultToHtml+="<td>"+ results[Count].订单编号+"</td>";
            resultToHtml+="<td>"+ results[Count].交易金额+"</td>";
            resultToHtml+="<td>"+ results[Count].创建时间+"</td>";
            resultToHtml+="<td>"+ results[Count].学号+"</td>";
            resultToHtml+="<td>"+ results[Count].订单支付状态+"</td>";
            resultToHtml+="<td>"+ results[Count].支付渠道+"</td>";
            resultToHtml+="<td>"+ results[Count].支付时间+"</td>";
            Count++;
        }
        resultToHtml+="</tbody>\
                    </table>";
        if(isGetInformation==false)
        {
            resultToHtml="<h1 class='"+"test"+"'>未查询到相关信息</h1>"
        }
        response.send(resultToHtml);
    
    },//SEND

    savaResultAsxlsxForPayOrderManager:function(results){
        title=[ "订单号","订单总额","创建时间","学号","支付状态","失败原因","支付渠道"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].订单编号);
            item.push(results[Count].交易金额);
            item.push(results[Count].创建时间);
            item.push(results[Count].学号);
            item.push(results[Count].订单支付状态);
            item.push(results[Count].支付失败原因);
            item.push(results[Count].支付渠道);
            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "bill_info", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/bill_info.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForPayRecordManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>流水号</th>\
            <th>支付渠道</th>\
            <th>学号</th>\
            <th>支付状态</th>\
            <th>总额</th>\
            <th>订单号</th>\
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
            resultToHtml+="<td>"+ results[Count].sequence_num+"</td>";
            resultToHtml+="<td>"+ results[Count].channel_id+"</td>";
            resultToHtml+="<td>"+ results[Count].stu_id+"</td>";
            resultToHtml+="<td>"+ results[Count].pay_status+"</td>";
            resultToHtml+="<td>"+ results[Count].bill_amount+"</td>";
            resultToHtml+="<td>"+ results[Count].bill_id+"</td>";
            Count++;
        }
        resultToHtml+="</tbody>\
                    </table>";
        if(isGetInformation==false)
        {
            resultToHtml="<h1 class='"+"test"+"'>未查询到相关信息</h1>"
        }
        response.send(resultToHtml);
    },//SEND

    savaResultAsxlsxForPayRecordManager:function(results){
        title=[ "流水号","支付渠道","学号","支付状态","总额","订单号"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].sequence_num);
            item.push(results[Count].channel_id);
            item.push(results[Count].stu_id);
            item.push(results[Count].pay_status);
            item.push(results[Count].bill_amount);
            item.push(results[Count].bill_id);
            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "all_pay_list", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/all_pay_list.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForGoodsManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>供货号</th>\
            <th>供货总额</th>\
            <th>供应商号</th>\
            <th>供应商名</th>\
            <th>集团号</th>\
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
            resultToHtml+="<td>"+ results[Count].采购编号+"</td>";
            resultToHtml+="<td>"+ results[Count].金额+"</td>";
            resultToHtml+="<td>"+ results[Count].供应商商户号+"</td>";
            resultToHtml+="<td>"+ results[Count].供应商名称+"</td>";
            resultToHtml+="<td>"+ results[Count].集团编号+"</td>";
            Count++;
        }
        resultToHtml+="</tbody>\
                    </table>";
        if(isGetInformation==false)
        {
            resultToHtml="<h1 class='"+"test"+"'>未查询到相关信息</h1>"
        }
        response.send(resultToHtml);
    },//SEND

    savaResultAsxlsxForGoodsManager:function(results){
        title=[ "供货号","供货总额","供货商号","供应商名","集团号"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].采购编号);
            item.push(results[Count].金额);
            item.push(results[Count].供应商商户号);
            item.push(results[Count].供应商名称);
            item.push(results[Count].集团编号);
            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "stock_list", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/stock_list.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForClearManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>清算号</th>\
            <th>供货号</th>\
            <th>定金总额</th>\
            <th>定金状态</th>\
            <th>尾款总额</th>\
            <th>尾款状态</th>\
            <th>定金支付时间</th>\
            <th>尾款支付时间</th>\
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
            resultToHtml+="<td>"+ results[Count].清算号+"</td>";
            resultToHtml+="<td>"+ results[Count].采购编号+"</td>";
            resultToHtml+="<td>"+ results[Count].定金金额+"</td>";
            resultToHtml+="<td>"+ results[Count].定金状态+"</td>";
            resultToHtml+="<td>"+ results[Count].尾款+"</td>";
            resultToHtml+="<td>"+ results[Count].尾款状态+"</td>";
            resultToHtml+="<td>"+ results[Count].定金支付时间+"</td>";
            resultToHtml+="<td>"+ results[Count].尾款支付期限+"</td>";
            Count++;
        }
        resultToHtml+="</tbody>\
                    </table>";
        if(isGetInformation==false)
        {
            resultToHtml="<h1 class='"+"test"+"'>未查询到相关信息</h1>"
        }
        response.send(resultToHtml);
    },//SEND

    savaResultAsxlsxForClearManager:function(results){
        title=[ "清算号","供货号","定金总额","定金状态","尾款总额","尾款状态","定金支付时间","尾款支付时间"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].清算号);
            item.push(results[Count].采购编号);
            item.push(results[Count].定金金额);
            item.push(results[Count].定金状态);
            item.push(results[Count].尾款);
            item.push(results[Count].尾款状态);
            item.push(results[Count].定金支付时间);
            item.push(results[Count].尾款支付期限);

            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "clear_info", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/clear_info.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })

    },

    sendResultForScholarshipManager: function(results,response){
        var resultToHtml=
        " <table class='"+"inquire-content"+"'>\
        <thead>\
            <tr>\
            <th>发放编号</th></th>\
            <th>学号</th>\
            <th>奖学金类型</th>\
            <th>名称</th>\
            <th>等级</th>\
            <th>金额</th>\
            <th>资金发放时间</th>\
            <th>发放渠道</th>\
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
            resultToHtml+="<td>"+ results[Count].发放编号+"</td>";
            resultToHtml+="<td>"+ results[Count].学号+"</td>";
            resultToHtml+="<td>"+ results[Count].奖学金类型+"</td>";
            resultToHtml+="<td>"+ results[Count].名称+"</td>";
            resultToHtml+="<td>"+ results[Count].等级+"</td>";
            resultToHtml+="<td>"+ results[Count].金额+"</td>";
            resultToHtml+="<td>"+ results[Count].资金发放时间+"</td>";
            resultToHtml+="<td>"+ results[Count].发放渠道+"</td>";
            Count++;
        }
        resultToHtml+="</tbody>\
                    </table>";
        if(isGetInformation==false)
        {
            resultToHtml="<h1 class='"+"test"+"'>未查询到相关信息</h1>"
        }
        response.send(resultToHtml);
    },//SEND
    
    saveResultAsxlsxForScholarshipManager:function(results){
        title=[ "发放编号","学号","奖学金类型","名称","等级","金额","资金发放时间","发放渠道"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].发放编号);
            item.push(results[Count].学号);
            item.push(results[Count].奖学金类型);
            item.push(results[Count].名称);
            item.push(results[Count].等级);
            item.push(results[Count].金额);
            item.push(results[Count].资金发放时间);
            item.push(results[Count].发放渠道);

            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "scholarship_Info", data: data }
        ])
     
        fs.writeFile(__dirname + "/exportFiles/scholarship_info.xlsx", buffer, function (err) {
            if (err) throw err;
            console.log('Write to excel has successed');
        })
    }
}
