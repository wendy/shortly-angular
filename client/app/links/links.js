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
});
