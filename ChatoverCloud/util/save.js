var variable = require('./clientDB.js')

//variable.insertClient({"clientId":"2","password":"gattu","clientName":"Ghanta Inc","clientEmail":"email","domain":"domain","clientFlag":"offline"});

//variable.setClientFlag({"clientId":"2","password":"chitti","clientName":"Ghanta Inc","clientEmail":"email","domain":"domain","clientFlag":"online"});

variable.findClientByID(function(err,res){
	if(!err)
		console.log(res);
},"2");
