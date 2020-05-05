import { CalendarEvent } from "angular-calendar";

export interface Todo {
    _id: string,
    title: string,
    path: string,
    description: string,
    event: CalendarEvent,
    secondaryTodos: Todo[]
}