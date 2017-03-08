/**
 * Created by dieinison on 31/01/17.
 */
(function(){
    var myApp = angular.module('myApp');

    myApp.config(function($stateProvider){
        var details = {
            name: 'details',
            url: '/details',
            templateUrl: 'templates/details.html',
            controller: 'DetailsController as md',
            params: {
                contentParams: null
            }
        };
        $stateProvider.state(details);
    });
}());