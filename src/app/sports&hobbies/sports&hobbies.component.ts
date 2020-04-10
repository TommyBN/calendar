import {Component} from '@angular/core';

@Component({
    selector: 'sports&hobbies-component',
    template: `
        <button class="btn btn-success"><a [routerLink]="['/main']"><h3>חזרה</h3></a></button>
        <h1>This is the sports & hobbies component speaking</h1>
        <h3> How Are You ? </h3>
    `
})
export class SportsAndHobbiesComponent{

}