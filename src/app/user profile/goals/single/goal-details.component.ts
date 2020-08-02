import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../Goal';
import { TodoService, Todo } from '../../todo/todo.service';
import { GoalsService } from '../goals.service';
import { Store } from '@ngrx/store';

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
        private store: Store<any>    
    ){}

    ngOnInit(){
        console.log('goal: ',this.goal);
        this.store.dispatch({
            type: 'current-goal',
            action: this.goal
        })
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
        this.goalService.addTodoToGoal(todo, this.goal._id)
        setTimeout(()=>this.ngOnInit(),1000);
    }

    saveSubGoal(subGoal:Goal){
        this.goalService.addSubGoal(subGoal, this.goal._id);        
        setTimeout(()=>this.ngOnInit(),3000);
        this.showAddTodo = false;
    }


    doSomething() {
        this.done = true;
    }

    deleteGoal() {
     this.goalService.deleteGoal(this.goal._id).subscribe(message => console.log(message))   
    }
}