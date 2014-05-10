/*
var abc = require('./CategoriesDB.js');

abc.findCategoriesDBByClient(function(res,err){
	if(!err){
		
		var sai=res.toArray();
		console.log(sai[0]);
		//console.log(res);
	}
},"dhiru")
*/

var d = new Date();
var timeStamp = d.getTime()
console.log("time in Milliseconds since midnight jan 1st 1970: "+timeStamp);
		 
		 
var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
console.log("Time in hh:mm:ss "+myDate);

miliseconds = timeStamp

seconds = miliseconds/1000
console.log(Time.at(seconds).strftime("%H:%M:%S"));
		 
		 