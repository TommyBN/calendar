import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService, User } from '../User';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  
  //splitter stuff
  private _sidebarSize: string = localStorage.getItem('sidebarSize') || '20%';
  public get sidebarSize(): string {
      return this._sidebarSize;
  }
  public set sidebarSize(newSize: string) {
      this._sidebarSize = newSize;
      localStorage.setItem('sidebarSize', newSize);
  }

  currentUser:User;

  constructor(
    private store: Store<any>,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params: ParamMap )=>{
      let id = params.get('id');
      this.userService.getUser(id).subscribe(user=> {
        this.currentUser = user;
        this.userService.setUserInStore(this.currentUser);
      })
    })
  }

}

