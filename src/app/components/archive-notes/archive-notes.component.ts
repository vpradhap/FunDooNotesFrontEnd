import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  NotesList:any;
  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.GetAllNote();
  }

  GetAllNote(){
    this.noteservice.GetAllNotes().subscribe((response:any)=>{
      console.log('Allnotes',response);
      this.NotesList=response
      this.NotesList.reverse();      
      this.NotesList = this.NotesList.filter((element: any) => {
        return element.archive == true && element.trash == false;
      })
      console.log('Archivenotes',this.NotesList);
    })
  }
}
