(function(){
    angular.module('Rashul')
        .controller('HomeController',[ '$scope', '$http', '$state', '$interval', "$location" , function($scope, $http, $state, $interval, $location){
            
          
          //Post Question Method.
            $scope.postQuestion = function(req, res){
                
                 if(localStorage['User-Data'] !== undefined){
                    
                     var userData = JSON.parse(localStorage['User-Data']);
				   
				 localStorage.setItem('user', userData.username); 
                     
                    var request = {
                         username        : userData.username,
                         questions       : $scope.question ,
                        userId           : userData._id
                    }
                    

                    $http.post('api/home/post', request).success(function(response){
                        console.log(response);
                        $scope.users = response;
						
						
                       
                    }).error(function(err){
                        console.log(err);
                    })
              }else{
                  $location.path('/');

              }
              
            };
          
          
          //GET each question upon click.
            $scope.getQuestion = function(id){
              
            var request = {
              id: id
            }
           
         $location.path('/post').search({id: request.id});
//            $http.get('api/getQuestion',request).success(function(response){
//                console.log('success');
//            }).error(function(err){
//                 console.log('error');
//            })
              
              
              
              
        }// end of getQuestion method
        
            
            
            function getWaste(initial){
                $http.get('api/home/get').success(function(response){
                  
                    if(initial){
                        console.log('if is running');
                        $scope.users = response;
                    }else{
                        if(response.length > $scope.users.length){
                            $scope.incommingPost = response;
                        }
                        
                    }
                });
            };
            
          
          
          //Setting/Updating the homepage every second
          //Interval will call the GET method every 5 seconds
            getWaste(true);
            
            $interval(function(){
                getWaste(false);
                 console.log('working');
                if($scope.incommingPost){
                    console.log($scope.incommingPost);
                   console.log('there is a difference');
                $scope.difference = $scope.incommingPost.length - $scope.users.length;
                   
                }
                
            }, 10000)
            
            $scope.setNewPost = function(){
                $scope.users = angular.copy($scope.incommingPost);
                $scope.incommingPost = undefined;
            }
            
            
    
            
    }])




}())