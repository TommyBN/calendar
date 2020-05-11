import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl:'./welcome.component.html',
    styles:[`
    .funky{ 
        height: 50%; 
        background-color: linear-gradient(to top left, blue, white);
    }

    .funky h1 { margin-top: 50%}
    `]
})

export class WelcomeComponent {

    //subjects:string[] = ['משימות' ,'מטרות', 'ספורט ופנאי', 'איזור אישי'];




}