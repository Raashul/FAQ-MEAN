var mongoose 	= require('mongoose');
var Post		= require('../datasets/posts');

module.exports.postQuestion = function(req,res){

    var post = new Post(req.body);


    post.save();

    Post.find({})
        .sort({date:-1}).exec(function(err, allPosts){
        if(err){
            console.log(err);
        }else{
            res.json(allPosts);
        }
    })


};


module.exports.getQuestion = function(req, res){

    Post.find({})
        .sort({date:-1}).exec(function(err, allPosts){
        if(err){
            console.log(err);
        }else{

            res.json(allPosts);
        }
    })

};


module.exports.getPost = function(req, res){

      console.log(req.body);
      var id = req.body


      Post.findById(id.id, function(err, post){
        if(err){
          console.log(err);
        }else{
          res.json(post);
        }
      })

}