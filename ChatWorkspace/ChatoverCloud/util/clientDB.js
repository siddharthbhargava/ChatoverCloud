
var client = require('./connectionToDB.js');

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
	
	var connection = client.clientDBConnection;
	
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
		console.log("Incomplete Credentials");
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
	
	var connection = client.clientDBConnection;
		
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
		console.log("Incomplete Credentials");
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
	
	var connection = client.clientDBConnection;
		
	connection.remove(json, function(err,res){
		if(!err){
			console.log('Remove Operation Successful.');	
		}
		else{
			console.log('Error in Remove Operation.');
		}
	});
	}
	else{
		console.log("Remove Operation Unsuccessful.");
		}
}

exports.removetClient = removeClient;

function findAllClients(){
	
	/*This function will return all the clients. No need tp pass any JSON object*/
	
	var connection = client.clientDBConnection;
	
	connection.find(function(err,res){
		console.log(res);
	});
}
exports.findAllClients = findAllClients;

function findClientByID(json){
	
	/*The JSON object needs to pass the client ID, to extract all other details.*/
	
	var connection = client.clientDBConnection;
	
	connection.find(json.clientID, function(err,res){
		if(err){
			console.log("No such client exists.");
		}
		else{
			console.log(res);
		}
	});
}

exports.findClientByID = findClientByID;

function validateClientLogin(json){
	
	var connection = client.clientDBConnection;
	var authenticated = 0;
	
	connection.find({"clientID":json.clientID, "password": json.password},function(err,res){
		if(err){
			console.log("UserID or Password Incorrect");
		}
		else{
			authenticated = 1;
			console.log("Client Authenticated");
			return authenticated;
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