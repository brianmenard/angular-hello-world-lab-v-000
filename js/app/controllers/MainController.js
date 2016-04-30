function MainController ($scope){
  $scope.name = 'Brian';
  $scope.email = 'name@site.com'
  $scope.phone = '555-555-5555'
};

  angular
    .module('app')
    .controller('MainController', MainController);