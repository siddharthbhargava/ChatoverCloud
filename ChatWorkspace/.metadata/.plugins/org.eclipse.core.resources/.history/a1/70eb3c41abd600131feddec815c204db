var MongoClient = require('mongodb').MongoClient;

function insertConversation(json){
	
	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 * 	"customerName":value,
	 * 	"customerEmail":value,
	 * 	"category":value,
	 * 	"conversationID":value,
	 *  "timeStamp":value,
	 *  "clientMessage":value,
	 *  "customerMessage":value,
	 *  "unreadFlag":value}
	 */

	 if(json.clientID!=NULL && json.customerName!=NULL && json.category!=NULL &&json.customerEmail!=NULL && json.conversationID!=NULL && json.timeStamp!=NULL && json.unreadFlag!=NULL){
			
		 MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			 	  db.collection("conversationDB", function (err, connection){
				  		connection.insert(json,function (err,result){
				  			if(err)
				  				console.log(err);
				  			else
					  			console.log("Successfully Inserted");
					  	});
					  });
			}
		 });
	 } 
	 else{
			console.log("Incomplete data.");
	}
}

exports.insertConversation = insertConversation;

function updateConversation(json){

	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 * 	"customerName":value,
	 * 	"customerEmail":value,
	 * 	"category":value,
	 * 	"conversationID":value,
	 *  "timeStamp":value,
	 *  "clientMessage":value,
	 *  "customerMessage":value,
	 *  "unreadFlag":value}
	 */

	if(json.clientID!=NULL && json.customerName!=NULL && json.category!=NULL &&json.customerEmail!=NULL && json.conversationID!=NULL && json.timeStamp!=NULL && json.unreadFlag!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
			
				db.collection("conversationDB", function (err, connection){
					connection.update(json,function (err,result){
						if(err)
							console.log(err);
						else
							console.log("Successfully Updated");
					});
				});
			}
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}
				
exports.updateConversation = updateConversation;

function removeConversation(json){

	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 * 	"customerName":value,
	 * 	"customerEmail":value,
	 * 	"category":value,
	 * 	"conversationID":value,
	 *  "timeStamp":value,
	 *  "clientMessage":value,
	 *  "customerMessage":value,
	 *  "unreadFlag":value}
	 */

	if(json.clientID!=NULL && json.customerName!=NULL && json.category!=NULL &&json.customerEmail!=NULL && json.conversationID!=NULL && json.timeStamp!=NULL && json.unreadFlag!=NULL){
		
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{}
				db.collection("conversationDB", function (err, connection){
					connection.remove(json,function (err,result){
						if(err)
							console.log(err);
						else
							console.log("Successfully Removed.");
					});
				});
	  
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}

exports.removeConversation = removeConversation;

function findAllConversations(callback){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
			db.collection("conversationDB", function (err, connection){
			connection.find(function(err, results){
				if(!err){
					callback(results,err);
				}
				
				});
			});
		}
	});
}

exports.findAllConversations = findAllConversations;

function findConversationByClient(callback,json){
	
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value}
	 */
	if(json.clientID!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
			db.collection("conversationDB", function (err, connection){
			connection.find({"clientID":json.clientID},function(err,res){
				if(err){
					console.log("Incorrect Client ID");
				}
				else{
					callback(res,err);
				}
			});
		});
	}
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}

exports.findConversationByClient = findConversationByClient;

function findConversationByClientandConversationID(callback,json){
	
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value,"conversationID":value}
	 */
	if(json.clientID!=NULL && json.conversationID!=NULL){
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
			db.collection("conversationDB", function (err, connection){
			connection.find({"clientID":json.clientID,"conversationID":json.conversationID},function(err,res){
				if(err){
					console.log("Incorrect Client ID");
				}
				else{
					callback(res,err);
				}
			});
		});
	}
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}

exports.findConversationByClientandConversationID = findConversationByClientandConversationID;

function findUnreadMessagesByClient(callback,json){
	
	/*The above JSON object should contain the Client ID in the form: {"clientID":value}*/
	
	if(json.clientID!=NULL){
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
			db.collection("conversationDB", function (err, connection){
				connection.find({"clientID:":json.clientID, "unreadFlag":{$in:[1]}},function(err,res){
					if(!err){
						callback(res,res);
					}
					else{
						console.log("Client has no unread messages");
					}
		
				});
			});
		}
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}

exports.findUnreadMessagesByClient = findUnreadMessagesByClient;

function removeReadConversationByClient(json){
	
	/*The above JSON object should contain the Client ID in the form: {"clientID":value}*/
	if(json.clientID!=NULL){
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
			db.collection("conversationDB", function (err, connection){
				connection.remove({"clientID:":json.clientID, "unreadFlag":{$in:[0]}},function(err,res){
					if(err){
						console.log("Error removing documents");
					}
					else{
						console.log("Removed read messages of the client.");
					}
				});
			});
		}
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}
exports.removeReadConversationByClient = removeReadConversationByClient;

function removeConversationByID(json){
	
	if(json.clientID!=NULL && json.conversationID!=NULL){
		
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			if(err) throw err;
			else
			{
				db.collection("conversationDB", function (err, connection){
					connection.remove({"clientID":json.clientID,"conversationID":json.conversationID},function(err,res){
						if(err){
							console.log("Error Removing Conversation.");
						}
						else{
							console.log("Conversation Removed.");
						}
						});
					});
				
				}
			});
	}			
	else{
		console.log("Insufficient Data.");
	}
}
	
exports.removeConversationByID = removeConversationByID;
