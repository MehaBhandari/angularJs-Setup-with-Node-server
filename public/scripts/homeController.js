define('homeController', [], function() {
  var homeController = function($scope) {
    $scope.containerName = "Layout";

    $scope.myData = {
      Name: "Mayank",
      Age: 27
    }
  }
  return homeController;
});