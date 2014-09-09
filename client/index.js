(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.player1 = null;
    $scope.player2 = null;

    //weapon object
    $scope.weapon = {};
    $scope.weapons = [];

    //pet object
    $scope.pet = {health: 100};
    $scope.pets = [];

    //add weapon
    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
    };

    //add pet
    $scope.addPet = function(){
      var index = $scope.pet.wIndex * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health: 100};
    };

    //set player
    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    //toggle controls
    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.fight = function(){
      var first = Math.ceil(Math.random() * 2),
      p1Damage = parseInt($scope.player1.weapon.damage),
      p2Damage = parseInt($scope.player2.weapon.damage);


      if(first === 1){
        //first hit
        $scope.player2.health -= Math.ceil(Math.random() * p1Damage);
        //second hit
        $scope.player1.health -= Math.ceil(Math.random() * p2Damage);
        checkZombie(2);
        checkZombie(1);
      }else{
        //second hit
        $scope.player2.health -= Math.ceil(Math.random() * p2Damage);
        //first hit
        $scope.player1.health -= Math.ceil(Math.random() * p1Damage);
        checkZombie(1);
        checkZombie(2);
      }

    };

    //quick create - WEAPONS

    $scope.createSword = function(type){
      $scope.weapons.push({name: 'Sword', photo: 'http://img3.wikia.nocookie.net/__cb20130105175556/runescape/images/5/5f/Mithril_sword_detail.png', damage: '12'});
    };

    $scope.createMachine = function(){
      $scope.weapons.push({name: 'Machine Gun', photo: 'http://www.defensereview.com/wp-content/uploads/2012/03/Israel_Weapon_Industries_IWI_Negev_NG7_Lightweight_Select-Fire_7.62x51mm_NATO_Medium_Machine_Gun_MMG_GPMG_1_small.jpg', damage: '30'});
    };

    $scope.createFlail = function(){
      $scope.weapons.push({name: 'Flail', photo: 'http://www.theskyfullofdust.co.uk/wp-content/uploads/2011/03/18649.jpg', damage: '20'});
    };

    //quick create - PETS

    $scope.createBaxter = function(){
      $scope.pets.push({
        name: 'Baxter',
        photo: 'http://www.thefoundist.com/wp-content/uploads/2011/10/baxter_anchorman.jpg',
        health: 100,
        weapon: {name: 'Flail', photo: 'http://www.theskyfullofdust.co.uk/wp-content/uploads/2011/03/18649.jpg', damage: '20'}
      });
    };

    $scope.createHoneyBadger = function(){
      $scope.pets.push({
        health: 100,
        name: 'Badger',
        photo: 'http://www.factzoo.com/sites/all/img/mammals/weasel/honey-badger-dont-care-just-chillin.jpg',
        weapon: {name: 'Machine Gun', photo: 'http://www.defensereview.com/wp-content/uploads/2012/03/Israel_Weapon_Industries_IWI_Negev_NG7_Lightweight_Select-Fire_7.62x51mm_NATO_Medium_Machine_Gun_MMG_GPMG_1_small.jpg', damage: '30'}
      });
    };

    function checkZombie(num){
      if($scope['player' + num].health < 0) {
        $scope['player' + num].photo = 'http://zombieportraits.com/wp-content/uploads/2012/08/Mister-Magotpaws-Zombie-Pet-Portrait.jpg';
        $scope['player' + num].weapon.damage = 3;
      }
      else { return; }
      }
    }]);
  })();
