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
var TodoService = (function () {
    function TodoService() {
        console.log('todoService running..');
    }
    TodoService.prototype.edit = function (_old, _new) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
            var todo = todos_1[_i];
            if (todo.text == _old) {
                todos[todos.indexOf(todo)].text = _new;
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.add = function (todoItem) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todoItem);
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.del = function (itemId) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        for (var _i = 0, todos_2 = todos; _i < todos_2.length; _i++) {
            var todo = todos_2[_i];
            if (todo.id == itemId) {
                todos.splice(todos.indexOf(todo), 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.getTodos = function () {
        var todos;
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
            todos = [{ id: 1, text: 'buy a new car' }, { id: 2, text: 'buy a new house' }, { id: 3, text: 'take a vacation' }];
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map