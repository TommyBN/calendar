import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoalsService } from '../goals.service';
import { Goal } from '../Goal';

@Component({
    selector: 'app-add-goal',
    templateUrl:'./edit-goal.component.html',
    styleUrls:['../../../../form.css']
})
export class EditGoalComponent implements OnInit {
  
    id:number;
    header:string;
    ShowWhenForm: boolean = false;
    addRemoveText: string = "הוסף יעדים";
    @Output() emitGoal:EventEmitter<Goal> = new EventEmitter<Goal>();

    newGoal:Goal;


    constructor(private goalsService: GoalsService){}
    
    
    ngOnInit(){
        // this.route.paramMap.subscribe(params =>{
        //     this.id = params.get('id') ? +params.get('id') : 0;
        //     this.header = this.id == 0 ? "צור משימה חדשה" : `עדכן את"${this.todoForm.get('title')}"`
        // });
    }

    onSubmit() {
        this.emitGoal.emit(this.newGoal);
      }
}