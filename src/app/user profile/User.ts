import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

export interface User {
    _id: string;
    name: string;
    password: string;
}

export function user(state, action){
    switch(action.type){
        case 'set-user':
            return {
                ...state,
                currentUser: action.payload
            }
        default:  
            return state;
    }
}

@Injectable()
export class UserService{

    private url = 'http://localhost:8080/users';
    public userId;
    
    constructor ( 
        private http:HttpClient,
        private store: Store<any>) {}

    getUser(id): Observable<User>{
        this.userId = id;
        return <Observable<User>>this.http.get(`${this.url}?id=${id}`)
    }

    setUserInStore(user){
            this.store.dispatch({
                type:'set-user',
                payload: user
            })
    }

 

}