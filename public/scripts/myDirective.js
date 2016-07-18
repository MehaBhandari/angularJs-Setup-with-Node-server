define('myDirective', function(){
  var myDirective = function($compile) {
    return {
      restrict: 'E',
      templateUrl: 'directive/myDir.vash',
      scope: true,
      transclude: true,
      compile: function(element, attributes) {

        // Basically used to create Link function for the HTML Templates

        // This Link Function can be further used 

        // console.log('Compile function is the second function to be called');

        // Anything before return is a part of Compile");

        var template = '<input type="text" ng-model="myData.Name" />';
        var linkFn = $compile(template);

        // In compile Function we are having compiled template.

        // Scope is still not available here

        // Since we have element available, therefore we can make changes to the Element.

        return {

          // "Pre and post" are link functions, here we have scope available to be bound

          pre: function(scope, element, attributes, controller, transcludeFn) {

            // console.log('Pre Link function is the third function to be called');

          },
          post: function(scope, element, attributes, controller, transcludeFn) {

            // console.log('Pre Link function is the forth function to be called');

            // This is post Link function. Scope is now available.

            var content = linkFn(scope);

            element.find('.Dynamic').append(content);
            element.append(content);
            element.css("color", "red")
          }
        }
      },
      controller: function($scope) {

        // console.log('Controller is the first function to be fired');

        console.log("Controller: " + $scope.myData.Name);
        $scope.getNewVariable = "New Data"
      }
    }
  }
  return myDirective;
})