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

  Update(data: any, noteId: any) {
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('Update?noteId=' + noteId, data, true, httpOptions)
  }

  Delete(noteId: any) {
    console.log('Deleted noteId ', noteId);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.DeleteService('Remove?noteId=' + noteId, true, httpOptions)
  }

  Trash(data: any) {
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('Trash', data, true, httpOptions)
  }

  Archive(data: any) {
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('Archive', data, true, httpOptions)
  }

  Color(noteid: any, color: any) {
    console.log( 'Id : '+noteid, 'color : '+color);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.PutService('Color?noteid=' + noteid + '&color=' + color, color, true, httpOptions)
  }
}
