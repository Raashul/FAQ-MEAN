var mongoose 		= require('mongoose');

module.exports = mongoose.model('User', {

	email: String,
    
    username: String,

	password: String,
    
   questions: String,
    
    answers: String,
    
    date : {type: Date, default: Date.now}

});