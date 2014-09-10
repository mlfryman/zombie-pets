(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){

    $scope.title = 'Zombie Pets';

    //toggle weapon form
    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    //weapon object
    $scope.weapon = {};
    $scope.weapons = [];

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      //focus on first input via jQuery
      $('#name').focus();
    };

    //pet object
    $scope.pet = {con:100};
    $scope.pets = [];

    //player 1; player 2
    $scope.player1  = null;
    $scope.player2  = null;

    //toggle pet form
    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    //add pet
    $scope.addPet = function(){
      if(!$scope.petForm.$valid){
        return;
      }
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {con:100};
    };

    //set player
    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    //con meter
    $scope.conMeter = function(con){
      if(con > 10){
        return {'background-color':'green', 'width':con + '%'};
      }else{
        return {'background-color':'red', 'width':con + '%'};
      }
    };

    $scope.fight = function(){
      //randomly determine who attacks first
      var num = Math.floor(Math.random() * 2) + 1,
          attkr = $scope['player' + num],
          defdr;
      if(num === 1){
        defdr = $scope.player2;
      }else{
        defdr = $scope.player1;
      }

      //attkr hits defdr
      var dmg = Math.floor(Math.random() * attkr.weapon.dmg);
      defdr.con -= dmg;
      console.log('attkr' + attkr.name + 'hits for' + dmg);
      if(defdr.con <= 0){
        defdr.weapon = {name:'Zombie Bite', dmg:3};
        defdr.isZombie = true;
      }

      //defdr hits attkr
      dmg = Math.floor(Math.random() * defdr.weapon.dmg);
      attkr.con -= dmg;
      console.log('defdr ' + defdr.name + ' hits for ' + dmg);
      if(attkr.con <= 0){
        attkr.weapon = {name:'Zombie Bite', dmg:3};
        attkr.isZombie = true;
      }
    };

    //test data: PETS
    $scope.createTribble = function(){
      $scope.pets.push({
        name: 'Tribble',
        photo: 'http://blog.al.com/techcetera/2008/12/tribble.jpg',
        con: 100,
        weapon: {name: 'Bat\'leth', photo: 'http://www.myatmarket.com/pics/63500/63500736.jpg', damage: '50'}
      });
    };

    $scope.createSloth = function(){
      $scope.pets.push({
        name: 'Fancy Sloth',
        photo: 'http://static.tumblr.com/avmpw3e/Xocl71v0m/sloth.gif',
        con: 100,
        weapon: {name: 'lightsaber', photo: 'http://www.gadgetreview.com/wp-content/uploads/2011/11/Lightsaber-650x594.jpg', damage: '75'}
      });
    };

    //test data: WEAPONS
    $scope.createBatleth = function(type){
      $scope.weapons.push({name: 'Bat\'leth', photo: 'http://www.myatmarket.com/pics/63500/63500736.jpg', damage: '50'});
    };

    $scope.createLightSaber = function(){
      $scope.weapons.push({name: 'Lightsaber', photo: 'http://www.gadgetreview.com/wp-content/uploads/2011/11/Lightsaber-650x594.jpg', damage: '75'});
    };

    $scope.createDTahg = function(){
      $scope.weapons.push({name: 'D\'Tahg', photo: 'http://www.geekalerts.com/u/Star-Trek-Klingon-Dk-Tahg-Letter-Opener.jpg', damage: '20'});
    };

  }]);
})();
