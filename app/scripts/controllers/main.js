'use strict';

/**
 * @ngdoc function
 * @name livewellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp')
  .controller('MainCtrl', function ($scope, UserDetails) {

  	$scope.pageTitle = 'LiveWell';

    $scope.mainLinks = [
    {name:"Foundations", href:"foundations"},
    {name:"Skills", href:"skills"},
    {name:"Check Ins", href:"checkins"},
    {name:"Daily Review", href:"daily_review"},
    {name:"Wellness Plan", href:"wellness/resources"}



    ];

    // $scope.showLogin = function(){

    //   if (UserDetails.find.id == null){
    //     return true
    //   }
    //   else {
    //     return false
    //   }

    // }

  });
