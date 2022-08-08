import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(){
    this.submitted = true;
    if(this.loginForm.valid){
      let data={
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
      this.userService.Login(data).subscribe((response:any)=>{
        console.log('Login Successfull',response);
      },(error:any)=>{
        console.log('Login Failed',error);
      })
    }
    else{ return;}
  }
}
