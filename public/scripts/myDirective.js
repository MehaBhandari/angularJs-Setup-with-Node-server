define('myDirective', function(){
  var myDirective = function() {
    return {
      restrict: 'E',
      templateUrl: 'directive/myDir.vash',
    }
  }
  return myDirective;
})