import {Component} from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
    templateUrl:'./sports.component.html',
    styleUrls:['../../../section.css']
})
export class SportsComponent{
    allSports:Array<any>;

    constructor(private sportsService:SportsService){}

    ngOnInit(){
        this.sportsService.getAllSports().subscribe(sports=>{
            this.allSports = sports.sports;
            console.log(this.allSports)
        })
    }
}