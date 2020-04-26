import { CalendarEvent } from "angular-calendar";

export class Goal {
        id: number; path: string; title: string; description: string;
        destination: string; when: When; event: CalendarEvent; 
        secondaryGoals: Goal[]
    constructor(
        id: number, path: string, title: string, description: string,
        destination: string, when: When, event: CalendarEvent, 
        secondaryGoals: Goal[]
    )
    {
        this.id = id;
        this.path = path;
        this.title = title;
        this.description = description;
        this.destination = destination;
        this.when = when;
        this.event = event;
        this.secondaryGoals = secondaryGoals;

    }
}

interface When {
    whenGeneral: string;//?
    whenMonth: string;//?
    whenWeek: string;//?
    whenDay: string;//?
}