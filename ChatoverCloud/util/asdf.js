/**
 * New node file
 */
var conversation = require('./conversationDB.js');
<<<<<<< HEAD
/*
conversation.insertConversationInitialReq({"clientId":"Siddharth","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","message":"Hi"},function(err,res){
	if(!err)
		console.log(res);
	else
		console.log("error");
});
*/
=======
//
//conversation.insertConversationInitialReq({"clientId":"gattu","customerName":"gattu","customerEmail":"tp1@gmail.com","category":"sf","message":"first"},function(err,res){
//	if(!err)
//		console.log(res);
//	else
//		console.log("error");
//});
>>>>>>> FETCH_HEAD

var json = [];
json.clientId = "Sid";
json.conversationID ="Siddharth1399813464304";
json.t1 = 1399813464304;


<<<<<<< HEAD

//conversation.insertConversationCustomer({"clientId":"Sid","customerName":"NGattuPALLY","conversationID":"Siddharth1399813464304","customerEmail":"tp1@gmail.com","category":"sf","message":"Hello"});

 
conversation.getConversationsGreaterThanT1(function(err,res){
	if(!err){
		console.log("Response :" + res);
	}
},json);

=======
//conversation.insertConversationCustomer({"clientId":"gattu","customerName":"NGattuPALLY","conversationID":"gattu1399808523875","customerEmail":"tp1@gmail.com","category":"sf","message":"third"});

//conversation.getConversationsGreaterThanT1(function(err,res){
//	if(!err){
//		res
//		console.log(res);
//	}
//},{"t1":1399806924081,"clientId":"gattu","conversationID":"Sid1399806924081"});
>>>>>>> FETCH_HEAD
