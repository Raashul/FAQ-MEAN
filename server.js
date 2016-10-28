var express 						= require('express');
var mongoose 						= require('mongoose');
var bodyParser					= require('body-parser');
var multipart 					= require('connect-multiparty');
var multipartMiddleware	= multipart();

var authenticationController = require('./server/controllers/authentication-controller');

var profileController = require('./server/controllers/profile-controller');

var postController = require('./server/controllers/post-controller');

var qaController = require('./server/controllers/qa-controller');


var app 					= express();

mongoose.connect('mongodb://localhost/faq');

mongoose.connect("mongo ds031257.mlab.com:31257/faq-mean -u <Rashul> -p <password12>")


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

app.get('/api/getQuestion', postController.Question);

app.post('/api/post/get', qaController.getPost);

app.post('/api/answer/post', qaController.postAnswer)

//app.listen('3000', function(){
//	console.log('Listening in port 3000');
//})


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

