import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordform!: FormGroup;
  submitted = false;
  hide = true;
  token: any;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private snackbar:MatSnackBar,
    private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetpasswordform = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    this.token = this.activate.snapshot.paramMap.get('token');
    console.log(this.token);
    
  }

  reset(){
    this.submitted = true;
    if(this.resetpasswordform.valid){
      let data={
        token:this.token,
        Password:this.resetpasswordform.value.password,
        ConfirmPassword:this.resetpasswordform.value.confirmPassword
      }
      this.userService.Resetpassword(data,this.token).subscribe((response:any)=>{
        console.log('Reset Successfull',response);
        this.snackbar.open('Reset Successfull','Ok',{duration:3000,horizontalPosition:'left'});
      },(error:any)=>{
        console.log('Reset Failed',error);
        this.snackbar.open('Reset Failed','Try again',{duration:3000,horizontalPosition:'left'});
      })
    }
    else
    {
      this.snackbar.open('Fields are empty','',{duration:3000,horizontalPosition:'left'});
      return;
    }
  }
}
