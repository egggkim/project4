angular
  .module("app")
  .controller("TodosController", TodosController);

  TodosController.$inject = ['$resource'];

  function TodosController($resource){
    var self = this;

    var Todo = $resource("http://localhost:3000/api/todos/:id",
      { id: "@id" },
      {
        'update': { method: 'PUT' }
      }
    );

    self.todoList   = getTodos();     // INDEX
    self.addTodo    = addTodo;        // CREATE
    self.updateTodo = updateTodo;     // UPDATE
    self.deleteTodo = deleteTodo;     // DESTROY
    
    self.completedTodos = completedTodos;
    self.remainingTodos = remainingTodos;

    // INDEX
    function getTodos(){
      return Todo.query();  // GET /api/todos
    }

    // CREATE
    function addTodo(){
      var newList = new Todo();
      newList.task = self.text;
      newList.done = false;
      newList.$save();  // POST /api/todos

      this.todoList.push(newList);
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

    //returns a count of the tasks that have been marked as done
    function completedTodos(){
      var count = 0;
      for(var i = 0; i < self.todoList.length; i++){
        if(self.todoList[i].done){
          count++;
        }
      }
      return count;
    }

    //returns a count of the tasks that have not been marked as done
    function remainingTodos(){
      var count = 0;
      for(var i = 0; i < self.todoList.length; i++){
        if(self.todoList[i].done === false){
          count++;
        }
      }
      return count;
    }

  }
  