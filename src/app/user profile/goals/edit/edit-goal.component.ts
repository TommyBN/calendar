import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoalsService } from '../goals.service';
import { Goal } from '../Goal';

@Component({
    templateUrl:'./edit-goal.component.html',
    styleUrls:['../../../form.css']
})
export class EditGoalComponent implements OnInit {
  
    id:number;
    header:string;
    ShowWhenForm: boolean = false;
    addRemoveText: string = "הוסף יעדים";

    goalForm = new FormGroup({
        title: new FormControl('המטרה החשובה ביותר', Validators.required),
        path: new FormControl('גדכדג', Validators.required),
        description: new FormControl('זהו תיאור של המטרה שלי האם השדה מספיק ארוך כדי להכיל?', Validators.required),
        field: new FormControl('', Validators.required),
        event: new FormControl(''),
        secondaryGoals: new FormControl(''),
        destination: new FormGroup({
          destinationGeneral: new FormControl(''),
          destinationGeneralDate: new FormControl(''),
          destinationMonth: new FormControl(''),
          destinationMonthDate: new FormControl(''),
          destinationWeek: new FormControl(''),
          destinationWeekDate: new FormControl(''),
          destinationDay: new FormControl(''),
          destinationDayDate: new FormControl('')
        })
      });


    constructor(
        private route: ActivatedRoute,
        private goalsService: GoalsService){}
    
    
    ngOnInit(){
        this.route.paramMap.subscribe(params =>{
            this.id = params.get('id') ? +params.get('id') : 0;
            this.header = this.id == 0 ? "צור מטרה חדשה" : `עדכן את ${this.goalForm.get('title')}`

        } ,
            (err)=> console.error(err),
            ()=> {
                console.log(this.id, " ", this.header, " ", this.goalForm.get('title'))
            })
    }

    addRemove(){
        this.ShowWhenForm = !this.ShowWhenForm;
        this.addRemoveText = this.addRemoveText == "הוסף יעדים" ? "הסתר יעדים" : "הוסף יעדים";
    }

    

    // onSubmit() {
    //     console.log(this.goalForm.value);
    //     // let goal = new Goal(...this.goalForm.value);
    //     this.goalsService.addGoal(this.goalForm.value).subscribe((message)=>{
    //         console.log(message);
    //     })
    //   }
}