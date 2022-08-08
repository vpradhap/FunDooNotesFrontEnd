import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token: any;

  constructor(private httpservice:HttpService) { }

  Register(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      //'Authorization': this.token
      })
    }
    return this.httpservice.PostService('Register',data,false,httpOptions)
  }
  Login(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      //'Authorization': this.token
      })
    }
    return this.httpservice.PostService('Login',data,true,httpOptions)  
  }
  
  Forgetpassword(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      //'Authorization': this.token
      })
    }
    return this.httpservice.PostService('Forget',data,true,httpOptions)
  }
  Resetpassword(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.httpservice.PostService('Reset',data,true,httpOptions)
  }
}
