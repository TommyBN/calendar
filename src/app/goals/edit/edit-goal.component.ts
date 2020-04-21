import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({

})
export class EditGoalComponent implements OnInit {
  
    id:number;

    goalForm = new FormGroup({
        title: new FormControl(''),
        path: new FormControl(''),
        date: new FormControl(''),
        when: new FormGroup({
          whenGeneral: new FormControl(''),
          whenMonth: new FormControl(''),
          whenWeek: new FormControl(''),
          whenDay: new FormControl('')
        })
      });


    constructor(private route: ActivatedRoute){}
    
    
    ngOnInit(){
        this.route.paramMap.subscribe(params => 
            this.id = params.get('id') ? +params.get('id') : 0 )
    }
}