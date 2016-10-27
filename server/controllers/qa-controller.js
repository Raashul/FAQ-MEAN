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
 
  
//  	Post.findById({_id: req.body.id}, function (err, post) {
//	  if(err){
//		res.send('Answer could not be saved');
//	  }else{
//		console.log('found post');
//	  
//		}
//	  
//	})
//	
//	
//	  

  Post.findByIdAndUpdate(
		req.body.id,
		{$push: {"answers": {answer: req.body.answer, username: 'test'}}},
		{safe: true, upsert: false, new : true},
		function(err, updatedPost) {
		  console.log('success updating');

		  res.json(updatedPost)
		}
	);


		
//		Post.update({_id: req.body.id},{
//				   $push : {
//					"answers" : answer
//				   	}, function(err, post){
//					  if(err){
//						console.log('error spotted');
//						console.log(err);
//					  }else{
//						console.log('updated');
//					  	console.log(post.answers);
//					  	console.log(post);
//					  	res.json(post);
//					  }
//					  
//					 
//					}
//				})
		
		

  
  
}