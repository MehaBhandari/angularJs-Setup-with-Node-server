var myLayout = angular.module('myLayout');
myLayout.controller('layoutController', function($scope, userDataService) {
    $scope.name = "Meha Bhandari";
    $scope.userDataArr = [];
   
    var qualities = ['intelligent', 'smart', 'elite', 'vocal', 'destructor', 'coward', 'star'];

    $scope.qualitiesArray = [];

    $scope.qualityListFunc = function(id) {
        var empId = id;
        qualities.filter(function(qual, index){
            if(empId == 0) {
                $scope.qualitiesArray.push("No qualities exist");
            }
            if(empId == 1) {
                $scope.qualitiesArray.push("Qualities not needed");
            }
            if(empId%2 == 0 && empId != 0) {
                $scope.qualitiesArray.push(qual);
            }
            if(empId%3 == 0) {
                $scope.qualitiesArray.push(qual);
            }
            else {
                $scope.qualitiesArray.push(qual);
            }
            
        });
        return $scope.qualitiesArray;
    }

    $scope.alertId = function (id) {
        alert('ID is: ' + id);
    }

    //Dummy Data 

    // $scope.userDataArr = [{
    //     "id": "1",
    //     "createdAt": "2018-12-03T11:37:42.015Z",
    //     "name": "Ms. Gaylord Streich",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"
    // }, {
    //     "id": "20000",
    //     "createdAt": "2018-12-02T21:06:49.825Z",
    //     "name": "Roxanne Kunde",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg"
    // }, {
    //     "id": "3",
    //     "createdAt": "2018-12-03T03:37:39.995Z",
    //     "name": "Dante Spencer",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg"
    // }, {
    //     "id": "4",
    //     "createdAt": "2018-12-03T11:07:34.261Z",
    //     "name": "Benny Hartmann",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg"
    // }];

    // $scope.deleteFunc = function(index) {
    //     $scope.userDataArr.splice(index,1);
    // }

    $scope.deleteFunc = function(arr, id) {
        for(var i=0; i<arr.length; i++){
            if(arr[i].id == id){
                arr.splice(i,1);
                break; //so that loop ends as soon as id is matched.
            }
        }
    };

    //API call without using service
    // $http.get('http://localhost:8080/api/userdata').then(function(response) {
    //     $scope.userDataArr = response.data;
    // }); 

    var userDataPromise = userDataService.userDataFunction();
    userDataPromise.then(function(response) {
        $scope.userDataArr = response.data;
    });
    
    $scope.updateFunc = function() {

    }

})
myLayout.config( function( $routeProvider ){
    //$routeProvider.when()
});