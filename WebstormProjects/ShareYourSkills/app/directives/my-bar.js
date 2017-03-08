(function () {
    var myApp = angular.module('myApp');

    var myBar = function(){
        return{
            restrict: 'E',
            templateUrl: 'templates/my-bar.html'
        }
    }
    myApp.directive('myBar', myBar);
}());