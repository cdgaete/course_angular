(function () {
'use strict';


angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {

    $scope.name = "Pedrito";
    $scope.sayHello = function(){
        return "Hello people!";
    };

});


})();