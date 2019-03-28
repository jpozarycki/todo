import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;
  // todos = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Become an expert at Angular', false, new Date()),
  //   new Todo(3, 'Jump on bungee', false, new Date())
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to dance'
  // };

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('jpozarycki').subscribe(
      response => this.todos = response
    );
  }
  deleteTodo(id: number) {
    // console.log('delete todo');
    this.todoService.deleteTodo('jpozarycki', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} was successful!`;
        this.refreshTodos();
      }

    );

  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }
}
