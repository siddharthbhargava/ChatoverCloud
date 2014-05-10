

   var client = require('../util/clientDB');
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
			req.session.clientId = req.body.clientId;
			res.render('../views/chat.html', { title: 'Chat Over Cloud' });
			console.log("success");
			
			}
			else if(results==0)
			{
			console.log("Invalid Id or Password");
			}
		}
	},json);
	
    }

