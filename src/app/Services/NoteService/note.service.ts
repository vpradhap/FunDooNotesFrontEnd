import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token");
  }

  Create(data: any) {
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PostService('Create', data, true, httpOptions)
  }

  GetAllNotes() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('AllNotes', true, httpOptions)
  }
}
