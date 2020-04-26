import { CalendarEvent } from "angular-calendar";

export interface Todo {
    id: string,
    title: string,
    path: string,
    description: string,
    event: CalendarEvent
}