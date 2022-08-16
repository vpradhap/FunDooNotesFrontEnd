import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  forgetpasswordform!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.forgetpasswordform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    }); 
  }

  forget(){
    this.submitted = true;
    if(this.forgetpasswordform.valid){
      let data={
        Email:this.forgetpasswordform.value.email
      }
      this.userService.Forgetpassword(data).subscribe((response:any)=>{
        console.log('Token sent to email Successfully',response);
        this.snackbar.open('Token Sent Successfull','Ok',{duration:3000,horizontalPosition:'left'});
      },(error:any)=>{
        console.log('Token sending Failed',error);
        this.snackbar.open('Token sending Failed','',{duration:3000,horizontalPosition:'left'});
      })
    }
    else
    {
      this.snackbar.open('Fields are empty','',{duration:3000,horizontalPosition:'left'});
      return;
    }
  }
}
