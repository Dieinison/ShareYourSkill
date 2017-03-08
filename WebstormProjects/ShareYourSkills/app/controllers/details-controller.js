(function(){
    var myApp = angular.module('myApp');

    var DetailsController = function($stateParams){
        var mv = this;
        mv.details = $stateParams.contentParams;
    };
    DetailsController.$inject = ['$stateParams'];
    myApp.controller('DetailsController', DetailsController);
}());