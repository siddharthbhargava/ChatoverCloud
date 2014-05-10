var categories = require("../util/CategoriesDB")
var client = require("../util/clientDB")
var conversation = require('../util/conversationDB');
var knowledge = require('../util/knowledgeDB');
var offline = require('../util/offlineDB');
var conversationID;
/**
 * New node file
 */
exports.processrequest = function(req, res){
	//res.send("respond with a resource");
	console.log("Inside Customer Process Request");
	//console.log(req.body);
	if(!req.body.hasOwnProperty('message')) {
		console.log("Does not have message");
		res.statusCode = 400;
		return res.send('1, Error 400: Post syntax incorrect.');
	}
	console.log("Message from Customer : " + req.body.message);
	//res.set('Content-Type', 'text/plain');
	res.statusCode=200;
	//res.setHeader("Cache-Control", "no-cache"); // HTTP 1.1
	//res.setHeader("Pragma", "no-cache"); // HTTP 1.0
	//res.setDateHeader("Expires", 0); // prevents caching at the proxy
	// server
	//res.setHeader("Cache-Control", "no-store");
	res.send("0, Message mil gaya Chill maar");
	//res.end();
};

exports.getCategories = function(req, res){
	console.log("Inside get Categories Request");
	//console.log(req.body);
	if(!req.body.hasOwnProperty('clientId')) {
		console.log("Request does not have Client ID");
		res.statusCode = 400;
		return res.send('1, Error 400: Post syntax incorrect.');
	}
	console.log("Client ID : " + req.body.clientId);
	//res.set('Content-Type', 'text/plain');
	res.statusCode=200;
	categories.findCategoriesDBByClient(function(cats, err){
		if(err)
			console.log(err);
		else
		{
			var status="offline"
				client.getClientFlag(function(err, result){
					if(err)
						console.log("Error is : " + err);
					else
					{
						console.log("Status for client " + req.body.clientId + " is: " + result);
						status=result;
					}
					var cat= cats.replace(/\,/g,":");
					console.log(cat);
					var categories= "0," + cat + "," + status;
					console.log(categories);
					res.send(categories);
				}, req.body.clientId);

		}
	}, req.body.clientId);
};

//function replaceAll (find, replace, str) {
//return str.replace(new RegExp(find,'g'),replace);
//}


function insertLiveMessageGetConvoID(req,res)
{
	//alert("inside customer message");
	if(!req.clientId) {
		console.log("Request does not have ClientID");
		res.statusCode = 400;
		return res.send("Error.");
	}
	else{
		conversation.insertConversationInitialReq(req,function(res,err){
			if(err)
				console.log("Error.");
			else
				conversationID = res;
			//write operator response in callback
		});
	}
}


exports.insertLiveMessageGetConvoID = insertLiveMessageGetConvoID;

function insertLiveMessage(req,res){
	//alert("inside customer message");
	if(!req.clientId) {
		console.log("Request does not have ClientID");
		res.statusCode = 400;
		return res.send("Error.");
	}
	else{
		//req = req.concat("conversationID:");
		req.conversationID = conversationID;
		conversation.insertConversationRegular(req);
	}
}

exports.insertLiveMessage = insertLiveMessage;

function insertOfflineMessage(req,res){
	if(!req.clientId){
		res.statusCode = 400;
		console.log("Request does not have ClientID");
		return res.send("Error.");
	}
	else{
		offline.insertOfflineMessage(req);
		//write code using res to send response from admin console.
	}
}

exports.insertOfflineMessage = insertOfflineMessage;

function readFromKnowledgeBase(req,res){
	if(!req.clientId){
		res.statusCode = 400;
		console.log("Request does not have ClientID");
		return res.send("Error.");
	}
	else{
		knowledge.findKnowledgeDBByClient(req,function(results,err){
			if(!err){
				res.statusCode = 200;
				res.send(results);
			}
			else{
				console.log("No answer in knowledgeDB.");
			}
		});
	}
}

exports.readFromKnowledgeBase = readFromKnowledgeBase;




exports.submitTicket = function(req, res){
	console.log("Handling submit Ticket Request");

	if(!req.body.hasOwnProperty('clientId') || !req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('message')|| !req.body.hasOwnProperty('email')|| !req.body.hasOwnProperty('category')) 
	{
		console.log("Request does not have a field which is req");
		res.statusCode = 400;
		return res.send('1, Error 400: Post syntax incorrect.');
	}
	else {
		console.log("name : " + req.body.hasOwnProperty('name'));
		console.log("email : " + req.body.hasOwnProperty('email'));
		console.log("message : " + req.body.hasOwnProperty('message'));
		console.log("category : " + req.body.hasOwnProperty('category'));
		console.log("clientId : " + req.body.hasOwnProperty('clientId'));
		var json=[];
		json.clientId="req.body.hasOwnProperty('clientId')";
		json.name="req.body.hasOwnProperty('name')";
		json.email="req.body.hasOwnProperty('email')";
		json.category="req.body.hasOwnProperty('category')";
		res.statusCode=200;


		offline.insertOfflineMessage({"clientId":"req.body.hasOwnProperty('clientId')","customerEmail":"req.body.hasOwnProperty('email')","unreadFlag":"0","message":"req.body.hasOwnProperty('message')", "category":"req.body.hasOwnProperty('category')"});	
	}
};




	exports.initialRequest = function(req, res){
		console.log("handling initial request");

		if(!req.body.hasOwnProperty('clientId') || !req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('message')|| !req.body.hasOwnProperty('email')|| !req.body.hasOwnProperty('category')) 
		{
			console.log("Request does not have a field which is req");
			res.statusCode = 400;
			return res.send('1, Error 400: Post syntax incorrect.');
		}
		else {
			console.log("name : " + req.body.hasOwnProperty('name'));
			var json=[];
			json.clientId="req.body.hasOwnProperty('clientId')";
			json.name="req.body.hasOwnProperty('name')";
			json.email="req.body.hasOwnProperty('email')";
			json.category="req.body.hasOwnProperty('category')";
			
			
			console.log("email : " + req.body.hasOwnProperty('email'));
			console.log("message : " + req.body.hasOwnProperty('message'));
			console.log("category : " + req.body.hasOwnProperty('category'));
			console.log("clientId : " + req.body.hasOwnProperty('clientId'));

			res.statusCode=200;

			conversation.insertConversation({"clientId":"req.body.hasOwnProperty('clientId')","customerName":"req.body.hasOwnProperty('name')","customerEmail":"req.body.hasOwnProperty('email')","category":"req.body.hasOwnProperty('category')","message":"req.body.hasOwnProperty('message')"});
		
		}
	};
	
	
	
//	exports.readFromKnowledgeBase = function(req, res){
//
//		if(!req.body.hasOwnProperty('clientId') || !req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('message')|| !req.body.hasOwnProperty('email')|| !req.body.hasOwnProperty('category')) 
//		{
//			console.log("Request does not have a field which is req");
//			res.statusCode = 400;
//			return res.send('1, Error 400: Post syntax incorrect.');
//		}
//		else {
//			console.log("name : " + req.body.hasOwnProperty('name'));
//			console.log("email : " + req.body.hasOwnProperty('email'));
//			console.log("message : " + req.body.hasOwnProperty('message'));
//			console.log("category : " + req.body.hasOwnProperty('category'));
//			console.log("clientId : " + req.body.hasOwnProperty('clientId'));
//
//			res.statusCode=200;
//			
//			
//			/*ajax request to search in knowledge base*/
//			
//
//			
//		}
//	};


