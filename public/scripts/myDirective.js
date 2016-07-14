define('myDirective', function(){
  var myDirective = function($compile) {
    return {
      restrict: 'E',
      templateUrl: 'directive/myDir.vash',
      scope: true,
      transclude: true,
      compile: function(element, attributes) {
        console.log("This is executed First")
        var template = '<input type="text" ng-model="myData.Name" />';
        var linkFn = $compile(template);
        return {
          pre: function(scope, element, attributes, controller, transcludeFn) {
            console.log("Pre Alert");
          },
          post: function(scope, element, attributes, controller, transcludeFn) {
            console.log("Post Alert");
            var content = linkFn(scope);
            element.find('.Dynamic').append(content);
            element.append(content);
            element.css("color", "red")
          }
        }
      },
      controller: function($scope) {
        console.log("Controller: " + $scope.myData.Name);
        $scope.getNewVariable = "New Data"
      }
    }
  }
  return myDirective;
})