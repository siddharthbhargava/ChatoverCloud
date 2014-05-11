var conversation = require('./conversationDB.js');

/*
var abc = require('./CategoriesDB.js');

abc.findCategoriesDBByClient(function(res,err){
	if(!err){
		
		var sai=res.toArray();
		console.log(sai[0]);
		//console.log(res);
	}
},"dhiru")
*/
/*
var d = new Date();
var timeStamp = d.getTime()
console.log("time in Milliseconds since midnight jan 1st 1970: "+timeStamp);
		 
		 
var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}), "$1");
console.log("Time in hh:mm:ss "+myDate);

miliseconds = timeStamp

seconds = miliseconds/1000
console.log(Time.at(seconds).strftime("%H:%M:%S"));
		 
*/		 

/*
conversation.insertConversationInitialReq({"clientId":"NGattuPALLY","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","message":"Hi"},function(err,res){
	if(!err)
		console.log(res);
	else
		console.log("error");
});

*/

//conversation.insertConversationClient({"customerName":"NGattuPALLY","conversationID":"NavyaGattuPALLY1399806476705","customerEmail":"tp1@gmail.com","category":"sf","message":"Hi"});

conversation.getConversationsGreaterThanT1(function(err,res){
	if(!err){
		res
		console.log(res);
	}
},{"t1":1399806672177,"clientId":"GATTU"});
