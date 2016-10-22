var mongoose 	= require('mongoose');
var User		= require('../datasets/users');


module.exports.postQuestion = function(req,res){
    var post = req.body;
    
//    User.find({}, function(err, users){
//        if(err){
//            console.log(err);
//        }else{
//            res.json(users);
//        }
//    })
//    
    User.findOne({username: post.username}, function (err, user) {
    if(err){
        console.log(err);
    }else{
       
        user.update(
             {questions:post.postQuestion}, 
               function(err, post){  
                   if(err){
                       console.log(err);
                   }else{
                        user.save(function (err) {
                            if(err) {
                                console.error('ERROR!');
                            }else{
                                res.json(user);
                                console.log('success');
                            }
                        });
                    }
               });
   
        
    }


});
    
};


module.exports.getQuestion = function(req, res){
    User.find({}
             .sort({date: -1}))
            .exec(function(err, posts){
        if(err){
            res.error(err);
        }else{
            res.json(posts);
        }
    })
}