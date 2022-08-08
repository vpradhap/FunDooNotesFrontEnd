import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  register(){
    this.submitted = true;
    if(this.registerForm.valid){
      let data={
        Firstname:this.registerForm.value.firstName,
        Lastname:this.registerForm.value.lastName,
        Email:this.registerForm.value.email,
        Password:this.registerForm.value.password,
        ConfirmPassword:this.registerForm.value.confirmPassword
      }
      this.userService.Register(data).subscribe((response:any)=>{
        console.log('Registration Successfull',response);
      },(error:any)=>{
        console.log('Registration Failed',error);
      })
    }
    else{ return;}
  }
}
