var myApp=angular.module("myApp",[]);
myApp.controller('myController', function ($scope) {
	document.getElementById("p1").innerHTML="hello all";

	$scope.name="abhinav";
	$scope.num=20;

	$scope.test=function(){
 return $scope.num+$scope.name;
	};

	$scope.sum=function(a,b){
       return a+b;

	};
});