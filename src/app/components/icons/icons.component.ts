import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { TrashnotesComponent } from '../trashnotes/trashnotes.component';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObj: any;
  noteID: any;
  noteId: any;
  noteid: any;
  color: any;
  isTrash = false;
  isArchive = false;
  //@Output() refreshcolor = new EventEmitter<any>();
  @Output() autorefresh = new EventEmitter<any>();

  colorArray: Array<any> = [{ Colorcode: "white", name: "White" }, { Colorcode: "tomato", name: "Red" },
  { Colorcode: "orange", name: "Orange" }, { Colorcode: "gold", name: "Yellow" },
  { Colorcode: "lightgreen", name: "Green" }, { Colorcode: "lightblue", name: "Teal" },
  { Colorcode: "turquoise", name: "Blue" }, { Colorcode: "royalblue", name: "Dark-Blue" },
  { Colorcode: "mediumorchid", name: "Purple" }, { Colorcode: "pink", name: "Pink" },
  { Colorcode: "peru", name: "Brown" }, { Colorcode: "grey", name: "Gray" }];

  constructor(private noteservice: NoteService, private route: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    let compare = this.route.snapshot.component;
    if (compare == TrashnotesComponent) { this.isTrash = true; }
    if (compare == ArchiveNotesComponent) { this.isArchive = true; }
  }

  DeleteForever() {
    this.noteservice.Delete(this.noteObj.noteID).subscribe((response: any) => {
      console.log(response);
      this.autorefresh.emit(response);
      this.snackbar.open('Note Deleted Successfully', 'Ok', { duration: 3000, horizontalPosition: 'left' });
    }, (error: any) => {
      console.log('Note Deletion Failed', error);
    });
  }
  Trash() {
    let data = { noteId: this.noteObj.noteID, }
    this.noteservice.Trash(data).subscribe((response: any) => {
      console.log(response);
      this.autorefresh.emit(response);
      this.snackbar.open('Trash', 'Ok', { duration: 3000, horizontalPosition: 'left' });
    }, (error: any) => {
      console.log('Note Trash Failed', error);
    });
  }

  ArchiveNote() {
    let data = { noteId: this.noteObj.noteID, }
    this.noteservice.Archive(data).subscribe((response: any) => {
      console.log(response);
      this.autorefresh.emit(response);
      this.snackbar.open('Archive', 'Ok', { duration: 3000, horizontalPosition: 'left' });
    }, (error: any) => {
      console.log('Note Archive Failed', error);
    });
  }

  ChangeColor(color: any) {
    // let data = {
    //   noteid: this.noteObj.noteID,
    //   color: color,
    // }
    this.noteservice.Color( this.noteObj.noteID, color).subscribe((response) => {
      console.log('color changed', response);
      this.autorefresh.emit(response);
      this.snackbar.open('color is changed', 'Ok', { duration: 3000, horizontalPosition: 'left' });
    }, (error: any) => {
      console.log('Color change Failed', error);
    })
  }
}
