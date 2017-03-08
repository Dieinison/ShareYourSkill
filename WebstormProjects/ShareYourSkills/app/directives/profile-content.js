(function () {
    var myApp = angular.module('myApp');

    var profileContent = function(){
        return{
            restrict: 'E',
            templateUrl: 'templates/profile-content.html'
        }
    }
    myApp.directive('profileContent', profileContent);
}());