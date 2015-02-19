angular
  .module("app")
  .controller("TodosController", TodosController);

  TodosController.$inject = ['$http'];

  function TodosController($http) {
    var self = this;

    self.todoList   = [];
    self.addTodo    = addTodo;        // CREATE
    // self.updateTodo = updateTodo;     // UPDATE
    // self.deleteTodo = deleteTodo;     // DESTROY
    
    $http.get("/api/todos").
      success(function(data, status, headers, config) {
        self.todoList = data.todos;
      });

    // CREATE
    function addTodo(){
      $http({
        url: "/api/todos",
        method: "POST",
        data: {
          'task': self.task,
          'done': self.done
        }
      })
      var newList = new Todo();
      newTodo.task = self.text;
      newTodo.done = false;
      newTodo.$save();
      self.todoList.push(newTodo);
      self.text = null;
    }

    // UPDATE
    function updateTodo(todo){
      todo.$update();   // PUT /api/todos/:id
    }

    // DESTROY
    function deleteTodo(todo){
      todo.$delete();   // DESTROY /api/todos/:id

      self.todoList.splice(self.todoList.indexOf(todo), 1);
    }

  }
