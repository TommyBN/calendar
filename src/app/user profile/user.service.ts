import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

interface User {
    _id: string;
    username: string;
    password: string;
}

@Injectable()
export class UserService{

    private url = 'http://localhost:8080/users';

    constructor ( 
        private http:HttpClient,
        private store: Store<any>) {}

    getUser(_id){
        this.http.get(`${this.url}/id=${_id}`).subscribe(user=>{
            this.store.dispatch({
                type:'set-user',
                payload: user
            })
        })
    }

    // setUserToStore(user){
    //     this.store.dispatch({
    //         type:'set-user',
    //         payload: user
    //     })
    // }


}