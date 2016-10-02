var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$http', function($scope, $http) {

	$scope.transactionList = {
		name : 'Anshu Kumar',
		accountNumber : '986882671',
		accountBalance : '65672,28',
		transactions : [
		{
			to : "1",
			from : "2",
			serialNumber : '1',
			transactionDate : '01-08-2016', 
			transactionRemark : 'Rent for Oct',
			transactionType : 'Debit',
			amount : '2150,00'
		},
		{
			to : "1",
			from : "3",
			serialNumber : '2',
			transactionDate : '07-08-2016', 
			transactionRemark : 'Liddle',
			transactionType : 'Debit',
			amount : '100,32'
		},
		{
			to : "1",
			from : "2",
			serialNumber : '3',
			transactionDate : '10-08-2016', 
			transactionRemark : 'Burger King',
			transactionType : 'Debit',
			amount : '10,43'
		},
		{
			to : "1",
			from : "4",
			serialNumber : '4',
			transactionDate : '23-08-2016', 
			transactionRemark : 'Salary For Oct',
			transactionType : 'Credit',
			amount : '4000,34'
		}
		]
	};
	
	$scope.entities = [
		{
			serialNumber : "1",
			entityName : "France",
			initialBalance : "228412,454"
		},
		{
			serialNumber : "2",
			entityName : "Netherlands",
			initialBalance : "341262,3234"
		},
		{
			serialNumber : "3",
			entityName : "Spain",
			initialBalance : "87878,8897"
		},
		{
			serialNumber : "4",
			entityName : "India",
			initialBalance : "878761,21"
		},
		{
			serialNumber : "5",
			entityName : "Netherlands",
			initialBalance : "878761,21"
		}
	];
	
	$scope.registerEntity = function(entity){
		if(!angular.isUndefined(entity)){
			$scope.entities.push(entity);
		}
	};
	
	$scope.entity={};
	$scope.trenasfer = function(entity){
		http://127.0.0.1:3000/user//from/entity.from.entityName/to/entity.to.entityName/amount/entity.amount
	};
	
}]);





