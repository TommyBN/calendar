import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';
import { Todo } from '../Todo';

@Component({
    templateUrl: './todo.component.html',
    styleUrls:['../../../section.css']
})
export class TodoComponent implements OnInit {
    todo: Todo; 
    id:string;
    
    constructor( 
        private route:ActivatedRoute, 
        private router: Router,
        private todoService: TodoService, 
        private location: Location ){}

    ngOnInit(){
        console.log('todo: ', this.todo)
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id');
        })
    }

    back(){
        this.location.back();
    }
}