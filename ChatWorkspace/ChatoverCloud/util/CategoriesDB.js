var MongoClient = require('mongodb').MongoClient;

function insertCategoriesDB(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"category":value}
	 */
		
	if(json.clientID!=NULL && json.category!=NULL){
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("CategoriesDB", function (err, connection){
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

exports.insertCategoriesDB = insertCategoriesDB;

function updateCategoriesDB(json){
	
	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"category":value}
	 */
	
	if(json.clientID!=NULL && json.Category!=NULL){
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("CategoriesDB", function (err, connection){	
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


exports.updateCategoriesDB = updateCategoriesDB;

function removeCategoriesDB(json){

	/*
	 * The above JSON object must be of the form:
	 * {"clientID":value,
	 * 	"category":value}
	 */
	
	if(json.clientID!=NULL && json.Category!=NULL){
		MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
			  if(err) throw err;
			  else
				{
				  db.collection("CategoriesDB", function (err, connection){	
					  connection.remove(json, function(err,res){
						  if(!err){
							  console.log('Remove Operation Successful.');	
						  }
						  else{
							  console.log('Error in Removing Category.');
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

exports.removeCategoriesDB = removeCategoriesDB;

function findAllCategoriesDB(callback){
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("CategoriesDB", function (err, connection){
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


exports.findAllCategoriesDB = findAllCategoriesDB;

function findCategoriesDBByClient(callback,json){
	/*
	 * The above JSON object must contain the clientID in the form: {"clientID":value}
	 */
	
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("CategoriesDB", function (err, connection){
				  connection.find({"clientID":json.clientID},function(err, results){
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

exports.findCategoriesDBByClient = findCategoriesDBByClient;

function removeCategoriesDBByClient(json){
	
	/*The above JSON object must contain the ClientID and question in the format: {"clientID":value, "question":value}*/
	MongoClient.connect('mongodb://127.0.0.1:27017/chatDB', function(err, db) {
		  if(err) throw err;
		  else
			{
			  db.collection("CategoriesDB", function (err, connection){
				  connection.remove({"clientID:":json.clientID},function(err,res){
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

exports.removeCategoriesDBByClient = removeCategoriesDBByClient;


