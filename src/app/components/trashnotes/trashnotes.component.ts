import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
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
        return element.trash == true;
      })
      console.log('Trashnotes',this.NotesList);
    })
  }
}
