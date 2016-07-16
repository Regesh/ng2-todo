"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo.service');
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
        this.todos = [];
        this.appMode = 'add';
    }
    TodoList.prototype.getId = function () {
        return this.todos[this.todos.length - 1].id + 1;
    };
    TodoList.prototype.edit = function (todo) {
        this.oldText = todo.text;
        this.text = this.oldText;
        this.appMode = 'edit';
    };
    TodoList.prototype.del = function (itemId) {
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            if (todo.id == itemId) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            }
        }
        this.todoService.del(itemId);
    };
    TodoList.prototype.add = function (str) {
        switch (this.appMode) {
            case 'add':
                if (str) {
                    this.text = str;
                }
                var todoItem = { id: this.getId(), text: this.text };
                this.todos.push(todoItem);
                this.text = '';
                TodoList.lastItem = this.getId();
                this.todoService.add(todoItem);
                break;
            case 'edit':
                var currentText = this.text;
                this.text = '';
                for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                    var todo = _a[_i];
                    if (todo.text == this.oldText) {
                        this.todos[this.todos.indexOf(todo)].text = currentText;
                    }
                    this.appMode = 'add';
                    this.todoService.edit(this.oldText, currentText);
                }
                break;
        }
    };
    TodoList.prototype.ngOnInit = function () {
        this.todos = this.todoService.getTodos();
    };
    TodoList.lastItem = 0;
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n    <h1>{{appMode}}</h1>\n    <input type=\"text\" (keyup.enter)=\"add()\" [(ngModel)]=\"text\" />\n    <br/>\n    <ul>\n        <li *ngFor=\"let todo of todos\">{{todo.id}} <span (click)=\"edit(todo)\">{{todo.text}}</span> <button (click)=\"del(todo.id)\">&times;</button> </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todo.component.js.map