/**
 * Created by lu1 on 2017/1/6.
 */
var contact = require('./../contact.json');
// Twilio Credentials
var accountSid = 'ACab13f645307c4caf1a4f4fcbd3b03127';
var authToken = '93f6383b31b975083629944ec85f65d6';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
var FLUaddress = '13330 39th Ave, Flushing, NY 11354 (in front of Asian Jewels Seafood Restaurant) at 6:50 AM';
var CTTaddress = '108 Bowery, Manhattan, New York at 7:40 AM';
var BRKaddress = '6102 8th AVE, Brooklyn, New York, NY11220 at 6:50 AM';
var JCCaddress = '125 Eighteen St, Jersey City, New Jersey at 8:00 AM';
var EDIaddress = '253 New Jersey 18, East Brunswick, NJ08816 (in front of Voi Salon & Spa) at 8:55 AM';


function FLUMsg(groupNo) {
    return 'Hi, this is a reminder for your tour tomorrow. Please confirm the following information.' + '    ' +
    '1. Your tour guide is Sean Lu, his cell phone number is 9172087030' + '    ' +
    '2. Your Group number is ' + groupNo + '    ' +
    '3. Please get to your pickup location on time. ' + FLUaddress + '    ' +
    '4. Please checkin with the people from the L&L travel when you arrive the pickup location. They wear yellow jacket.' + '    ' +
    '5. Please take some cash with you, cause we will take CASH ONLY on the bus for the admission fee and service fee.' + '    ' +
    '6. Please use the restroom before you get on the bus and please do not take any cup drinks to the bus.' + '    ' +
    '7. The seat numbers will be given tomorrow.' + '    ' +

        '您好，这是您明天参团的提醒。请确认一下以下信息。' + '    ' +
    '1. 您的导游是Sean Lu，他的电话是9172087030。' + '    ' +
    '2. 您的组号是 ' + groupNo + '    ' +
    '3. 请您准时到达您的上车地点。 ' + FLUaddress + '    ' +
    '4. 到达后找穿黄色夹克衫的“纵横旅游”的导游登记上车' + '    ' +
    '5. 请您带一些现金，我们会在巴士上收取景点门票费用和服务费' + '    ' +
    '6. 请您上车前用好洗手间，并且不要带任何杯装饮料上车' + '    ' +
    '7. 座位号将在您明天上车时给您';
}

function CTTMsg(groupNo) {
    return 'Hi, this is a reminder for your tour tomorrow. Please confirm the following information.' + '    ' +
        '1. Your tour guide is Sean Lu, his cell phone number is 9172087030' + '    ' +
        '2. Your Group number is ' + groupNo + '    ' +
        '3. Please get to your pickup location on time. ' + CTTaddress + '    ' +
        '4. Please checkin with the people from the L&L travel when you arrive the pickup location. They wear yellow jacket.' + '    ' +
        '5. Please take some cash with you, cause we will take CASH ONLY on the bus for the admission fee and service fee.' + '    ' +
        '6. Please use the restroom before you get on the bus and please do not take any cup drinks to the bus.' + '    ' +
        '7. The seat numbers will be given tomorrow.' + '    ' +

        '您好，这是您明天参团的提醒。请确认一下以下信息。' + '    ' +
        '1. 您的导游是Sean Lu，他的电话是9172087030。' + '    ' +
        '2. 您的组号是 ' + groupNo + '    ' +
        '3. 请您准时到达您的上车地点。 ' + CTTaddress + '    ' +
        '4. 到达后找穿黄色夹克衫的“纵横旅游”的导游登记上车' + '    ' +
        '5. 请您带一些现金，我们会在巴士上收取景点门票费用和服务费' + '    ' +
        '6. 请您上车前用好洗手间，并且不要带任何杯装饮料上车' + '    ' +
        '7. 座位号将在您明天上车时给您';
}

function JCCMsg(groupNo) {
    return 'Hi, this is a reminder for your tour tomorrow. Please confirm the following information.' + '    ' +
        '1. Your tour guide is Sean Lu, his cell phone number is 9172087030' + '    ' +
        '2. Your Group number is ' + groupNo + '    ' +
        '3. Please get to your pickup location on time. ' + JCCaddress + '    ' +
        '4. Please checkin with the people from the L&L travel when you arrive the pickup location. They wear yellow jacket.' + '    ' +
        '5. Please take some cash with you, cause we will take CASH ONLY on the bus for the admission fee and service fee.' + '    ' +
        '6. Please use the restroom before you get on the bus and please do not take any cup drinks to the bus.' + '    ' +
        '7. The seat numbers will be given tomorrow.' + '    ' +

        '您好，这是您明天参团的提醒。请确认一下以下信息。' + '    ' +
        '1. 您的导游是Sean Lu，他的电话是9172087030。' + '    ' +
        '2. 您的组号是 ' + groupNo + '    ' +
        '3. 请您准时到达您的上车地点。 ' + JCCaddress + '    ' +
        '4. 到达后找穿黄色夹克衫的“纵横旅游”的导游登记上车' + '    ' +
        '5. 请您带一些现金，我们会在巴士上收取景点门票费用和服务费' + '    ' +
        '6. 请您上车前用好洗手间，并且不要带任何杯装饮料上车' + '    ' +
        '7. 座位号将在您明天上车时给您';
}

