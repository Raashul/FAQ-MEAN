(function(){
    angular.module('Rashul')
        .controller('HomeController',[ '$scope', '$http', '$state', function($scope, $http, $state){
            
            $scope.postQuestion = function(req, res){
                
                 if(localStorage['User-Data'] !== undefined){
                    
                     var userData = JSON.parse(localStorage['User-Data']);
                     
                    var request = {
                         username           : userData.username,
                         postQuestion       : $scope.question 
                    }
                     
                    $http.post('api/home/post', request).success(function(response){
                        $scope.users = response;
                       console.log($scope.users);
                        console.log($scope.users.username);
                         console.log($scope.users.questions);
                    }).error(function(err){
                        console.log(err);
                    })
            }else{
                console.log('undefined');
                
            }
            
              
            }
    }])




}())