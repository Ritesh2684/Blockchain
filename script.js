function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.
	$scope.pershare =0;
	$scope.isshow=true;
	$scope.services = [
		{
			name: 'Shubham ',
			price: 0,
			active:false,
			IBAN:'100012981',
			emailId:'',
			phoneNumber:''
		},{
			name: 'Sitaram',
			price: 0,
			active:false,
			IBAN:'',
			emailId:'sitaram.kumar@gmail.com',
			phoneNumber:''
		},{
			name: 'Nil',
			price: 0,
			active:false,
			IBAN:'',
			emailId:'',
			phoneNumber:'+31786567876'
		},{
			name: 'Anshu',
			price: 0,
			active:false,
			IBAN:'6765456789',
			emailId:'',
			phoneNumber:''
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){
		
		var total = 500;

		// Use the angular forEach helper method to
		// loop through the services array:
		var x=0;
		$scope.pershare = total; 
		angular.forEach($scope.services, function(s){
			if (s.active){
				x++;
				pr=total/x;
				$scope.pershare  = pr
				
			}
		});
		
		angular.forEach($scope.services, function(s){
			if (s.active){
				s.price = $scope.pershare;
			}else if(!s.active){
				s.price = 0;
			}
		});

		return total;
	};
	
	$scope.addUser = function (service) {
				$scope.services.push(service); 
				$scope.isshow=true;
				
	};
	
	$scope.showhide= function () {
		$scope.isshow=false;
	}
	
	$scope.showpage1= function () {
		$scope.isshow=true;
	}

}
