/**
 * New node file
 */
var conversation = require('./conversationDB.js');
/*
conversation.insertConversationInitialReq({"clientId":"Siddharth","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","message":"Hi"},function(err,res){
	if(!err)
		console.log(res);
	else
		console.log("error");
});
*/

var json = [];
json.clientId = "Sid";
json.conversationID ="Siddharth1399813464304";
json.t1 = 1399813464304;



//conversation.insertConversationCustomer({"clientId":"Sid","customerName":"NGattuPALLY","conversationID":"Siddharth1399813464304","customerEmail":"tp1@gmail.com","category":"sf","message":"Hello"});

 
conversation.getConversationsGreaterThanT1(function(err,res){
	if(!err){
		console.log("Response :" + res);
	}
},json);

