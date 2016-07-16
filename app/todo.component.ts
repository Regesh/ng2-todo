import {Component} from '@angular/core';
import { ITodoItem } from './todoItem.component';
import { TodoService } from './todo.service';
@Component({
    selector:'todo-list',
    template:`
    <h1>{{appMode}}</h1>
    <input type="text" (keyup.enter)="add()" [(ngModel)]="text" />
    <br/>
    <ul>
        <li *ngFor="let todo of todos">{{todo.id}} <span (click)="edit(todo)">{{todo.text}}</span> <button (click)="del(todo.id)">&times;</button> </li>
    </ul>
    `
})
export class TodoList{
    todos: ITodoItem[] = [];
    text;
    oldText: string; // only for edit mode
    appMode: string = 'add';
    static lastItem: number = 0;
    constructor(private todoService: TodoService){
    }

    getId(){
        return this.todos[this.todos.length-1].id+1;
    }
    edit(todo){
        this.oldText = todo.text;
        this.text = this.oldText;
        this.appMode = 'edit';
    }
    del(itemId){
        for(let todo of this.todos){
            if(todo.id == itemId){
                this.todos.splice(this.todos.indexOf(todo),1);
            }
        }
        this.todoService.del(itemId);
    }
    add(str){
        switch(this.appMode){
            case 'add':
                if(str){
                    this.text = str;
                }
                let todoItem: ITodoItem = {id:this.getId(),text:this.text};
                this.todos.push(todoItem);
                this.text = '';
                TodoList.lastItem = this.getId();
                this.todoService.add(todoItem);
            break;
            case 'edit':
            let currentText = this.text;
            this.text = '';
            for(let todo of this.todos){
                if(todo.text == this.oldText){
                    this.todos[this.todos.indexOf(todo)].text = currentText;
                }
                this.appMode = 'add';
                this.todoService.edit(this.oldText,currentText);
            }
            break;
        }
    }

    ngOnInit(){
        this.todos = this.todoService.getTodos();
    }
}