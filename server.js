
var express = require('express');

var bodyParser = require('body-parser');
//body-parser is how we get data from the post object

//Invoke the function returned to the express variable. Requiring "express" returns a "CreateApplication" function that we store in the express variable before invoke it.
var app = express();

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
//Passing a JavaScript object to the res.render() method. Every key-value pair within the larger piece of data becomes its own variable.


app.get('/', function(req, res){
	res.render('index', {title: 'my express project'});
});

//route to process new userform data:
app.post('/users', function(req,res) {
	console.log('POST DATA \n\n', req.body)
	res.redirect('/')
});

app.get('/users/:id', function(req,res){
	console.log('The user ID requested is:', req.params.id);
	res.send('You requested the user ID: ' + req.params.id);
});

app.listen(8000,function() {
	console.log('listening on port 8000');
})

















