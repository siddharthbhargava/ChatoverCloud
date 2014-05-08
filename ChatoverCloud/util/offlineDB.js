var MongoClient = require('mongodb').MongoClient;

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
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("offlineDB", function (err, connection){
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
		console.log("Insufficient data.");
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
		
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("offlineDB", function (err, connection){
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
		console.log("Insufficient data.");
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
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("offlineDB", function (err, connection){
				  		connection.remove(json,function (err,result){
				  			if(err)
				  				console.log(err);
				  			else
					  			console.log("Successfully removed offline messages.");
					  	});
					  });
				}	  
			});
	}
	else{
		console.log("Insufficient data.");
	}
}

exports.removeOfflineMessages = removeOfflineMessages;

function findAllOfflineMessages(callback){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("offlineDB", function (err, connection){
				  connection.find(function(err, results){
					  if(!err){
						  callback(results,err);
					  }
					  else{
						  console.log(err);
					  }
				  });
			  });
			}
	});
}

exports.findAllOfflineMessages = findAllOfflineMessages;

function findOfflineMessageByClient(callback,json){
	/*The above JSON object must have the clientID in the manner: {"clientID":value}*/
	
	if(json.clientID!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("offlineDB", function (err, connection){
				  
			  connection.find({"clientID":json.clientID},function(err,res){
				  if(err){
					  console.log("The client has no unread messages");
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

exports.findOfflineMessageByClient = findOfflineMessageByClient;

function removeReadOfflineMessagesByClient(json){
	/*The above JSON object must have the client ID in the manner: {"clientID":value}*/
	if(json.clientID!=NULL){

	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("offlineDB", function (err, connection){
				  connection.remove({"clientID:":json.clientID, "unreadFlag":{$in:[0]}},function(err,res){
					  if(err)
						  console.log("Error removing documents");
					  else
						  console.log("Removed read messages of the client.");
				  });
			  });
			}
	});
	}
	else{
		console.log("Insufficient Data.");
		}
}

exports.removeReadOfflineMessagesByClient = removeReadOfflineMessagesByClient;