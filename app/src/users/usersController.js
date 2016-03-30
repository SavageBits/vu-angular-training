function UsersController($scope) {
  $scope.name = 'Mark';
  $scope.title = 'Cool Dude';  
}

angular
  .module('app.users')
  .controller('UsersController', UsersController);

