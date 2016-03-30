function UsersService($http) {
  UsersService.getUserById = function() {
    
  }
  
  return UsersService;
}

angular
  .module('app.users')
  .factory('usersService', UsersService);