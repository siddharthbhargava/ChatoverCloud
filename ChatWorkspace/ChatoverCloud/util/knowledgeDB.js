
var knowledge = require('./connectionToDB.js');

function insertKnowledgeDBMessage(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"keywords":["value1","value2"...],
	 *  "questionCategory":value,
	 * 	"question":value,
	 * 	"answer":value
	 */
	var connection = knowledge.knowledgeDBConnection;
	
	if(json.clientID!=NULL && json.keywords!=NULL && json.questionCategory!=NULL && json.question!=NULL && json.answer!=NULL){
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
		console.log("Insufficient data.");
	}
}

exports.insertKnowledgeDBMessage = insertKnowledgeDBMessage;

function updateKnowledgeDBMessages(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"keywords":["value1","value2"...],
	 *  "questionCategory":value,
	 * 	"question":value,
	 * 	"answer":value
	 */
	
	if(json.clientID!=NULL && json.keywords!=NULL && json.questionCategory!=NULL && json.question!=NULL && json.answer!=NULL){
	
	var connection = knowledge.knowledgeDBConnection;
		
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
		console.log("Insufficient Data.");
	}
}

exports.updateKnowledgeDBMessages = updateKnowledgeDBMessages;

function removeKnowledgeDBMessages(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"keywords":["value1","value2"...],
	 *  "questionCategory":value,
	 * 	"question":value,
	 * 	"answer":value
	 */
	if(json.clientID!=NULL && json.keywords!=NULL && json.questionCategory!=NULL && json.question!=NULL && json.answer!=NULL){
	
	var connection = knowledge.knowledgeDBConnection;
	
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
		console.log("Insufficient Data.");
	}
}

exports.removeKnowledgeDBMessages = removeKnowledgeDBMessages;

function findAllKnowledgeDBMessages(){
	
	var connection = knowledge.knowledgeDBConnection;
	
	connection.find(function(err, results){
		if(!err){
			console.log(results)
		}
		else{
			console.log(err);
		}
	});
}

exports.findAllKnowledgeDBMessages = findAllKnowledgeDBMessages;

function findKnowledgeDBByClient(json){
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value}
	 */
	var connection = knowledge.knowledgeDBConnection;
	
	connection.find({"clientID":json.clientID},function(err,res){
		if(err){
			console.log("Incorrect Client ID");
		}
		else{
			console.log(res);
		}
	});
}

exports.findKnowledgeDBByClient = findKnowledgeDBByClient;

function removeKnowledgeDBByClient(json){
	
	/*The above JSON object must contain the ClientID and question in the format: {"clientID":value, "question":value}*/
	var connection = knowledge.knowledgeDBConnection;
	
	connection.remove({"clientID:":json.clientID, "question":value},function(err,res){
		if(err){
			console.log("No such question");
		}
		else{
			console.log("Removed the question & answer of the particular client provided");
		}
	});
}

exports.removeKnowledgeDBByClient = removeKnowledgeDBByClient;