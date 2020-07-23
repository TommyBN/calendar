import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {

    showTodos: boolean = true;
    showGoals: boolean = false;
    modules = [
        { name: 'ספורט ופנאי', route: 'sports'}, 
        { name: 'איזור אישי', route: 'personals'} 
    ];

    constructor(private router: Router, private actRout:ActivatedRoute){}

    toggleTodos(){
        this.showTodos = !this.showTodos
    }

    toggleGoals(){
        this.showGoals = !this.showGoals
    }

    gotoModule(route) {
        this.router.navigate([`../${route}`], { relativeTo: this.actRout });
      }


}