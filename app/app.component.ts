import { Component } from '@angular/core';
import { TodoList } from './todo.component';
import { TodoService } from './todo.service';
@Component({
  selector: 'my-app',
  template: `<h1>TODO App</h1>
             <todo-list></todo-list>`,
  directives: [TodoList],
  providers: [TodoService]
})
export class AppComponent { }