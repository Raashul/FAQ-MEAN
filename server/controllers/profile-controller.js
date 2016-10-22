var User = require('../datasets/users');
var path = require('path');
var fs 	 = require('fs-extra');


module.exports.updatePhoto = function(req, res){
	var file = req.files.file;
	var userId = req.body.userId;


	var tempPath = file.path;
	var uploadDate = new Date().toISOString();

	var targetPath = path.join(__dirname + "../../../uploads/" + userId + uploadDate + file.name);
	console.log(targetPath);

	var savePath = "/uploads/" + userId + uploadDate + file.name

	fs.rename(tempPath, targetPath, function(err){
			if(err){
				console.log('error recieved');
				console.log(err);
			}else{
				User.findById(userId, function(err, userData){
					var user = userData;
					user.image = savePath;
					user.save(function(err){
						if(err){
							console.log('failure to save image');
                            res.json({status: 500});
						} else{
							console.log('save success');
                            res.json({status: 200});
						}

					});
				})
			}
	})
};

module.exports.updateUsername = function(req, res){
    
    var username    = req.body.username;
    var userId      = req.body.userId;
    
    User.findById(userId, function(err, userData){
        var user        = userData;
        user.username   = username;
        
        user.save(function(err){
            if(err){
                console.log('fail');
                res.json({status: 500})
            }else{
                console.log('success');
                 res.json({status: 200})
            }
        })
    })
};

module.exports.updateBio = function(req, res){
    var userId = req.body.userId;
    var bio    = req.body.bio;
    
    User.findById(userId, function(err, userData){
        var user        = userData;
        user.bio        = bio;
        
        user.save(function(err){
            if(err){
                console.log('fail');
                res.json({status: 500});
            }else{
                console.log('saved');
                 res.json({status: 00});
            }
        })
    })
}