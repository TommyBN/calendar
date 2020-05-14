import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {

    modules = [
        { name: 'משימות', route: 'todos' }, 
        { name: 'מטרות', route: 'goals' },
        { name: 'ספורט ופנאי', route: 'sports'}, 
        { name: 'איזור אישי', route: 'personals'} 
    ];

    constructor(private router: Router, private actRout:ActivatedRoute){}


    gotoModule(route) {
        console.log(this.actRout)
        this.router.navigate([`../${route}`], { relativeTo: this.actRout });
      }


}