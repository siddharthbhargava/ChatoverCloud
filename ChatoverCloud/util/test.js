var test = require('./CategoriesDB.js');

var client = require('./clientDB.js');

var conversation = require('./conversationDB.js');

var knowledge = require('./knowledgeDB.js');

var offline = require('./offlineDB.js');

//categories Data

test.insertCategoriesDB({"clientID":"chitti","category":"nissan"});
test.insertCategoriesDB({"clientID":"chitti","category":"honda"});
test.insertCategoriesDB({"clientID":"chitti","category":"jeep"});
test.insertCategoriesDB({"clientID":"chitti","category":"chevrolet"});
test.insertCategoriesDB({"clientID":"chitti","category":"dodge"});

test.insertCategoriesDB({"clientID":"gattu","category":"tulley"});
test.insertCategoriesDB({"clientID":"gattu","category":"starbucks"});
test.insertCategoriesDB({"clientID":"gattu","category":"pitts"});
test.insertCategoriesDB({"clientID":"gattu","category":"madras cafe"});
test.insertCategoriesDB({"clientID":"gattu","category":"Andhra Bhavan"});

test.insertCategoriesDB({"clientID":"muffi","category":"malbro red"});
test.insertCategoriesDB({"clientID":"muffi","category":"malbro lights"});
test.insertCategoriesDB({"clientID":"muffi","category":"benson & hedges premium"});
test.insertCategoriesDB({"clientID":"muffi","category":"benson & hedges luxury"});
test.insertCategoriesDB({"clientID":"muffi","category":"L&M Reds"});

test.insertCategoriesDB({"clientID":"dhiru","category":"cotton"});
test.insertCategoriesDB({"clientID":"dhiru","category":"silk"});
test.insertCategoriesDB({"clientID":"dhiru","category":"Egyptian Premium Blended Cotton"});
test.insertCategoriesDB({"clientID":"dhiru","category":"t-Shirts"});
test.insertCategoriesDB({"clientID":"dhiru","category":"Cuban Cigars"});

test.insertCategoriesDB({"clientID":"sai","category":"Vizag"});
test.insertCategoriesDB({"clientID":"sai","category":"Madras"});
test.insertCategoriesDB({"clientID":"sai","category":"Bharuch"});
test.insertCategoriesDB({"clientID":"sai","category":"Mumbai"});
test.insertCategoriesDB({"clientID":"sai","category":"San Jose"});



/*
 * The above JSON object passed as a parameter must be of the form:
 * {"clientID":value,
 * 	"password":value,
 *  "clientName":value,
 *  "email":value,
 *  "domain":value,
 *  "clientFlag":value}
 
 */
//Clients Mock Data

client.insertClient({"clientId":"chitti","password":"nissan","clientName":"Sir Siddhartha Bhargava","email":"chitti@God.com","domain":"www.GODRULES.com","clientFlag":"offline" });
client.insertClient({"clientId":"muffi","password":"honda","clientName":"Muffadal Daginawala","email":"baa@bigDADY.com","domain":"www.desiBABA.com","clientFlag":"offline"});
client.insertClient({"clientId":"dhiru","password":"jeep","clientName":"Divyanshu Abhichandani","email":"proprietor@TuxAndBucks.com","domain":"www.TuxAndBucks.com","clientFlag":"offline"});
client.insertClient({"clientId":"sai","password":"chevrolet","clientName":"Saideepak Budaraju","email":"chaprasi@ghanta.com","domain":"www.ghanta.com","clientFlag":"offline"});
client.insertClient({"clientId":"gattu","password":"dodge","clientName":"Navya Gattupalli","email":"CEO@GlobalNetworks.org","domain":"www.GlobalNetworks.org","clientFlag":"online"});


/*
 * The above JSNON object must be of the form:
 * {"clientID":value,
 * 	"customerName":value,
 * 	"customerEmail":value,
 * 	"category":value,
 * 	"conversationID":value,
 *  "timeStamp":value,
 *  "message":value,
 *  "unreadFlag":value}
 */

//Conversations Data
/*
conversation.insertConversationInitialReq({"clientId":"abcdefgh","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","timeStamp":"01:10","message":"Hi"},function(res,err){
	if(!err)
		console.log(res);
});
conversation.insertConversationRegular({"clientId":"abcdefgh","customerName":"starbucks","customerEmail":"hahaha@yahoo.com","category":"sj","timeStamp":"01:11","message":"Hello"});
*/

