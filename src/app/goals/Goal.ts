import { CalendarEvent } from "angular-calendar";

export interface Goal {
        id: number;
        path: string;//?
        title: string;
        description: string;
        destination: string;//?
        when: When;
        event: CalendarEvent;
        secondaryGoals: Goal[];
}

interface When {
    whenGeneral: string;//?
    whenMonth: string;//?
    whenWeek: string;//?
    whenDay: string;//?
}