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