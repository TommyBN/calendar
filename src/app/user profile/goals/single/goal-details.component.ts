import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../Goal';
import { TodoService, Todo } from '../../todo/todo.service';
import { GoalsService } from '../goals.service';
import { Store } from '@ngrx/store';
import { EventsService } from '../../calendar/events.service';

@Component({
    selector: 'app-goal',
    templateUrl:'./goal-details.component.html',
    styleUrls: ['../goals.css']
})
export class GoalDetailsComponent implements OnInit{

    @Input() goal: Goal;
    @Input() subGoals: Goal[];
    currentSubGoal:number;
    showEditGoal:boolean = false;
    showAddTodo: boolean = false;
    editButtonText:string = 'הוסף מטרת משנה';
    done: boolean = false;

    constructor(
        private todoService: TodoService,
        private goalService: GoalsService,
        private store: Store<any>,
        private eventsService: EventsService    
    ){}

    ngOnInit(){
        this.store.dispatch({ type: 'current-goal', action: this.goal });
        this.done = this.goal.done;
    }
    
    open(i){
        this.currentSubGoal = this.currentSubGoal == i ? -1 : i
    }

    toggleEditForm(){
        this.showEditGoal = !this.showEditGoal;
        this.editButtonText = this.editButtonText == 'סגור' ? 'הוסף מטרת משנה' : 'סגור'
    }

    toggleAddTodo(){
        this.showAddTodo = !this.showAddTodo
    }

    saveTodo(todo:Todo){
        this.goalService.addTodoToGoal(todo, this.goal._id).subscribe(message => {
            window.alert(message);
            this.ngOnInit();
        })
    }

    saveSubGoal(subGoal:Goal){
        this.goalService.addSubGoal(subGoal, this.goal._id).subscribe(message => {
            window.alert(message);
            this.showAddTodo = false;
        })        
    }


    doSomething() {
        this.done = true;
    }

    deleteGoal() {
     this.goalService.deleteGoal(this.goal._id).subscribe(message => window.alert(message))   
    }
}