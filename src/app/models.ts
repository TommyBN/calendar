import { CalendarEvent } from "angular-calendar";

export interface Todo{
    location: string;
    title: string;
    description: string;
    event: CalendarEvent;
    secondaryTodos: Todo[];
}

export interface Goal extends Todo{
    field: string;
    secondaryGoals: Goal[];
}