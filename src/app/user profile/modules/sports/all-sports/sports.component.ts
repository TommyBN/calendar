import {Component, ChangeDetectionStrategy} from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
    templateUrl:'./sports.component.html',
    styleUrls:['../../../../section.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsComponent{
    sports = [
        { id: 1, title: 'מדיטציה' },
        { id: 2, title: 'ריצה' },
        { id: 3, title: 'נגינה על פסנתר' },
        { id: 4, title: 'טיולים' }
    ]
    lastDiv:string = 'odd';

    constructor(private sportsService:SportsService){}

    ngOnInit(){
    }

    next(){
        return this.lastDiv = this.lastDiv == 'odd' ? 'even' : 'odd'  
    }
}