import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  forgetpasswordform!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

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
      },(error:any)=>{
        console.log('Token sending Failed',error);
      })
    }
    else{ return;}
  }
}
