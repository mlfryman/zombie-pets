(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', '$interval', function($scope, $interval){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100};
    $scope.pets = [];

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.addPet = function(){
      $scope.pets.push($scope.pet);
      $scope.pet = {};
      $('#petName').focus();
    };

  }]);
})();

