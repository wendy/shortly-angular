angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.shorten = function(){
    $scope.url = $scope.shorten.url;
    console.log('userslink ', $scope.url);
    return Links.shorterlink({url: $scope.url});
  };
});
