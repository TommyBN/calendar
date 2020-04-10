import { Component } from '@angular/core';
import { Todo } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
    templateUrl: './todo.component.html'
})
export class TodoComponent{
    todo: any; //TODO: change to Todo...
    id:number;
    
    constructor( private activated:ActivatedRoute, private todoService: TodoService ){}

    ngOnInit(){
        //TODO: Change this shit...
        this.id = this.activated.snapshot.params['id'];
        this.todoService.getAllTodos().subscribe(todos => {
            for(let todo of todos){
                if(this.id == todo.id) this.todo = todo
            }
        })
    }
}