// function PARMsg(groupNo) {
//     return 'Parsippany pickup!' + '                     ' +
//         '(If you saw this message, please rely "OK”)' + '                 ' +
//         'Hello, this is Sean Lu, your tour guide for tomorrow. And your Group number is ' + groupNo + '. ' +
//         'Please get to 828 US-46, Parsippany, NJ 07054 at 9:00 AM. ' +
//         'We need a little time to check in. The bus will leave at 9:05AM on time. ' +
//         'Please use the restroom before you get there. And please do not bring CUP DRINKS to the bus. ' +
//         'PS: SPlease take some cash with you, cause we will take CASH ONLY on the bus for the admission fee and service fee. ' +
//         'Thank you! Have a good night! ' +
//         '您好，我是您明天去大瀑布的导游，我叫Sean。您的组号是' + groupNo + '。请您明早9：00准时到您的出发地点集合－－鑫鑫超市门口(828 US-46, Parsippany, NJ 07054)。' +
//         '到达上车地点后找穿黄色制服的“纵横旅游”的员工登记，他们会安排您等车。' +
//         '我们会在早上9:05准时出发。座位号我会在您明天看见我的时候给您。来之前请用好洗手间，我们的第一个休息站是出发1个半小时后。并且请不要带杯装饮料上车。' +
//         '注：因为我门会在巴士上收取景点门票费用和服务费，所以请您带好现金。';
// }

function BRKMsg(groupNo) {
    return 'Hi, this is a reminder for your tour tomorrow. Please confirm the following information.' + '    ' +
        '1. Your tour guide is Sean Lu, his cell phone number is 9172087030' + '    ' +
        '2. Your Group number is ' + groupNo + '    ' +
        '3. Please get to your pickup location on time. ' + BRKaddress + '    ' +
        '4. Please checkin with the people from the L&L travel when you arrive the pickup location. They wear yellow jacket.' + '    ' +
        '5. Please take some cash with you, cause we will take CASH ONLY on the bus for the admission fee and service fee.' + '    ' +
        '6. Please use the restroom before you get on the bus and please do not take any cup drinks to the bus.' + '    ' +
        '7. The seat numbers will be given tomorrow.' + '    ' +

        '您好，这是您明天参团的提醒。请确认一下以下信息。' + '    ' +
        '1. 您的导游是Sean Lu，他的电话是9172087030。 ' + '    ' +
        '2. 您的组号是 ' + groupNo + '    ' +
        '3. 请您准时到达您的上车地点。 ' + BRKaddress + '    ' +
        '4. 到达后找穿黄色夹克衫的“纵横旅游”的导游登记上车' + '    ' +
        '5. 请您带一些现金，我们会在巴士上收取景点门票费用和服务费' + '    ' +
        '6. 请您上车前用好洗手间，并且不要带任何杯装饮料上车' + '    ' +
        '7. 座位号将在您明天上车时给您';
}

function EDIMsg(groupNo) {
    return 'Hi, this is a reminder for your tour tomorrow. Please confirm the following information.' + '    ' +
        '1. Your tour guide is Sean Lu, his cell phone number is 9172087030' + '    ' +
        '2. Your Group number is ' + groupNo + '    ' +
        '3. Please get to your pickup location on time. ' + EDIaddress + '    ' +
        '4. Please checkin with the people from the L&L travel when you arrive the pickup location. They wear yellow jacket.' + '    ' +
        '5. Please take some cash with you, cause we will take CASH ONLY on the bus for the admission fee and service fee.' + '    ' +
        '6. Please use the restroom before you get on the bus and please do not take any cup drinks to the bus.' + '    ' +
        '7. The seat numbers will be given tomorrow.' + '    ' +

        '您好，这是您明天参团的提醒。请确认一下以下信息。' + '    ' +
        '1. 您的导游是Sean Lu，他的电话是9172087030。' + '    ' +
        '2. 您的组号是 ' + groupNo + '    ' +
        '3. 请您准时到达您的上车地点。 ' + EDIaddress + '    ' +
        '4. 到达后找穿黄色夹克衫的“纵横旅游”的导游登记上车' + '    ' +
        '5. 请您带一些现金，我们会在巴士上收取景点门票费用和服务费' + '    ' +
        '6. 请您上车前用好洗手间，并且不要带任何杯装饮料上车' + '    ' +
        '7. 座位号将在您明天上车时给您';
}

contact.forEach(function (con) {
    if (con.Pickup === 'FLU') {
        client.messages.create({
            to: con.Cell,
            from: "+19175806678 ",
            body: FLUMsg(con.GroupNumber)
        }, function (err, message) {
            console.log(message);
        });
    }
    if (con.Pickup === 'JCC') {
        client.messages.create({
            to: con.Cell,
            from: "+19175806678 ",
            body: JCCMsg(con.GroupNumber)
        }, function (err, message) {
            console.log(message);
        });
    }
    if (con.Pickup === 'CTT') {
        client.messages.create({
            to: con.Cell,
            from: "+19175806678 ",
            body: CTTMsg(con.GroupNumber)
        }, function (err, message) {
            console.log(message);
        });
    }
    if (con.Pickup === 'PAR') {
        client.messages.create({
            to: con.Cell,
            from: "+19175806678 ",
            body: PARMsg(con.GroupNumber)
        }, function (err, message) {
            console.log(message);
        });
    }
    if (con.Pickup === 'BRK') {
        client.messages.create({
            to: con.Cell,
            from: "+19175806678 ",
            body: BRKMsg(con.GroupNumber)
        }, function (err, message) {
            console.log(message);
        });
    }
    if (con.Pickup === 'EDI') {
        client.messages.create({
            to: con.Cell,
            from: "+19175806678 ",
            body: EDIMsg(con.GroupNumber)
        }, function (err, message) {
            console.log(message);
        });
    }
});


// client.messages.create({
//     to: "+19172087030",
//     from: "+19175806678 ",
//     body: "This is your test sms from twilio number"
// }, function(err, message) {
//     console.log(message);
// });
