

		
	   var app = angular.module('myApp', []);
		app.controller('myCtrl',['$scope','$http', function($scope, $http) {
			$scope.query=function() {
				alert();
								
				$http({
					method : "GET",
					url : "http://127.0.0.1:3000/query/ru/UK"
				  }).then(function mySucces(response) {
						alert("success REsponse:"+response);
					  $scope.myWelcome = response.data;
					  alert($scope.myWelcome );
					}, function myError(response) {
						alert("failure REsponse:"+response);
					  $scope.myWelcome = response.statusText;
					  alert($scope.myWelcome)
				  });	

			  
			};
		}]);





