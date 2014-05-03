
var offline = require('./connectionToDB.js');

function insertOfflineMessage(json){
	
	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 * 	"timeStamp":value,
	 *  "customerEmail":value,
	 *  "unreadFlag":value,
	 *  "message":value}
	 */

	if(json.clientID!=NULL && json.timeStamp!=NULL && json.customerEmail && json.unreadFlag!=NULL && json.message!=NULL){
	
	var connection = offline.offlineDBConnection;
	
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


exports.insertOfflineMessage = insertOfflineMessage;

function updateOfflineMessages(json){
	
	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 * 	"timeStamp":value,
	 *  "customerEmail":value,
	 *  "unreadFlag":value,
	 *  "message":value}
	 */
	
	if(json.clientID!=NULL && json.timeStamp!=NULL && json.customerEmail && json.unreadFlag!=NULL && json.message!=NULL){
		
	var connection = offline.offlineDBConnection;
		
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

exports.updateOfflineMessages = updateOfflineMessages;

function removeOfflineMessages(json){
	
	/*
	 * The above JSNON object must be of the form:
	 * {"clientID":value,
	 * 	"timeStamp":value,
	 *  "customerEmail":value,
	 *  "unreadFlag":value,
	 *  "message":value}
	 */

	if(json.clientID!=NULL && json.timeStamp!=NULL && json.customerEmail && json.unreadFlag!=NULL && json.message!=NULL){
	
	var connection = offline.offlineDBConnection;
		
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

exports.removeOfflineMessages = removeOfflineMessages;

function findAllOfflineMessages(){
	
	var connection = offline.offlineDBConnection;
	
	connection.find(function(err, results){
		if(!err){
			console.log(results)
		}
		else{
			console.log(err);
		}
	});
}

exports.findAllOfflineMessages = findAllOfflineMessages;

function findOfflineMessageByClient(json){
	/*The above JSON object must have the clientID in the manner: {"clientID":value}*/
	
	var connection = offline.offlineDBConnection;
	
	connection.find({"clientID":json.clientID},function(err,res){
		if(err){
			console.log("The client has no unread messages");
		}
		else{
			console.log(res);
		}
	});
}

exports.findOfflineMessageByClient = findOfflineMessageByClient;

function removeReadOfflineMessagesByClient(json){
	/*The above JSON object must have the client ID in the manner: {"clientID":value}*/
	
	var connection = offline.offlineDBConnection;
	
	connection.remove({"clientID:":json.clientID, "unreadFlag":{$in:[0]}},function(err,res){
		if(err){
			console.log("Error removing documents");
		}
		else{
			console.log("Removed read messages of the client.");
		}
	});
}

exports.removeReadOfflineMessagesByClient = removeReadOfflineMessagesByClient;