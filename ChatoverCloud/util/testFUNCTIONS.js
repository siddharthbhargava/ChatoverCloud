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
*/

/*var json = [];
json.clientId="10010";
json.password="trial";

client.validateClientLogin(function(err,res){
	if(err){
		//console.log(err);
	}
	else{
		console.log(res);
	}
},json);
*/

client.insertClient({"clientId":"chitti","password":"nissan","clientName":"Sir Siddhartha Bhargava","email":"chitti@God.com","domain":"www.GODRULES.com","clientFlag":"offline" });
client.insertClient({"clientId":"muffi","password":"honda","clientName":"Muffadal Daginawala","email":"baa@bigDADY.com","domain":"www.desiBABA.com","clientFlag":"offline"});
client.insertClient({"clientId":"dhiru","password":"jeep","clientName":"Divyanshu Abhichandani","email":"proprietor@TuxAndBucks.com","domain":"www.TuxAndBucks.com","clientFlag":"offline"});
client.insertClient({"clientId":"sai","password":"chevrolet","clientName":"Saideepak Budaraju","email":"chaprasi@ghanta.com","domain":"www.ghanta.com","clientFlag":"offline"});
client.insertClient({"clientId":"gattu","password":"dodge","clientName":"Navya Gattupalli","email":"CEO@GlobalNetworks.org","domain":"www.GlobalNetworks.org","clientFlag":"online"});

/*
clientId="10010";
password="trial";

client.validateClientLogin(function(err,res){
	if(err){
		//console.log(err);
	}
	else{
		console.log(res);
	}
},clientId,password);
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
//{"clientId":"10010","password":"trial"}