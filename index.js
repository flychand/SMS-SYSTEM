var twilio = require('twilio');
const express = require('express')
const bodyParser = require('body-parser')
var app = express()
require('dotenv').config()

var port = process.env.PORT
var phone = process.env.PHONE
var accountSid= process.env.ACCOUNT_SID
var authToken = process.env.AUTH_TOKEN

// console.log( port, phone,accountSid,authToken)
app.use(bodyParser.json());

app.post('/send-sms', (req,res)=>{

    var send_to = req.body.phone
    
    var Sid = accountSid; 
    var Token = authToken; 
    var phn = phone;

    var client = twilio(Sid, Token);
    
    client.messages.create({
      body : 'It worked. thanks for you believe',
      to : send_to,  // Text to this number
      from : phn // From a valid Twilio number
      
    }).then((message) =>{
        res.send({ message :" message has been sent to"+ send_to , result : message})
    })

})


app.listen(port , (req,res) =>{
    console.log("server is running on", `${port}`)
})