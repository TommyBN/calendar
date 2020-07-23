import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.service';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-todos',
    templateUrl: './all-todos.component.html',
    styleUrls: ['../../../section.css']
})
export class AllTodosComponent implements OnInit{

    viewAddForm: boolean = false;
    userTodos:Todo[] = [];
    currentTodoIndex:number;
    showDeleteIcon: boolean = false;
    currentTodoToDelete: number;

    constructor ( private store:Store<any>, 
                  private todoService:TodoService,
                  private userService:UserService,
                ){}


    ngOnInit(){
        this.setTodos();
    }

    setTodos(){
        this.todoService.getUserTodos(this.userService.userId)
        .subscribe(todos => {
            this.userTodos = todos;
            this.todoService.setTodosInStore(todos);
        })
    }

    toggleAddForm(){
        this.viewAddForm = !this.viewAddForm
    }

    openEditForm(i){
        this.currentTodoIndex = this.currentTodoIndex == i ? -1 : i
    }

    async submitNewTodo(todo){
        let newTodo = await this.todoService.addTodo(todo);
        setTimeout(()=> this.setTodos(), 1000)
        this.viewAddForm = false;
        
    }

    async editTodo(todoId, newTitle){
        this.todoService.updateTodo(todoId, newTitle);
        this.currentTodoIndex = -1;
        this.setTodos();
    }

    async deleteTodo(todoId){
        await this.todoService.deleteTodo(todoId);
        this.setTodos();
        this.currentTodoToDelete = -1;
    }




  

}