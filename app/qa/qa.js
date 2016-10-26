(function(){
  angular.module('Rashul')
    .controller('QaController',['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location){
        
      var id = {
        id : $location.search().id
        
      }
	  
	  $scope.username=localStorage.getItem('username');
		
      
   $http.post('api/post/get',id).success(function(response){
        console.log(response);
        $scope.post = response;
      }).error(function(err){
        console.log(err);
      });
      
      
  $scope.postAnswer = function(req, res){
	  
  	var request = {
		answer	: $scope.answer,
		id		: $location.search().id		
	};
	
	$http.post('api/answer/post',request).success(function(response){
	  
		console.log($scope.username);
	}).error(function(err){
	  console.log(err);
	})
  }    
      
   
      
    }])
  
}());