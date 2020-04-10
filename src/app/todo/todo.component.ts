import { Component } from '@angular/core';
import { Todo } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:'<h1>id is {{id}}</h1>'
})
export class TodoComponent{
    todo: Todo;
    id:number;
    
    constructor( private activated:ActivatedRoute ){}

    ngOnInit(){
        this.id = this.activated.snapshot.params['id'];
    }
}