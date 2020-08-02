import { Component } from "@angular/core"

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent {

    private start: Date;
    private end: Date;
    private title: string;
    private description: string;

}