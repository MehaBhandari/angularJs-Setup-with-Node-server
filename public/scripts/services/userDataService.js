var myLayout = angular.module('myLayout');
myLayout.service('userDataService', function($http) {
    this.userDataFunction = function() {
        return $http.get('http://localhost:8080/api/userdata');
    };
});