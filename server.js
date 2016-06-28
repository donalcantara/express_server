// load the express module
var express = require('express');
// load the body-parser module
var bodyParser = require('body-parser');
//body-parser is how we get our data from the post object

//Next we are going to invoke the function returned to the express variable. Requiring "express" returns a "CreateApplication" function that we store in the express variable before we invoke it.
var app = express();
//Now that we have created our express app lets use it to handle requests:
//Let's handle the base route ('/') and respond with "hello express"
// app.get('/', function (request, response){
// 	response.send("<h1>Hello Express<h1>");
// })
//We have loaded the express module into our server file, invoked it to create the server itself, and created a route for the server to handle.

//all of your static content must go in the static folder including styles and static javascript files. 
app.use(express.static(__dirname + '/static'));
console.log(__dirname);

app.use(bodyParser.urlencoded({extended: true}));

//next is where express will look for EJS (embedded javascript) views
app.set('views', __dirname + '/views');

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// lets render an ejs view and pass it some user data:
app.get('/users', function(request, response){
	var users_array = [
		{name: 'Erin', email: 'Erin@gmail.com'},
		{name: 'Erick', email: 'Erick@gmail.com'},
		{name: 'Alex', email: 'Alex@gmail.com'},
		{name: 'Brian', email: 'Brian@gmail.com'},
	];
	response.render('users', {users: users_array});
})
//Notice we are passing a JavaScript object to the res.render() method. That way, when we pass a piece of data to a view, every key-value pair within the larger piece of data becomes its own variable.

// So let's say we were working in a RESTful environment and we wanted to make the route for creating a new user. The setup would look like this:
app.get('/', function(req, res){
	res.render('index', {title: 'my express project'});
});

//route to process new userform data:
app.post('/users', function(req,res) {
	console.log('POST DATA \n\n', req.body)
// the code to add the users to the db goes here
// after we do anything with the handler of the POST request, provided there are no errors, we need to redirect
	res.redirect('/')
});
//data from URL (localhost:8000/users/5) but you could call 'id' whatever you want.  Any data you wish to pass via the URL must be indicated by a ':'.  It will then be available in the req.params object.
app.get('/users/:id', function(req,res){
	console.log('The user ID requested is:', req.params.id);
	res.send('You requested the user ID: ' + req.params.id);
	//code to get the user from the db goes here
});

app.listen(8000,function() {
	console.log('listening on port 8000');
})

















