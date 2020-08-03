import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../Goal';
import { CalendarEvent } from 'angular-calendar';
import { UserService } from 'src/app/user profile/user.service';
import * as moment from 'moment';
import { EventsService } from '../../calendar/events.service';

@Component({
    selector: 'app-add-goal',
    templateUrl:'./edit-goal.component.html',
    styleUrls:['../../user-forms.css']
})
export class EditGoalComponent implements OnInit {
  
    @Output() goalSubmit:EventEmitter<Goal> = new EventEmitter<Goal>();
   
    private event:CalendarEvent;
    private newGoal: Goal;

    constructor(private userService: UserService, 
                private eventsService: EventsService) {}
    
    ngOnInit(){
        this.newGoal.user_id = this.userService.userId
    }

    async onSubmit() {
        //create event
        this.event.title = this.newGoal.title;
        this.event.color = "yellow";
        this.event.start = await moment(this.event.start).toDate();
        this.event.draggable = true;

        //save new event
        let body = { ...this.event, user_id: this.userService.userId};
        this.eventsService.saveEvent(body).subscribe(
            eventID => {
                this.newGoal.event_id = eventID;
                console.log('new goal: ',this.newGoal)
                //save goal
                this.goalSubmit.emit(this.newGoal);
            }
        )
      }
}