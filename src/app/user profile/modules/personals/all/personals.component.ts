import {Component} from '@angular/core';

@Component({
    templateUrl: 'personals.component.html',
    styleUrls: ['./personals.component.css']    
})
export class PersonalsComponent{
    questionHasBeenAnswered:boolean = false;
    message:string;

    openYesModal(){
        this.questionHasBeenAnswered = !this.questionHasBeenAnswered;
        this.message = "Coming soon..."
    }

    openNoModal(){
        this.questionHasBeenAnswered = !this.questionHasBeenAnswered;
        this.message = "Parents area. Please leave."
    }
}