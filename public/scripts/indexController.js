define('indexController', [], function() {
  var indexController = function($scope) {
	  $scope.containerName = "Index";
    $scope.myData = {
      Name: "Mayank"
    }
  }
  return indexController;
});