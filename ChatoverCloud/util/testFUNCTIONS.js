var client = require('./clientDB.js');

var conversation = require('./conversationDB.js');

var knowledge = require('./knowledgeDB.js');

var offline = require('./offlineDB.js');

var categories = require('./CategoriesDB.js');

/*
 * CLIENT Database Schema
 * The above JSON object passed as a parameter must be of the form:
 * {"clientId":value,
 * 	"password":value,
 *  "clientName":value,
 *  "email":value,
 *  "domain":value,
 *  "clientFlag":value}
 */

//client.updateClient({"clientId":"10001","password":"trial","clientName":"Demo","email":"hello@ask.com","domain":"www.logIn.com","clientFlag":"online"},{"clientId":"10001","password":"trial","clientName":"Demo","email":"hello@ask.com","domain":"www.logIn.com","clientFlag":"offline"})
//client.insertClient({"clientId":"10010","password":"trial","clientName":"Demo","email":"hello@ask.com","domain":"www.example.com","clientFlag":"offline"})
//working//client.removeClient({"clientId":"10001","password":"trial","clientName":"Demo","email":"hello@ask.com","domain":"www.logIn.com","clientFlag":"offline"});

/*working
client.findClientByID(function(err,res){
	if(err){
		console.log("Error.");
	}
	else{
		console.log(res);
	}
},"10001");
*/

//client.setClientFlag({"clientId":"10005","clientFlag":"online"});

/*
client.getClientFlag(function(err,res){
	if(err){
		console.log("Error.");
	}
	else{
		console.log(res);
	}
},"10005");
*/

/*
 * 
client.validateClientLogin(function(err,res){
	if(err){
		//console.log(err);
	}
	else{
		console.log(res);
	}
},{"clientId":"10010","password":"trial"});


 */


/*
 * CONVERSATION Database Schema
 * The above JSNON object must be of the form:
 * {"clientID":value,
 * 	"customerName":value,
 * 	"customerEmail":value,
 * 	"category":value,
 * 	"conversationID":value,
 *  "timeStamp":value,
 *  "message":value}
 */


//Conversations Data
/*
conversation.insertConversationInitialReq({"clientId":"abcdefgh","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","timeStamp":"01:10","message":"Hi"},function(res,err){
	if(!err)
		console.log(res);
});

conversation.insertConversationRegular({"clientId":"abcdefgh","customerName":"starbucks","customerEmail":"hahaha@yahoo.com","category":"sj","timeStamp":"01:11","message":"Hello"});
*/


/*
 * 
conversation.findConversationByClient(function(err,res){
	if(!err)
		console.log(res);
	else
		console.log(err);
},"gattu");

 */
/*
conversation.findConversationByClient(function(err,res){
	if(!err)
		console.log(res);
	else
		console.log(err);
},"gattu");
*/
