angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.shorten = function(){
    console.log('userslink ', $scope.url);
    // Links.shorterlink({url: $scope.url});
    Links.shorterlink({url: $scope.url})
    .then(function(data){
      $scope.model = data.data;
    });
  };

  $scope.redirectlink = function(){
    return Links.redirectLink({url: $scope.url});
  }
});
