import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../Todo';
import { Todo } from '../Todo';
import { UserService } from '../../../User';

@Component({
    selector: 'app-todos',
    templateUrl: './all-todos.component.html',
    styleUrls: ['../../../../section.css']
})
export class AllTodosComponent implements OnInit{

    showAddForm: boolean = false;

    constructor ( private store:Store<any>, 
                  private todoService:TodoService,
                  private userService:UserService,
                ){}

    userTodos:Todo[] = [];

    ngOnInit(){
        this.todoService.getUserTodos(this.userService.userId)
        .subscribe(todos => {
            this.userTodos = todos;
            this.todoService.setTodosInStore(todos);
        })
    }

    toggleAddForm(){
        this.showAddForm = !this.showAddForm
    }

    submitNewTodo(todo){
        this.todoService.addTodo(todo);
        this.showAddForm = false;
        this.ngOnInit();
    }

    deleteTodo(todoId){
        this.todoService.deleteTodo(todoId);
        this.ngOnInit();
    }




  

}