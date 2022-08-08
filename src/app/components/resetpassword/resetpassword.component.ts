import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordform!: FormGroup;
  submitted = false;
  hide = true;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.resetpasswordform = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    });
  }

  reset(){
    this.submitted = true;
    if(this.resetpasswordform.valid){
      let data={
        Password:this.resetpasswordform.value.password,
        ConfirmPassword:this.resetpasswordform.value.confirmPassword
      }
      this.userService.Resetpassword(data).subscribe((response:any)=>{
        console.log('Reset Successfull',response);
      },(error:any)=>{
        console.log('Reset Failed',error);
      })
    }
    else{ return;}
  }
}
