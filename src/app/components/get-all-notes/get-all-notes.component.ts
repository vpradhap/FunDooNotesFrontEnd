import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  NotesList:any;
  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.GetAllNote();
  }

  GetAllNote(){
    this.noteservice.GetAllNotes().subscribe((response:any)=>{
      console.log('Allnotes',response);
      this.NotesList=response
      //console.log('Notes',this.NotesList);
      
    })
  }
}
