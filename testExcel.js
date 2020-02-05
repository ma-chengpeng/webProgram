const xlsx = require('node-xlsx')
const fs = require('fs')
const join = require('path').join

var list=xlsx.parse("./test.xlsx");
console.log(list[0])
 
function writeExcel(sheet, fileName, sheetName) {
 
    let buffer = xlsx.build([
        { name: sheetName, data: sheet }
    ])
 
    fs.writeFile(fileName, buffer, function (err) {
        if (err) throw err;
        console.log('Write to excel has successed');
    })
}
 
writeExcel(list[0].data,"test1.xlsx","sheet1")
