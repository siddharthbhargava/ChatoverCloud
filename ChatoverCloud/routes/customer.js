var categories= require("../util/CategoriesDB")
var clientFlag  =   require("../util/clientDB")

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
	categories.findCategoriesDBByClient(function(result, err){
		if(err)
			console.log(err);
		else
			{
			var cat= result.replace(/\,/g,":");
			console.log(cat);
			var categories= "0," + cat;
			console.log(categories);
			res.send(categories);
			}
	}, req.body.clientId);
	//res.setHeader("Cache-Control", "no-cache"); // HTTP 1.1
	//res.setHeader("Pragma", "no-cache"); // HTTP 1.0
	//res.setDateHeader("Expires", 0); // prevents caching at the proxy
	// server
	//res.setHeader("Cache-Control", "no-store");
	//res.end();
};

//function replaceAll (find, replace, str) {
//	return str.replace(new RegExp(find,'g'),replace);
//}
exports.clientOnline = function(req,res)
{
	alert("inside client status");
	if(!req.body.hasOwnProperty('clientID')) {
		console.log("Request does not have Client status");
		res.statusCode = 400;
		return res.send('1, Error 400: Post syntax incorrect.');
	}
	//console.log("Client Status : " + getclientFlag);
	
	res.statusCode=200;
	clientFlag.getClientFlag(function(result, err){
		
		if(err)
			console.log(err);
		else
			{
			if(results=="offline")
			{
			console.log("support offline");
			}
			else if(results=="online")
			{
			console.log("support online");
			}
			
			results.send(clientFlag);
		}
	}, req.body.clientID);
	
};


