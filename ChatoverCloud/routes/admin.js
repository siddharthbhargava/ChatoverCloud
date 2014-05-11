

   var client = require('../util/clientDB');
   var knowledge = require('../util/knowledgeDB');
   var offline=require('../util/conversationDB');
   var conversation=require('../util/offlineDB');
   
   
   
   
    exports.adminvalidate = function (req, res) {
	if(!req.body.hasOwnProperty('name') ||!req.body.hasOwnProperty('password')) {
		res.statusCode = 400;
		return res.send('Error 400: Post syntax incorrect.');
	}
	var json = [];
	json.clientId= req.body.name;
	json.password= req.body.password;
	client.validateClientLogin(function(err,results){
		if(err){
			throw err;
		}else{
			if(results==1){
				//setting flag to 'online
				console.log('set flag to online');
				var json = [];
				json.clientId= req.body.name;
				json.clientFlag= req.body.clientFlag;
				client.setClientFlag({"clientId": json.clientId});
			req.session.clientId = req.body.clientId;
			res.render('../views/admin.ejs');
			console.log("success");
			
			}
			else if(results==0)
			{
			console.log("Invalid Id or Password");
			}
		}
	},json);
	
    }
    
    exports.insertkb = function (req, res) {
    	if(!req.body.hasOwnProperty('clientId') ||!req.body.hasOwnProperty('questionCategory')||!req.body.hasOwnProperty('question')||!req.body.hasOwnProperty('answer')||!req.body.hasOwnProperty('keywords')) {
    		res.statusCode = 400;
    		return res.send('Error 400: Post syntax incorrect.');
    	}
    	else {
    	var json = [];
    	json.clientId= req.body.name;
    	json.questionCategory= req.body.category;
    	json.question=req.body.question;
    	json.answer=req.body.answer;    	
    	knowledge.insertKnowledgeDBMessage(json);    		
    	}
    	}
    
    exports.retrieveTickets = function (req, res) {
    	if(!req.body.hasOwnProperty('clientId')||!req.body.hasOwnProperty('unreadFlag')) {
    		res.statusCode = 400;
    		return res.send('Error 400: Post syntax incorrect.');
    	}
    	else {
    	var json = [];
    	json.clientId= req.body.clientId;
    	json.unreadFlag=1;
    	admin.findUnreadMessagesByClient(function(err,results){
    		if(err){
    			throw err;
    		}else{
    			
    			console.log(results);
    		}
    	});
   }
 }
    

