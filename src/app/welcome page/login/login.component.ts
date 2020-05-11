import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    template: './login.component.html',
    styles:[]
})
export class LoginComponent{
    SERVER_URL:string = 'http://localhost:8080/auth'

    loginForm: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    })

    constructor( private http: HttpClient){}

        onSubmit() {
            const formData = new FormData();
            formData.append('username', this.loginForm.get('username').value);
            formData.append('password', this.loginForm.get('password').value);
        
            this.http.post<any>(this.SERVER_URL, formData).subscribe(
              (res) => console.log(res),
              (err) => console.log(err)
            );
          }

}

