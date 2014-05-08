var MongoClient = require('mongodb').MongoClient;

function insertKnowledgeDBMessage(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"keywords":["value1","value2"...],
	 *  "questionCategory":value,
	 * 	"question":value,
	 * 	"answer":value
	 */
	
	if(json.clientID!=NULL && json.keywords!=NULL && json.questionCategory!=NULL && json.question!=NULL && json.answer!=NULL){
		
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("knowledgeDB", function (err, connection){
					  
					  connection.insert(json, function(err,res){
						  if(!err){
							  console.log('Insert Operation Successful.');	
						  }
						  else{
							  console.log('Error in Insertion.');
						  }
					  });
				  });
				}
		});
	}
		else{
			console.log("Insufficient data.")
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
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("knowledgeDB", function (err, connection){
					  connection.update(json, function(err,res){
						  if(!err){
							  console.log('Update Operation Successful.');	
						  }
						  else{
							  console.log('Error in Updating Collection.');
						  }
					  });
				  });
				}
		});
	}
		else{
			console.log("Insufficient data.")
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
	
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("knowledgeDB", function (err, connection){
					  connection.remove(json, function(err,res){
						  if(!err){
							  console.log('Update Operation Successful.');	
						  }
						  else{
							  console.log('Error in Updating Collection.');
						  }
					  });
				  });
				}
		});
	}
		else{
			console.log("Insufficient data.")
		}
}
exports.removeKnowledgeDBMessages = removeKnowledgeDBMessages;

function findAllKnowledgeDBMessages(callback){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("knowledgeDB", function (err, connection){
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

exports.findAllKnowledgeDBMessages = findAllKnowledgeDBMessages;

function findKnowledgeDBByClient(callback,json){
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value}
	 */
	if(json.clientID){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("knowledgeDB", function (err, connection){
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

exports.findKnowledgeDBByClient = findKnowledgeDBByClient;

function removeKnowledgeDBByClient(json){
	
	/*The above JSON object must contain the ClientID and question in the format: {"clientID":value, "question":value}*/
	
	if(json.clientID!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("knowledgeDB", function (err, connection){
				  connection.remove({"clientID:":json.clientID, "question":value},function(err,res){
					  if(err){
						  console.log("No such question");
					  }
					  else{
						  console.log("Removed the question & answer of the particular client provided");
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

exports.removeKnowledgeDBByClient = removeKnowledgeDBByClient;


function findKnowledgeDBByCategoryandKey(callback,json){
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value,"questionCategory":value,"keywords":[value]}
	 */
	
	if(json.clientID!=NULL && json.questionCategory!=NULL && json.keywords!=NULL){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("knowledgeDB", function (err, connection){
				  connection.find({"questionCategory":json.questionCategory, "keywords":json.keywords},function(err,res){
					  if(err){
						  console.log("Incorrect Client ID");
					  }
					  else{
						  
						  var cat;
							results.toArray(function(err,docs){
								if(docs!=null)
									{
										cat=docs[0].question;
										cat = cat.concat(":");
										cat = cat.concat(docs[0].answer);
										for(var i=1; i<docs.length;i++)
											{
												cat = cat.concat(",");
												cat = cat.concat(docs[i].question);
												cat = cat.concat(":");
												cat = cat.concat(docs[i].category);
											}
									}
								callback(res,err);
							});
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
	

exports.findKnowledgeDBByCategoryandKey = findKnowledgeDBByCategoryandKey;
