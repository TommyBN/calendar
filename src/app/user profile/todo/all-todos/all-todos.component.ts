import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';
// import { colors } from 'src/app/user profile/main/calendar/colors';

@Component({
    templateUrl: './all-todos.component.html',
    styleUrls: ['../../../section.css']
})
export class AllTodosComponent implements OnInit{

    constructor ( private store:Store<any>, private todoService:TodoService ){}

    allTodos:Todo[] = [
        {
            description: "default todo",
            event: {
                title: 'Draggable event',
                // color: colors.yellow,
                start: new Date(),
                draggable: true,
            },
            path: "משימות",
            title: "for case no todos are set",
            _id: "5ea561a1129a170c0479f5cb",
            secondaryTodos:[]
        }
    ];
    numOfMissions:number;

    ngOnInit(){
        this.todoService.getAllTodos().subscribe(todos => {
            this.allTodos = todos;
            console.log('all todos: ', this.allTodos);
            this.todoService.setTodos(todos);
        })

        
    }

    


  

}