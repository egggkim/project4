angular
  .module('app')
  .controller("TodosController", TodosController);

  TodosController.$inject = ['$http'];

  function TodosController($http) {
    var self = this;

    self.todoslist = [];
    self.addTodo   = addTodo;
    self.updateTodo   = updateTodo;

    $http.get("/api/todos")
      .success(function(data, status, headers, config) {
        self.todoList = data.todos;
      });

    function addTodo() {
      $http({
        url: "/api/todos",
        method: "POST",
        data: {
          'task': self.task,
          'due_date': self.due,
          'done': false
        }
      })
      .success(function(data) {
        self.todoList;
        window.location.reload();
      })
      .error(function(data, status) {
        console.log(status)
        $('#todo-error').text("There was an issue adding this todo. Please try again.")
      });
    }

    function updateTodo(todo) {
      // console(todoList[$index])
      $http({
        url: "/api/todos/"+ todo.id,
        method: "PATCH",
        data: {
          // 'task': self.task,
          // 'due_date': self.due,
          'done': true
        }
      })
      .success(function(data) {
        console.log("hi")
      })
      .error(function(data, status) {
        console.log(status)
        $('#todo-error').text("There was an issue adding this todo. Please try again.")
      });
    }
  }