conversation.insertConversation({"clientID":"gattu","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","conversationID":"1001","timeStamp":"01:10","message":"Hi"});
conversation.insertConversation({"clientID":"gattu","customerName":"starbucks","customerEmail":"hahaha@yahoo.com","category":"sj","conversationID":"1002","timeStamp":"01:11","message":"Hello"});
conversation.insertConversation({"clientID":"gattu","customerName":"pitts","customerEmail":"wtf@lmao.inc","category":"ny","conversationID":"1003","timeStamp":"01:12","message":"Wassup?"});
conversation.insertConversation({"clientID":"gattu","customerName":"madras cafe","customerEmail":"baa@hotmail.com","category":"la","conversationID":"1004","timeStamp":"01:13","message":"Como EsTas?"});
conversation.insertConversation({"clientID":"gattu","customerName":"Andhra Bhavan","customerEmail":"duude@awesome.com","category":"ind","conversationID":"1005","timeStamp":"01:14","message":"Adios"});

//conversation.insertConversationInitialReq({"clientId":"abcdefgh","customerName":"tully","customerEmail":"tp1@gmail.com","category":"sf","timeStamp":"01:10","message":"Hi"},function(res,err){
//	if(!err)
//		console.log(res);
//});
//conversation.insertConversationRegular({"clientId":"abcdefgh","customerName":"starbucks","customerEmail":"hahaha@yahoo.com","category":"sj","timeStamp":"01:11","message":"Hello"});

//conversation.insertConversation({"clientID":"gattu","customerName":"pitts","customerEmail":"wtf@lmao.inc","category":"ny","conversationID":"1003","timeStamp":"01:12","message":"Wassup?"});
//conversation.insertConversation({"clientID":"gattu","customerName":"madras cafe","customerEmail":"baa@hotmail.com","category":"la","conversationID":"1004","timeStamp":"01:13","message":"Como EsTas?"});
//conversation.insertConversation({"clientID":"gattu","customerName":"Andhra Bhavan","customerEmail":"duude@awesome.com","category":"ind","conversationID":"1005","timeStamp":"01:14","message":"Adios"});



/*
 * The above JSON object must be of the form:
 * {"clientID":value,
 * 	"keywords":["value1","value2"...],
 *  "questionCategory":value,
 * 	"question":value,
 * 	"answer":value
 */

//KnowledgeDB Data
/*
knowledge.insertKnowledgeDBMessage({"clientID":"gattu","keywords":"haan kya","questionCategory":"timepass","question":"what?","answer":"haan!"});
knowledge.insertKnowledgeDBMessage({"clientID":"gattu","keywords":"kya be","questionCategory":"timepass","question":"hello?","answer":"haaaan!"});
*/
/*
 * The above JSNON object must be of the form:
 * {"clientID":value,
 * 	"timeStamp":value,
 *  "customerEmail":value,
 *  "unreadFlag":value,
 *  "message":value}
 */
/*
offline.insertOfflineMessage({"clientID":"gattu","timeStamp":"02:00","customerEmail":"tp1@gmail.com","unreadFlag":"0","message":"bro? this aint working!"});
offline.insertOfflineMessage({"clientID":"gattu","timeStamp":"02:01","customerEmail":"tp2@gmail.com","unreadFlag":"0","message":"WTF is wrong with my brain?!"});
offline.insertOfflineMessage({"clientID":"gattu","timeStamp":"02:02","customerEmail":"tp3@gmail.com","unreadFlag":"0","message":"Hey? How you doin?!"});
offline.insertOfflineMessage({"clientID":"gattu","timeStamp":"02:03","customerEmail":"tp4@gmail.com","unreadFlag":"0","message":"ah Hoi!"});
offline.insertOfflineMessage({"clientID":"gattu","timeStamp":"02:04","customerEmail":"tp5@gmail.com","unreadFlag":"0","message":"So what are we talking about tonight?"});
offline.insertOfflineMessage({"clientID":"gattu","timeStamp":"02:05","customerEmail":"tp6@gmail.com","unreadFlag":"0","message":"How much is the fare to Mars?"});
*/




conversation.findConversationByClient(function(res,err){
	if(!err)
		console.log(res);
	else
		console.log(err);

},"gattu");



