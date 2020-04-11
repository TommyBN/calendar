import { Component } from '@angular/core';
import { Todo } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
    templateUrl: './todo.component.html',
    styles:[`

    .container{
        padding:5%;
        text-align: right;
    }
    .general-buttons{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .main{
        padding:5%;
        display: flex;
        flex-direction: column;
    }

    *{ direction:rtl}
    `]
})
export class TodoComponent{
    todo: any; //TODO: change to Todo...
    id:number;
    
    constructor( private activated:ActivatedRoute, private todoService: TodoService ){}

    ngOnInit(){
        //TODO: Change this shit...
        this.id = this.activated.snapshot.params['id'];
        this.todoService.getAllTodos().subscribe(allTodos => {
            for(let todo of allTodos.todos){
                if(this.id == todo.id) this.todo = todo
            }
        })
    }
}