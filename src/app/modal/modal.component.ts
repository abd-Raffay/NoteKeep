import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';
import { Notes } from '../notes';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private service: UserRegistrationService,private router: Router,public dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.noteindex=this.service.GetIndex()
    this.userid=this.service.getid()
    this.note.userid=this.service.getid()
    
    this.GetNote()
    console.log("User ID is ",this.userid)
   
  
    
  }


  postnote:Notes={content:'',userid:-1}

  note:Notes = {content:'',userid:-1}
  userid: number;
  noteindex=-1
  notelist:any[]


  //UpdateNote (Edit)
  public UpdateNote() {
    console.log("TO edit ",this.note[this.noteindex].content)
    this.postnote.content=this.note[this.noteindex].content
    this.postnote.userid=this.userid;

    console.log("Before Updateinggggggg ", this.note[this.noteindex])

    console.log("INDEX ",this.noteindex)
    console.log("KEY ID", this.note[this.noteindex]._id)


    this.service.updatenote(this.postnote, this.note[this.noteindex]._id).subscribe(
      (response) => {
        console.log('Update success:', response);
        console.log("After Update", this.note[this.noteindex])
        this.GetNote()

        
      },
      (error) => {
        console.error('Update:', error);
      }
    );

  }

  //GetNote
  public GetNote(){

    this.service.getnote().subscribe(
      (data) => {
        this.note = data;
        console.log('Received data:', this.note);
        this.notelist = Object.values(this.note);
        console.log('Received data list:', this.notelist);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  //Post Notes
  public createnote(){ 
    {
      console.log("Create Note is called")
      this.postnote.content=this.note.content
      this.postnote.userid=this.userid

      this.service.postnote(this.postnote).subscribe(
        (response) => {
          
          console.log('POST success:', response);

        },
        (error) => {
          console.error('POST error:', error);
        }
      );
    }
  }

  //DeleteNote
  public DeleteNote(){

    console.log("Before delete iNdex ",this.noteindex)
    console.log("Before delete id ",this.note[this.noteindex]._id)

    this.service.deletenote(this.note[this.noteindex]._id).subscribe(
      (response) => {

        console.log('Delete success:', response);
        this.GetNote()
      },
      (error) => {
        console.error('Delete error:', error);
      }
    );


  }


}

