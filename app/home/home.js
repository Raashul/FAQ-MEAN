(function(){
    angular.module('Rashul')
        .controller('HomeController',[ '$scope', '$http', '$state', '$interval', function($scope, $http, $state, $interval){
            
            $scope.postQuestion = function(req, res){
                
                 if(localStorage['User-Data'] !== undefined){
                    
                     var userData = JSON.parse(localStorage['User-Data']);
                     
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
                console.log('undefined');
                
            }
            
              
            };
            
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
            
            getWaste(true);
            
            $interval(function(){
                getWaste(false);
                 console.log('working');
                if($scope.incommingPost){
                    console.log($scope.incommingPost);
                   console.log('there is a difference');
                $scope.difference = $scope.incommingPost.length - $scope.users.length;
                   
                }
                
            }, 5000)
            
            $scope.setNewPost = function(){
                $scope.users = angular.copy($scope.incommingPost);
                $scope.incommingPost = undefined;
            }
            
    }])




}())