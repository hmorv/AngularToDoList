var ToDoList = angular.module("ToDoList", ["LocalStorageModule"])

.controller("ToDoController", ["$scope", "localStorageService", function($scope, localStorageService){
	
	$scope.todo = (localStorageService.get("angular-todolist") ? localStorageService.get("angular-todolist") : []);

	$scope.$watchCollection('todo', function() {
		localStorageService.set("angular-todolist", $scope.todo);
	});

	$scope.addTask = function() {
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		localStorageService.set("angular-todolist",	$scope.todo);
	}

}]);