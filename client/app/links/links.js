angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];

  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(data){
      $scope.listModel = data;
    });
  };

  $scope.gooverthere = function(model){
    console.log(model)
    Links.redirectlink(model);
  }
});
