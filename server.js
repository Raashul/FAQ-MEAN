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


//This mongoose connecttion is for localhost
mongoose.connect('mongodb://localhost/faq');


//this mongoose connection is for heroku
//mongoose.connect("mongodb://<Rashul>:<password12>@ds137207.mlab.com:37207/faq")


// mongoose.connect(process.env.MONGODB_URI, function(err){
// 	if(err){
// 		console.error(err);
// 	}else{
// 		console.log('success');
// 	}
// })

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



app.post('/api/post/get', qaController.getPost);

app.post('/api/answer/post', qaController.postAnswer);


app.get('/api/answer/displayAnswers', qaController.getPost);

//app.listen('3000', function(){
//	console.log('Listening in port 3000');
//})


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

