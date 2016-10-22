var express 						= require('express');
var mongoose 						= require('mongoose');
var bodyParser					= require('body-parser');
var multipart 					= require('connect-multiparty');
var multipartMiddleware	= multipart();

var authenticationController = require('./server/controllers/authentication-controller');

var profileController = require('./server/controllers/profile-controller');

var postController = require('./server/controllers/post-controller');


var app 					= express();

mongoose.connect('mongodb://localhost/faq');

app.use(bodyParser.json());
app.use(multipartMiddleware);

app.use('/app', express.static(__dirname + "/app"))
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res){
	res.sendfile('./index.html');
})


//Authentication
app.post('/api/user/signup', authenticationController.signup);

app.post('/api/user/login', authenticationController.login);

app.post('/api/home/post', postController.postQuestion);
app.get('/api/home/get', postController.getQuestion);


app.listen('3000', function(){
	console.log('Listening in port 3000');
})