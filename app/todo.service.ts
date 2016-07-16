import {Injectable} from '@angular/core';
@Injectable()
export class TodoService{
    constructor(){
        console.log('todoService running..');
    }
    edit(_old,_new){
        let todos = JSON.parse(localStorage.getItem('todos'));
        for(let todo of todos){
            if(todo.text == _old){
                todos[todos.indexOf(todo)].text = _new;
            }
        }
        localStorage.setItem('todos',JSON.stringify(todos));

    }
    add(todoItem){
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todoItem);
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    
    del(itemId){
        let todos = JSON.parse(localStorage.getItem('todos'));
        for(let todo of todos){
            if(todo.id == itemId){
                todos.splice(todos.indexOf(todo),1);
            }
        }
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    getTodos(){
        var todos;
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            todos = [{id:1,text:'buy a new car'},{id:2,text:'buy a new house'},{id:3,text:'take a vacation'}];
            localStorage.setItem('todos',JSON.stringify(todos));
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }
}