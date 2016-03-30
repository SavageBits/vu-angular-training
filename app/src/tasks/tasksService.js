function TasksService($http) {
  TasksService.getTasks = function() {
    
  }
  
  return TasksService;
}

angular
  .module('app.tasks')
  .factory('tasksService', TasksService);