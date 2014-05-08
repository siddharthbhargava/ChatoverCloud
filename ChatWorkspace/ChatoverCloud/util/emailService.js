/**
 * Email Service for offline messages received by the client.
 */

var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "sjsu.cmpe272@gmail.com",
        pass: "chittiSaar"
    }
});

// setup e-mail data with unicode symbols

var mailOptions = {
    from: "Saideepak <sjsu@gmail.com>", // sender address does not matter much. Its just a label.
    to: "saideepak09@gmail.com", // list of receivers
    subject: "Its Working.", // Subject line
    text: "Chitti?!", // plaintext body
    html: "<b>Chitti?!</b>" // html body  -> This is what appears in the body of the received email.
}

// send mail with defined transport object
transport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

  
    transport.close(); // shut down the connection pool, no more messages
});