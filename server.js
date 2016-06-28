// load the express module
var express = require('express');
//Next we are going to invoke the function returned to the express variable. Requiring "express" returns a "CreateApplication" function that we store in the express variable before we invoke it.
var app = express();
//Now that we have created our express app lets use it to handle requests:
//Let's handle the base route ('/') and respond with "hello express"
app.get('/', function (request, response){
	response.send("<h1>Hello Express<h1>");
})
//We have loaded the express module into our server file, invoked it to create the server itself, and created a route for the server to handle. Now we just have to tell the server to listen!

app.listen(8000,function() {
	console.log('listening on port 8000');
})