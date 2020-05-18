import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../Todo';
import { Todo } from '../Todo';
import { UserService } from '../../User';
import { Location } from '@angular/common';
// import { colors } from 'src/app/user profile/main/calendar/colors';

@Component({
    templateUrl: './all-todos.component.html',
    styleUrls: ['../../../section.css']
})
export class AllTodosComponent implements OnInit{

    constructor ( private store:Store<any>, 
                  private todoService:TodoService,
                  private userService:UserService,
                  private location: Location 
                ){}

    userTodos:Todo[] = [
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

    ngOnInit(){
        this.todoService.getUserTodos(this.userService.userId).subscribe(todos => {
            this.userTodos = todos;
            this.todoService.setTodosInStore(todos);
        })
    }

    back(){
        this.location.back()    
    }



        



  

}