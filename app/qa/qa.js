(function(){
  angular.module('Rashul')
    .controller('QaController',['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location){


      var id = {
        id : $location.search().id
      }





	  $scope.username=localStorage.getItem('username');


   $http.post('api/post/get',id).success(function(response){
        console.log(response);
        console.log(response.username);
        console.log(response.answers.answer)
        $scope.post = response;
      }).error(function(err){
        console.log(err);
      });


  $scope.postAnswer = function(req, res){


	  if(localStorage['User-Data'] == undefined){
		  $location.path('/signup');
	  }else{

  	var request = {
		answer	: $scope.answer,
		id		: $location.search().id
	};

	$http.post('api/answer/post',request).success(function(response){

		$scope.updatedPost = response;
		console.log(response);

	}).error(function(err){
	  console.log(err);
	})

	  }

  }


  	// var init = function () {
			//    $http.get('api/displayAnswers').success(function(response){
   //    	console.log('inside display answer');
			// 	$scope.updatedPost = response;

			// 	res.json($scope.updatedPost);

			// 	}).error(function(err){
			// 	 console.log(err);
			// });
			// };
			// // and fire it after definition
			// init();




    }])

}());