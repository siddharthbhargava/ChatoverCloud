
var conversation = require('./connectionToDB.js');

function insertConversation(json){
	
	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 *  "timeStamp":value,
	 *  "clientMessage":value,
	 *  "customerMessage":value,
	 *  "unreadFlag":value}
	 */

	if(json.clientID!=NULL && json.timeStamp!=NULL && json.unreadFlag!=NULL){
	
	var connection = conversation.conversationDBConnection;
	
	connection.insert(json, function(err,res){
		if(!err){
			console.log('Insert Operation Successful.');	
		}
		else{
			console.log('Error in Insertion.');
		}
	});
	}
	else{
		console.log("Data Incomplete");
	}
}

exports.insertConversation = insertConversation;

function updateConversation(json){

	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 *  "timeStamp":value,
	 *  "clientMessage":value,
	 *  "customerMessage":value,
	 *  "unreadFlag":value}
	 */

	if(json.clientID!=NULL && json.timeStamp!=NULL && json.unreadFlag!=NULL){
	
	var connection = conversation.conversationDBConnection;	
	
	connection.update(json, function(err,res){
		if(!err){
			console.log('Update Operation Successful.');	
		}
		else{
			console.log('Error in Updating Collection.');
		}
	});
	}
	else{
		console.log("Data Incomplete");
	}
}

exports.updateConversation = updateConversation;

function removeConversation(json){

	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 *  "timeStamp":value,
	 *  "clientMessage":value,
	 *  "customerMessage":value,
	 *  "unreadFlag":value}
	 */

	if(json.clientID!=NULL && json.timeStamp!=NULL && json.unreadFlag!=NULL){
	
	var connection = conversation.conversationDBConnection;	
	
	connection.remove(json, function(err,res){
		if(!err){
			console.log('Remove Operation Successful.');	
		}
		else{
			console.log('Error in Remove operation.');
		}
	});
	}
	else{
		console.log("Data Incomplete");
	}
}

exports.removetConversation = removeConversation;

function findAllConversations(){
	
	var connection = conversation.conversationDBConnection;
	
	connection.find(function(err, results){
		if(!err){
			console.log(results)
		}
		else{
			console.log(err);
		}
	});
}

exports.findAllConversations = findAllConversations;

function findConversationByClient(json){
	
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value}
	 */
	var connection = conversation.conversationDBConnection;
	
	connection.find({"clientID":json.clientID},function(err,res){
		if(err){
			console.log("Incorrect Client ID");
		}
		else{
			console.log(res);
		}
	});
}

exports.findConversationByClient = findConversationByClient;

function findUnreadMessagesByClient(json){
	
	/*The above JSON object should contain the Client ID in the form: {"clientID":value}*/
	var connection = conversation.conversationDBConnection;
	
	connection.find({"clientID:":json.clientID, "unreadFlag":{$in:[1]}},function(err,res){
		if(!err){
			console.log(res);
		}
		else{
			console.log("Client has no unread messages");
		}
		
	});
}

exports.findUnreadMessagesByClient = findUnreadMessagesByClient;

function removeReadConversationByClient(json){
	
	/*The above JSON object should contain the Client ID in the form: {"clientID":value}*/
	
	var connection = conversation.conversationDBConnection;
	
	connection.remove({"clientID:":json.clientID, "unreadFlag":{$in:[0]}},function(err,res){
		if(err){
			console.log("Error removing documents");
		}
		else{
			console.log("Removed read messages of the client.");
		}
	});
}

exports.removeReadConversationByClient = removeReadConversationByClient;
