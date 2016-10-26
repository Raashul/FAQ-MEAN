

(function(){
	angular.module('Rashul')

.controller('SignUpController',['$scope', '$state', '$http', function($scope, $state, $http){

    
	$scope.createUser = function(req,res){
        
        var request = {
            username: $scope.susername,
            password: $scope.spassword
        }
        
		$http.post('api/user/signup', request).success(function(response){
            console.log('success');
		}).error(function(err){
			console.log(error);
		})
	}
    
    
	$scope.login = function(){
        
         var request = {
            username: $scope.lusername,
            password: $scope.lpassword
        };
		
		localStorage.setItem('username', request.username);
        
        $http.post('/api/user/login', request).success(function(response){
            console.log(response);
            localStorage.setItem('User-Data', JSON.stringify(response));
            $scope.loggedIn = true;
        }).error(function(err){
            console.log(err);
        });
    }
             

}]);


}());