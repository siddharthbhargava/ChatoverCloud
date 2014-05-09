var test = require('./CategoriesDB.js');

var client = require('./clientDB.js');

var conversation = require('./conversationDB.js');

var knowledge = require('./knowledgeDB.js');

var offline = require('./offlineDB.js');

//categories Data

/*test.insertCategoriesDB({"clientID":"chitti","category":"nissan"});
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

*/

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

client.insertClient({"clientID":"chitti","password":"nissan","clientName":"Sir Siddhartha Bhargava","email":"chitti@God.com","domain":"www.GODRULES.com","clientFlag":"offline" });
client.insertClient({"clientID":"muffi","password":"honda","clientName":"Muffadal Daginawala","email":"baa@bigDADY.com","domain":"www.desiBABA.com","clientFlag":"offline"});
client.insertClient({"clientID":"dhiru","password":"jeep","clientName":"Divyanshu Abhichandani","email":"proprietor@TuxAndBucks.com","domain":"www.TuxAndBucks.com","clientFlag":"offline"});
client.insertClient({"clientID":"sai","password":"chevrolet","clientName":"Saideepak Budaraju","email":"chaprasi@ghanta.com","domain":"www.ghanta.com","clientFlag":"offline"});
client.insertClient({"clientID":"gattu","password":"dodge","clientName":"Navya Gattupalli","email":"CEO@GlobalNetworks.org","domain":"www.GlobalNetworks.org","clientFlag":"offline"});



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

conversation.insertConversation({"clientID":"gattu","customerName":"tully","customerEmail":"value","category":"value","conversationID":"value","timeStamp":"value","message":"value"});
conversation.insertConversation({"clientID":"gattu","customerName":"starbucks","customerEmail":"value1","category":"value1","conversationID":"value1","timeStamp":"value1","message":"value1"});
conversation.insertConversation({"clientID":"gattu","customerName":"pitts","customerEmail":"value2","category":"value2","conversationID":"value2","timeStamp":"value2","message":"value2"});
conversation.insertConversation({"clientID":"gattu","customerName":"madras cafe","customerEmail":"value3","category":"value3","conversationID":"value3","timeStamp":"value3","message":"value3"});
conversation.insertConversation({"clientID":"gattu","customerName":"Andhra Bhavan","customerEmail":"value4","category":"value4","conversationID":"value4","timeStamp":"value4","message":"value4"});


/*
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




//test.insertCategoriesDB({"clientID":"sai","category":"Seventeen Mile Drive"});
test.insertCategoriesDB({"category":"Carmel By The Sea"});

test.findAllCategoriesDB(function(res,err){
	if(!err){
		console.log(res);
	}
})

*/