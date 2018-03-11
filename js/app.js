// JavaScript Document
var app = angular.module("myApp", ["ngRoute", "ngTouch"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "homeCtrl"
        })
        .otherwise({
            redirectTo:'/',
            templateUrl:'views/home.html',
            controller: 'homeCtrl'
        });
});

app.controller('homeCtrl', function($scope) {
    $scope.msg = "Galeria";

    // Array da galeria
    $scope.galeria = [
        {imagem: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg'},
        {imagem: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg'},
        {imagem: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg'},
        {imagem: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg'},
        {imagem: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg'},
        {imagem: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg'}
    ];
    // Valor inicial das imagens
    $scope.$index = 0;
    // Se a imagem atual for a mesma imagem requisitada
    $scope.isActive = function (index) {
        return $scope.$index === index;
    };
    // Mostra a imagem anterior
    $scope.showPrev = function () {
        $scope.$index = ($scope.$index > 0) ? --$scope.$index : $scope.galeria.length - 1;
    };
    // Mostra a próxima imagem
    $scope.showNext = function () {
        $scope.$index = ($scope.$index < $scope.galeria.length - 1) ? ++$scope.$index : 0;
    };
    // Mostra a imagem que foi selecioanda
    $scope.showPhoto = function (index) {
        $scope.$index = index;
    };

    $scope.carouselNext = function() {
        $('#carousel-parceiros-xs').carousel('next');
    };
    $scope.carouselPrev = function() {
        $('#carousel-parceiros-xs').carousel('prev');
    };
});