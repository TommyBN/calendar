import {Component} from '@angular/core';

@Component({
    selector: 'personal-area-component',
    template: `
        <button class="btn btn-success"><a [routerLink]="['/main']"><h3>חזרה</h3></a></button>
        <h1>This is the personal area.....</h1>
    `
})
export class PersonalAreaComponent{

}