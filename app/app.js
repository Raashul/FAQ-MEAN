(function(){
	angular.module('Rashul', ['ui.router', 'ngFileUpload'])
		.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');
    
      

			$stateProvider
				.state('signUp',{
					url: "/signup",
					templateUrl: "app/signup/signup.html",
					controller: "SignUpController"

				})

				
        .state('main',{
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController'
        })
      
        .state('question-answer', {
        url: '/post?id',
        templateUrl: 'app/qa/qa.html',
        controller:'QaController'

      });
      
      
        
            
            
     
      
      
		})
}());