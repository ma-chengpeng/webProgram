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
            resultToHtml+="<td>"+ results[Count].stu_id+"</td>";
            resultToHtml+="<td>"+ results[Count].collage+"</td>";
            resultToHtml+="<td>"+ results[Count].stu_name+"</td>";
            resultToHtml+="<td>"+ results[Count].department+"</td>";
            resultToHtml+="<td>"+ results[Count].major+"</td>";
            resultToHtml+="<td>"+ results[Count].grade+"</td>";
            resultToHtml+="<td>"+ results[Count].gender+"</td>";
            resultToHtml+="<td>"+ results[Count].status+"</td>";
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
        title=[ "学号","大学","学生姓名","学院","专业","年级","性别","在读状态"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].stu_id);
            item.push(results[Count].collage);
            item.push(results[Count].stu_name);
            item.push(results[Count].department);
            item.push(results[Count].major);
            item.push(results[Count].grade);
            item.push(results[Count].gender);
            item.push(results[Count].status);
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
                <th>集团号</th>\
                <th>集团名</th>\
                <th>启用状态</th>\
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
            resultToHtml+="<td>'"+ results[Count].group_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].group_name+"'</td>";
            resultToHtml+="<td>'"+ results[Count].status+"'</td>";
            resultToHtml+="<td>'"+ results[Count].remark+"'</td>";
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
    },//SEND

    saveResultAsxlsxForGroupManager:function(results){
        title=[ "集团号","集团名","启用状态","备注"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].group_id);
            item.push(results[Count].group_name);
            item.push(results[Count].status);
            item.push(results[Count].remark);
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
            resultToHtml+="<td>'"+ results[Count].corp_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_name+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_bank_account+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_account_contact1+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_account_contact1_phone+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_account_contact1_email+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_account_contact1_remark+"'</td>";
            resultToHtml+="<td>'"+ results[Count].set_account_type+"'</td>";
            resultToHtml+="<td>'"+ results[Count].backable+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_type+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_address+"'</td>";
            resultToHtml+="<td>'"+ results[Count].group_id+"'</td>";
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
    },//SEND

    savaResultAsxlsxForSupplierManager:function(results){
        title=[ "供应商号","供应商名称","银行账户","联系人","联系人电话","联系人邮箱","联系人备注","支付方式","可否退款","供应商类型","供应商地址","集团号"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].corp_id);
            item.push(results[Count].corp_name);
            item.push(results[Count].corp_bank_account);
            item.push(results[Count].corp_account_contact1);
            item.push(results[Count].corp_account_contact1_phone);
            item.push(results[Count].corp_account_contact1_email);
            item.push(results[Count].corp_account_contact1_remark);
            item.push(results[Count].set_account_type);
            item.push(results[Count].backable);
            item.push(results[Count].corp_type);
            item.push(results[Count].corp_address);
            item.push(results[Count].group_id);

            data.push(item);
            Count++;
        }

        let buffer = xlsx.build([
            { name: "user_info", data: data }
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
            <th>项目编号</th>\
            <th>项目名</th>\
            <th>单价</th>\
            <th>供应商号</th>\
            <th>状态</th>\
            <th>属性一</th>\
            <th>属性二</th>\
            <th>属性三</th>\
            <th>备注</th>\
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
            resultToHtml+="<td>'"+ results[Count].product_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].product_name+"'</td>";
            resultToHtml+="<td>'"+ results[Count].product_unit_price+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].product_status+"'</td>";
            resultToHtml+="<td>'"+ results[Count].attribute1+"'</td>";
            resultToHtml+="<td>'"+ results[Count].attribute2+"'</td>";
            resultToHtml+="<td>'"+ results[Count].attribute3+"'</td>";
            resultToHtml+="<td>'"+ results[Count].remark+"'</td>";
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
            item.push(results[Count].product_id);
            item.push(results[Count].product_name);
            item.push(results[Count].product_unit_price);
            item.push(results[Count].corp_id);
            item.push(results[Count].product_status);
            item.push(results[Count].attribute1);
            item.push(results[Count].attribute2);
            item.push(results[Count].attribute3);
            item.push(results[Count].remark);
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
            resultToHtml+="<td>'"+ results[Count].bill_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].bill_amount+"'</td>";
            resultToHtml+="<td>'"+ results[Count].create_time+"'</td>";
            resultToHtml+="<td>'"+ results[Count].stu_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].channel_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].bill_fail_reason+"'</td>";
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
        title=[ "订单号","订单总额","创建时间","学号","支付状态","失败原因"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].bill_id);
            item.push(results[Count].bill_amount);
            item.push(results[Count].creat_time);
            item.push(results[Count].stu_id);
            item.push(results[Count].pay_status);
            item.push(results[Count].bill_fail_reason);
            item.push(results[Count].channel_id);
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
            resultToHtml+="<td>'"+ results[Count].sequence_num+"'</td>";
            resultToHtml+="<td>'"+ results[Count].channel_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].stu_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].pay_status+"'</td>";
            resultToHtml+="<td>'"+ results[Count].bill_amount+"'</td>";
            resultToHtml+="<td>'"+ results[Count].bill_id+"'</td>";
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
            resultToHtml+="<td>'"+ results[Count].stock_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].stock_amount+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].corp_name+"'</td>";
            resultToHtml+="<td>'"+ results[Count].group_id+"'</td>";
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
            item.push(results[Count].stock_id);
            item.push(results[Count].stock_amount);
            item.push(results[Count].corp_id);
            item.push(results[Count].corp_name);
            item.push(results[Count].group_id);
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
            resultToHtml+="<td>'"+ results[Count].clear_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].stock_id+"'</td>";
            resultToHtml+="<td>'"+ results[Count].deposit_amount+"'</td>";
            resultToHtml+="<td>'"+ results[Count].deposit_status+"'</td>";
            resultToHtml+="<td>'"+ results[Count].remain_amount+"'</td>";
            resultToHtml+="<td>'"+ results[Count].remain_status+"'</td>";
            resultToHtml+="<td>'"+ results[Count].deposit_paytime+"'</td>";
            resultToHtml+="<td>'"+ results[Count].remain_paytime+"'</td>";
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
        title=[ "清算号","供货号","定金总额","定金状态","尾款状态","定金支付时间","尾款支付时间"]
        data=[]
        data.push(title);
        var Count=0;
        while(results[Count]!=undefined)
        {   
            item=[]
            item.push(results[Count].clear_id);
            item.push(results[Count].stock_id);
            item.push(results[Count].deposit_amount);
            item.push(results[Count].deposit_status);
            item.push(results[Count].remain_amount);
            item.push(results[Count].deposit_paytime);
            item.push(results[Count].remain_paytime);

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

    }

    

    
    
}
