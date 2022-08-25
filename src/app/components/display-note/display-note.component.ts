import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { DataService } from 'src/app/Services/DataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss'],
})
export class DisplayNoteComponent implements OnInit {

  title: any;
  description: any;
  noteID: any;
  note:any;
  searchString:any='';
  subscription: any;
  message: any;
  @Input() NoteArray: any;
  @Output() reload =new EventEmitter<any>();
  @Output() update =new EventEmitter<any>();

  constructor(private dialog: MatDialog,private dataservice:DataService,private snackbar:MatSnackBar) { }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: 'fit-content', height: 'fit-content',
      data: note,
      panelClass: 'my-custom-dialog-class'
    });
    dialogRef.afterClosed().subscribe((response: any) => {
      //console.log(response);
      this.update.emit();
      this.snackbar.open('Note Updated Successfully','Ok',{duration:3000,horizontalPosition:'left'});
    });
  }

  ngOnInit(): void {
    //console.log('Allnotes', this.NoteArray);
    this.subscription = this.dataservice.searchNote.subscribe(message => {
      this.message = message;
      console.log('search', message.data[0]);
      this.searchString = message.data[0]
    })
  }

  Reload($event:any){
    this.reload.emit('response');
  }
}
