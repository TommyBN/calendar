import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['../welcome-forms.css']
})
export class LoginComponent{
    SERVER_URL:string = 'http://localhost:8080/auth/login'

    loginForm: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    })

    constructor( 
        private http: HttpClient,
        private router: Router
        ){}

        onSubmit() {
          console.log(this.loginForm.value)
            this.http.post<any>(this.SERVER_URL, this.loginForm.value).subscribe(
              (res) => {
                  let id = res.user.id
                  if(res.verified) this.router.navigate([`/user/${id}`]) 
            },
              (err) => console.log(err)
            );

          }

}

