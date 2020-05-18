import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../Todo';
import { Todo } from '../Todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls:['../../../section.css']
})
export class TodoComponent implements OnInit {
    @Input() todo: Todo;
    @Input() secondaryTodos: Todo[]; 
    visible:boolean = false;

    constructor( 
        private todoService: TodoService
    ){}

    ngOnInit(){
    }

    toggleContent(){
        this.visible = !this.visible
    }

}