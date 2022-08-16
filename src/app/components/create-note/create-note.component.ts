import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/NoteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  show = false;
  noteForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private noteService:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title:['',Validators.required],
      Description:['',Validators.required],
    });
  }

  Expand(){
    this.show=true;
  }

  CreateNote(){
    this.show=false;
    if(this.noteForm.valid){
      let data={
        Title:this.noteForm.value.Title,
        Description:this.noteForm.value.Description
      }
      this.noteService.Create(data).subscribe((response:any)=>{
        console.log('Note Created Successfully',response);
        this.snackbar.open('Note Created Successfull','Ok',{duration:3000,horizontalPosition:'left'});
      },(error:any)=>{
        console.log('Note Creation Failed',error);
        this.snackbar.open('Note Creation Failed','Try again',{duration:3000,horizontalPosition:'left'});
      })
    }
    else
    { 
      this.snackbar.open('Fields are empty','',{duration:3000,horizontalPosition:'left'});
      return;
    }
    this.noteForm.reset();
  }
  Pin(){

  }
}
