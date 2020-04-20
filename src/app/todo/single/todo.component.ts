import { Component, OnInit } from '@angular/core';
// import { Todo } from '../../models';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';

@Component({
    templateUrl: './todo.component.html',
    styleUrls:['../../section.css']
})
export class TodoComponent implements OnInit {
    todo: any; //TODO: change to Todo...
    id:number;
    // id2:number;
    
    constructor( private activated:ActivatedRoute, private router: Router, private todoService: TodoService, private location: Location ){}

    ngOnInit(){
        //TODO: Change this shit...
        this.activated.paramMap.subscribe((params: ParamMap) => {
            console.log('params: ',params)
            this.id = parseInt(params.get('id'));
            console.log('id in getParams: ', this.id)

            this.todoService.getAllTodos().subscribe(allTodos => {
                console.log('id in getTodos: ', this.id)
                for(let todo of allTodos.todos){
                    if(this.id == todo.id) this.todo = todo
                }
            })
        })
        // this.id = this.activated.snapshot.params['id'];
        // this.id2 = this.activated.snapshot.params['id2'] ? this.activated.snapshot.params['id2'] : null
      
    }

    back(){
        // this.router.navigate(['../'], {relativeTo:this.activated})
        this.location.back();
    }
}