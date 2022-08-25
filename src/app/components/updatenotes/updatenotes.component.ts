import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  title: any;
  description: any;
  noteID: any;
  color:any;
  
 // @Output() refresh = new EventEmitter<any>();

  constructor(private note: NoteService,public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private snackbar:MatSnackBar) {
    console.log('Data in the dialogbox',this.data);
    this.noteID = this.data.noteID;
    this.title = this.data.title;
    this.description = this.data.description;
    this.color=this.data.color;
  }

  Update() {
    let data = {
      Title: this.title,
      Description: this.description,
    }
    console.log(data);
    this.note.Update(data, this.noteID).subscribe((response: any) => {
      console.log(response);
      this.snackbar.open('Note Updated Successfully','Ok',{duration:3000,horizontalPosition:'left'});
    },(error:any)=>{
      console.log('Note Updation Failed',error);
      this.snackbar.open('Note Updation Failed','Try again',{duration:3000,horizontalPosition:'left'});
    });
    this.dialogRef.close()
  }

  Reload(event:any){
    console.log(event);
  }

  ngOnInit(): void {

  }
}
