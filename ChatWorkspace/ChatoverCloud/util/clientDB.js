var MongoClient = require('mongodb').MongoClient;

function insertClient(json){
	
	/*
	 * The above JSON object passed as a parameter must be of the form:
	 * {"clientID":value,
	 * 	"password":value,
	 *  "clientName":value,
	 *  "email":value,
	 *  "domain":value}
	 
	 */
	
	 if(json.clientID!=NULL && json.password!=NULL && json.clientName!=NULL && json.email!=NULL && json.domain!=NULL){
			
		 MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{	
			  	db.collection("clientDB", function (err, connection){
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
		 console.log("Insufficient Data.");
	 }
}

exports.insertClient = insertClient;


function updateClient(json){
	
	/*
	 * The above JSON object passed as a parameter must be of the form:
	 * {"clientID":value,
	 * 	"password":value,
	 *  "clientName":value,
	 *  "email":value,
	 *  "domain":value}
	 */
	if(json.clientID!=NULL && json.password!=NULL){
		
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
				db.collection("clientDB", function (err, connection){
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

exports.updateClient = updateClient;	
		
	
function removeClient(json){
	
	/*
	 * The above JSON object passed as a parameter must be of the form:
	 * {"clientID":value,
	 * 	"password":value,
	 *  "clientName":value,
	 *  "email":value,
	 *  "domain":value}
	 */
	
	if(json.clientID!=NULL && json.password!=NULL && json.clientName!=NULL && json.email!=NULL && json.domain!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		if(err) throw err;
		else
		{
				db.collection("clientDB", function (err, connection){
					connection.remove(json,function (err,result){
						if(err)
							console.log(err);
						else
							console.log("Successfully Removed");
					});
				});
			}
		});
	}
	else{
		console.log("Insufficient Data.");
		}
}

exports.removetClient = removeClient;


function findAllClients(callback){
	
	/*This function will return all the clients. No need tp pass any JSON object*/
	
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  	db.collection("clientDB", function (err, connection){
			  		if(err){
						console.log("No such database exists.");
					}
				  else{
			  		connection.find(function(err,res){
			  			if(err){
							console.log("No client exists.");
						}
					  else{
			  			callback(res,err);
					  }
					});
				  }
				
			  	});
			}
	});
}
exports.findAllClients = findAllClients;

function findClientByID(json){
	
	/*The JSON object needs to pass the client ID, to extract all other details.*/
	
	if(json.clientID!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("clientDB", function (err, connection){
				  if(err){
						console.log("No such database exists.");
					}
				  else{
				  connection.find(json.clientID,function(err,res){
					  if(err){
							console.log("No such client exists.");
						}
					  else{
					  
			  			callback(res,err);
					  }
					});
				  }
				
			  	});
			}
	});
	}
	else{
		console.log("Insufficient Data.");
	}
}

exports.findClientByID = findClientByID;

function validateClientLogin(callback,json){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
	//var connection = client.clientDBConnection;
			  var authenticated = 0;
	
			  db.collection("clientDB", function (err, connection){
				  if(err){
						console.log("No such database exists.");
					}
				  else{
				  connection.find({"clientID":json.clientID, "password": json.password},function(err,res){
					  if(err){
							console.log("UserID or Password Incorrect");
						}
					  else{
						  authenticated = 1;
							console.log("Client Authenticated");
							callback(authenticated,err);
						}
					});
				
				}
			  });
		}
	});
}
			  	
exports.validateClientLogin = validateClientLogin;

function changeClientPassword(json){
	
	var permission = validateClientLogin(json);
	
	if(permission == 1){
		//code to receive new password input from the client, in the form of JSON object newPass
		//newPass should contain {"customerID":value, "password":value}
		updateClient(json);
	}
	else{
		console.log("Not Authorized to change details of client.");
	}
	
}

exports.changeClientPassword = changeClientPassword;

