import { Component, OnInit,Inject, Input } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';
import { Notes } from '../notes';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input() dialogType: string; // Define an input property to differentiate between dialog types
  constructor(private service: UserRegistrationService,public dialog:MatDialog,private router: Router) { }
  user: User
  note:Notes
  userid: number;
  noteindex=-1
  notelist:any[]
  activeflag=0;



  ngOnInit() {
    this.userid= this.service.getid()

    this.getUser()
    this.GetNote()

  }
  //OPENS THE Edit DIALOG
  openeditdialog(){
    
    const dialogRef: MatDialogRef<ModalComponent>=this.dialog.open(ModalComponent,{height: '400px',
    width: '600px',
      data: {dialogType: "edit"}
    })
    console.log("DialogueType=",this.dialogType)



    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponent();
    });


  }

 //open Add Dialog 
  openadddialog(){
    
    const dialogRef: MatDialogRef<ModalComponent>=this.dialog.open(ModalComponent,{height: '400px',
    width: '600px',
    data: {
      dialogType: 'add'
      // You can pass any additional data required for Dialog 2 here
    }})
   

    dialogRef.afterClosed().subscribe(result => {
      console.log("Refreshing Component")
      this.refreshComponent();
    });
  }

  
 //open delete Dialog 
  opendeletedialog(){
    
    const dialogRef: MatDialogRef<ModalComponent>=this.dialog.open(ModalComponent,{
    data: {
      dialogType: 'delete'
      
    }})

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponent();
    });


  }

//Opens Show Dialog
  openshowdialog(){
    const dialogRef: MatDialogRef<ModalComponent>=this.dialog.open(ModalComponent,{
    width: '600px',
    data: {
      dialogType: 'show',
      message:this.note[this.noteindex].content
      // You can pass any additional data required for Dialog 2 here
    }})

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponent();
    });
  }

//Refresh th Component
  refreshComponent() {
    this.ngOnInit()
    this.GetNote()
    console.log('Component has been refreshed!');
  }
  
  

//GET Notes
  public GetNote(){

    this.service.getnote().subscribe(
      (data) => {
        this.note = data;
        console.log('Received data:', this.note);
        this.notelist = Object.values(data);

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


 // Gets the index of the selected note
  public getIndex(index: number) {
   
    this.noteindex=index
    console.log('Selected item index:', index);
    this.setIndex()
    

  }
// Sets Index of notes array
  public setIndex() {
   
    this.service.SetIndex(this.noteindex)

  }
//Get Users
  public getUser(){
    this.user=this.service.setUser()
    console.log("User is ",this.user)
  }

}
