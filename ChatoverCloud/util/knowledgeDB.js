var MongoClient = require('mongodb').MongoClient;

function insertKnowledgeDBMessage(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientId":value,
	 * 	"keywords":["value1","value2"...],
	 *  "questionCategory":value,
	 * 	"question":value,
	 * 	"answer":value
	 */
	
	if(json.clientId && json.keywords && json.questionCategory && json.question && json.answer){
		
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("knowledgeDB", function (err, connection){
					  
					  connection.insert({"clientId":json.clientId,"keywords":[json]}, function(err,res){
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
	 * {"clientId":value,
	 * 	"keywords":["value1","value2"...],
	 *  "questionCategory":value,
	 * 	"question":value,
	 * 	"answer":value
	 */
	
	if(json.clientId && json.keywords && json.questionCategory && json.question && json.answer){
	
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
	if(json.clientId && json.keywords && json.questionCategory && json.question && json.answer){
	
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
	if(json.clientId){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("knowledgeDB", function (err, connection){
				  connection.find({"clientId":json.clientId},function(err,res){
					  if(err){
						  console.log("Incorrect Client Id");
					  }
					  else{
						  
						  var cat;
							results.toArray(function(err,docs){
								if(docs)
									{
										cat=docs[0].questionCategory;
										cat = cat.concat(":");
										cat = cat.concat(docs[0].keywords);
										cat = cat.concat(":");
										cat = cat.concat(docs[0].question);
										cat = cat.concat(":");
										cat = cat.concat(docs[0].answer);
										for(var i=1; i<docs.length;i++)
											{
												cat = cat.concat(",");
												
												cat = cat.concat(docs[i].questionCategory);
												cat = cat.concat(":");
												cat = cat.concat(docs[i].keywords);
												cat = cat.concat(":");
												cat = cat.concat(docs[i].question);
												cat = cat.concat(":");
												cat = cat.concat(docs[i].answer);
											}
									}
								callback(cat,err);
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

exports.findKnowledgeDBByClient = findKnowledgeDBByClient;

function removeKnowledgeDBByClient(json){
	
	/*The above JSON object must contain the ClientID and question in the format: {"clientID":value, "question":value}*/
	
	if(json.clientId){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("knowledgeDB", function (err, connection){
				  connection.remove({"clientId:":json.clientId, "question":json.question},function(err,res){
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
	
	if(json.clientId && json.questionCategory && json.keywords){
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			if(err)
			  throw err;
			else
			{
				db.collection("knowledgeDB", function (err, connection){
					connection.find({"clientId":json.clientId,"questionCategory":json.questionCategory, "keywords":json.keywords},function(err,res){
						if(err){
							console.log("Incorrect Client Id");
						}
						
						else{
							
							var cat;
							res.toArray(function(err,docs){
								if(docs){
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
