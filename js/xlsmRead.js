var XLSX = require('xlsx');
var jsonfile = require('jsonfile');
var workbook=XLSX.readFile('/Users/lu1/Desktop/LL/0805.xlsx');
var sheetNames = workbook.SheetNames;
var worksheet = workbook.Sheets[sheetNames[0]];
var guide;


var guideSheetIndex = 0;
//从工作簿中找到‘GUIDE’这个工作表的位置
while(sheetNames[guideSheetIndex]!=='GUIDE'){
	guideSheetIndex++;
}
//把‘GUIDE’这个工作表的data付给guide这个变量
guide=workbook.Sheets[sheetNames[guideSheetIndex]];

var seanGuideIndex = 0;
//在‘GUIDE’这个工作表中找到SeanLu的位置
while(!guide['F'+seanGuideIndex] || guide['F'+seanGuideIndex]['v']!=='SEAN LU'){
	seanGuideIndex++;
}	

//找到SeanLu的司机信息，并付值给变量
var driverInfo = guide['D'+seanGuideIndex]['v'];

//找到SeanLu的团号
var tourcode = guide['C'+seanGuideIndex]['v'];
console.log(tourcode);
//把tourcode改成与工作表名相同
tourcode = tourcode[1] + tourcode[2] + '#' + tourcode[0];
console.log(tourcode);

//从工作簿中找到SeanLu当天的tour对应的工作表的位置，并付给tourInfo
tourSheetIndex = 0;
while (sheetNames[tourSheetIndex] !== tourcode){
	tourSheetIndex++;
}
var tourInfo = workbook.Sheets[sheetNames[tourSheetIndex]];

var index = 4;
var groupInfo = [];
while (tourInfo['A'+index]){
	var obj = {GroupNumber: tourInfo['A'+index]['v'],
				Agent: tourInfo['B' + index]['v'],
				ComformationNo: tourInfo['C' + index]['v'],
				Cell: tourInfo['D'+index]['v'],
				Passager: tourInfo['E' + index]['v'],
				Room: tourInfo['F' + index]['v'],
				Pickup: tourInfo['G' + index]['v']
				};
	//去掉电话号码中非数字的内容

	obj.Cell = obj.Cell.replace(/\D/g, "");
	var len = obj.Cell.length;
	// 从后面开始数10位号码
	obj.Cell = obj.Cell.substr(len - 10, 10);
	obj.Cell = '+1' + obj.Cell;
	console.log(typeof(obj.Cell));
	groupInfo.push(obj);
	index++;
}

var filename = 'contact.json';
// var contact = {"contactInfo" : groupInfo};
jsonfile.writeFile(filename, groupInfo, function (err) {
	console.error(err);
});





