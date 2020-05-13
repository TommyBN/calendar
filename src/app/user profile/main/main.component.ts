import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './main.component.html',
    styles: [`
    .container{ padding: 3% } 
    #schedule{ padding: 5%; overflow: hidden }
    
  `]
})

export class MainComponent implements OnInit {

  private _sidebarSize: string = localStorage.getItem('sidebarSize') || '20%';
  public get sidebarSize(): string {
      return this._sidebarSize;
  }
  public set sidebarSize(newSize: string) {
      this._sidebarSize = newSize;
      localStorage.setItem('sidebarSize', newSize);
  }

  constructor(
    private store: Store<any>,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params: ParamMap )=>{
      let id = params.get('id');
      this.userService.getUser(id)
    })
  }

}

