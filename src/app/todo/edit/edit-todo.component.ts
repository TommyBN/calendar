import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
    templateUrl:'./edit-todo.component.html',
    styleUrls:['../../form.css']
})
export class EditTodoComponent implements OnInit {
  
    id:number;
    header:string;
    ShowSecondaryForm: boolean = false;
    addRemoveText: string = "הוסף משימות משנה";

    todoForm = new FormGroup({
        title: new FormControl('המטרה החשובה ביותר', Validators.required),
        path: new FormControl('גדכדג', Validators.required),
        description: new FormControl('זהו תיאור של המטרה שלי האם השדה מספיק ארוך כדי להכיל?', Validators.required),
        event: new FormControl(''),
      });


    constructor(
        private route: ActivatedRoute,
        private todoService: TodoService){}
    
    
    ngOnInit(){
        this.route.paramMap.subscribe(params =>{
            this.id = params.get('id') ? +params.get('id') : 0;
            this.header = this.id == 0 ? "צור משימה חדשה" : `עדכן את"${this.todoForm.get('title')}"`
        })
    }

    addRemove(){
        this.ShowSecondaryForm = !this.ShowSecondaryForm;
        this.addRemoveText = this.addRemoveText == "הוסף משימות משנה" ? "הסתר משימות משנה" : "הוסף משימות משנה";
    }

    onSubmit() {
        console.log(this.todoForm.get('event'))
        // this.todoService.addTodo(this.todoForm.value).subscribe((message)=>{
        //     console.log(message);
        // })
      }
}