import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:'app-sign-up',
    templateUrl: './sign-up.component.html' 
})
export class SignUpComponent {

    SERVER_URL:string = 'http://localhost:8080/auth'

    signUpForm: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    })

    constructor( private http: HttpClient){}

        onSubmit() {
            const formData = new FormData();
            formData.append('username', this.signUpForm.get('username').value);
            formData.append('password', this.signUpForm.get('password').value);
        
            this.http.post<any>(this.SERVER_URL, formData).subscribe(
              (res) => console.log(res),
              (err) => console.log(err)
            );
          }
}