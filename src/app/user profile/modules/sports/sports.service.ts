import { Injectable } from '@angular/core';
import { SportsModule } from './sports.module';
// import { Todo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
    // providedIn: SportsModule
)
export class SportsService{


    constructor ( private http:HttpClient) {}

    

}