/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of Todo
    - remove(indexOfTodo): remove todo from list of Todo
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all Todo
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all Todo

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoItems = [];
  }

  add(todo) {
    this.todoItems.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < this.todoItems.length) {
      this.todoItems.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index < this.todoItems.length) {
      this.todoItems[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todoItems;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.todoItems.length) {
      return this.todoItems[indexOfTodo];
    }

    return null;
  }

  clear() {
    this.todoItems = [];
  }
}

module.exports = Todo;
