(function(){

    var myApp = angular.module('myApp');

    var cardController = function($scope){
        var mv = this;
        mv.contents = [{
            name: 'Introducao a Danca',
            description: 'Movimentos, posicionamento, ritmos, etc.',
            author: 'Arthur',
            img: 'figure1.jpg',
            idMenu: 1,
            emAlta: false
        },{
            name: 'Culinaria',
            description: 'Aprenda a arte da culinaria e a fazer pratos deliciosos',
            author: 'Kaylane',
            img: 'figure2.jpg',
            idMenu: 2,
            emAlta: true
        },{
            name: 'Introducao a Inteligencia Artificial',
            description: 'Conceitos, algoritmos, apredizagem de maquina, visao computacional.',
            author: 'Paulo',
            img: 'figure3.jpg',
            idMenu: 3,
            emAlta: true
        }];
    };

    cardController.$inject = ['$scope'];
    myApp.controller('cardController', cardController);
}());