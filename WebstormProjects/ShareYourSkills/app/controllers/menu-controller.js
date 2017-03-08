(function(){
    var myApp = angular.module('myApp');

    var menuController = function($scope){
        var mv = this;

        mv.menuAtual = 0;

        mv.menus = [{
          id: 1,
          nome: 'Arte'
        },{
          id: 2,
          nome: 'Idiomas'
        },{
          id: 3,
          nome: 'Desenvolvimento Pessoal'
        },{
          id: 4,
          nome: 'Tecnologia'
        },{
          id: 5,
          nome: 'Negocios'
        }];

        mv.updateMenu = function(id){
            mv.menuAtual = id;
        };
    };

    menuController.$inject = ['$scope'];
    myApp.controller('menuController', menuController);
}());