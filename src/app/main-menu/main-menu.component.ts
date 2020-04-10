import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styles: [`
        .container{
            display: flex;
            flex-direction: column;
            align-items: space between;
        }
        .mainDiv{
            border: 1px solid black;
            border-radius: 5px;
            margin: 10px;
            padding: 10px;
            text-align: right;
        }
        .btn{
            width: 10%;
        }
    `]
})

export class MainMenuComponent {

    subjects:string[] = ['משימות' ,'מטרות', 'ספורט ופנאי', 'איזור אישי'];




}