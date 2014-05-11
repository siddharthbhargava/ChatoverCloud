/**
 * New node file
 */
var conversation = require('./conversationDB.js');
/*
conversation.insertConversationInitialReq({"clientId":"Sid","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","message":"Hi"},function(err,res){
	if(!err)
		console.log(res);
	else
		console.log("error");
});
*/


//conversation.insertConversationCustomer({"clientId":"Sid","customerName":"NGattuPALLY","conversationID":"Sid1399806924081","customerEmail":"tp1@gmail.com","category":"sf","message":"Hi"});

conversation.getConversationsGreaterThanT1(function(err,res){
	if(!err){
		res
		console.log(res);
	}
},{"t1":1399806924081,"clientId":"Sid","conversationID":"Sid1399806924081"});
