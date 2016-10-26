var mongoose = require('mongoose');
var Post     = require('../datasets/posts');


module.exports.getPost = function(req, res){
  
  console.log(req.body);
  
  var id = req.body
 
 
  Post.findById(id.id, function(err, post){
    if(err){
      console.log(err);
    }else{
      console.log('success');
      res.json(post);
    }
  })
  
}


module.exports.postAnswer = function(req, res){
  
  console.log('req.body to postanswer is');
  console.log(req.body);
  
  	Post.findOne({_id: req.body.id}, function (err, post) {
    post.answers = req.body.answer;
    

    post.save(function (err) {
        if(err) {
            console.error('ERROR!');
        }else{
		  res.json(post);
		}
    });
	  
	  
});
  
  
}