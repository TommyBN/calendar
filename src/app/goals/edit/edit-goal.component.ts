import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl:'./edit-goal.component.html',
    styleUrls:['../../form.css']
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
        date: new FormControl(''),
        secondaryGoals: new FormControl(''),
        when: new FormGroup({
          whenGeneral: new FormControl(''),
          whenGeneralDate: new FormControl(''),
          whenMonth: new FormControl(''),
          whenMonthDate: new FormControl(''),
          whenWeek: new FormControl(''),
          whenWeekDate: new FormControl(''),
          whenDay: new FormControl(''),
          whenDayDate: new FormControl('')
        })
      });


    constructor(private route: ActivatedRoute){}
    
    
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

    

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.goalForm.value);
      }
}