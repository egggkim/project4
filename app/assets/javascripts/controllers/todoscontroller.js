angular
  .module("app")
  .controller("TodosController", TodosController);

  TodosController.$inject = ['$resource']

  function TodosController($resource) {
    var self = this; 

    // Todo.query()   -> INDEX
    // todo.$save()   -> CREATE the todo object that calls it
    // todo.$delete() -> DESTROY the todo object that calls it
    var Todo = $resource("http://localhost:3000/api/todos/:id", { id: "@id" }, { 'update': {method: "PUT" } });

    // end of line above says look into the specific todo and replace :id with the actual id 

    self.todoList   = getTodos();     // INDEX
    self.addTodo    = addTodo;          // CREATE
    // self.updateTodo = updateTodo; // this will need a function defined below called updateTodo
    self.deleteTodo = deleteTodo;   // DESTROY

    self.completedTodos = completedTodos;
    self.remainingTodos = remainingTodos;

    // INDEX
    function getTodos() {
      return Todo.query();
      // return [
        // {task: "build an awesome todo app", done: false},
        // {task: "get super good at Angular", done: false},
        // {task: "party on code", done: false},
        // {task: "tackle the bonus challenges for this lesson", done: false},
        // {task: "take a nap", done: false}
      // ];
    }

    // CREATE
    function addTodo() {
      var newTodo = new Todo();
      // new Todo from $resource line 13
      newTodo.task = self.text;
      newTodo.done = false;
      newTodo.$save();
      self.todoList.push(newTodo);
      self.text = null;
    }

    // DESTROY
    function deleteTodo($index) {
      // deletes it from the server
      self.todoList[$index].$delete();
      // removes it from the client side
      self.todoList.splice($index, 1);
    }

    //returns a count of the tasks that have been marked as done
    function completedTodos() {
      var count = 0;
      for(var i = 0; i < self.todoList.length; i++) {
        if(self.todoList[i].done) {
          count++;
        }
      }
      return count;
    }

    //returns a count of the tasks that have not been marked as done
    function remainingTodos() {
      var count = 0;
      for(var i = 0; i < self.todoList.length; i++) {
        if(self.todoList[i].done === false) {
          count++;
        }
      }
      return count;
    }

  }
  