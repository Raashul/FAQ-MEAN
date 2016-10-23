var mongoose 		= require('mongoose');

module.exports = mongoose.model('Post', {

	email: String,
    
    username: String,

	userId: String,
    
   questions: String,
    
    answers: String,
    
    date : {type: Date, default: Date.now}

});