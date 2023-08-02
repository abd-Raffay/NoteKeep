import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Notes } from './notes';
import { map } from 'rxjs/operators';
let userid: number = 0;
let activeflag: number=0;
let noteindex=0;

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private router: Router,private http: HttpClient) {}

  array:any[]=[
    {name:"a",email:"abc@gmail.com",experience:1,password:"a",notes:"aaaa"}
  ]




  apiUrl = 'https://crudcrud.com/api/318bdc1ace824aff9186e9a54d757900';


//++++++++++++++++++++++++++NOTES FUNCTION+++++++++++++++++++++++++++++++++++
//POST NOTE
  postnote(note):Observable<Notes>{
    note.userid=userid
    const noteURL = `${this.apiUrl}/notes-${userid}`
    console.log("Notes are",note)
    return this.http.post<Notes>(noteURL,note)

  }

//GET NOTE
  getnote(){
    const noteURL = `${this.apiUrl}/notes-${userid}`
    console.log("userid",userid)
    return this.http.get<Notes>(noteURL)


  }

//PUT NOTE
  updatenote(note,noteid):Observable<Notes>{
    note.userid=userid
    const noteURL = `${this.apiUrl}/notes-${userid}/${noteid}`
    return this.http.put<Notes>(noteURL,note)
  }

//DELETE NOTE
  deletenote(noteid){
    
    const noteURL = `${this.apiUrl}/notes-${userid}/${noteid}`
    return this.http.delete<Notes>(noteURL)
  }

  
//Used to get UserID
  public getid():number{
    console.log("user id =",userid)
    return userid

  }
//Used to SetIndex
  public SetIndex(index){

    noteindex=index

  }


// Used to GetIndex  
  public GetIndex(){
    return noteindex
  }






  

//+++++++++++++++++++++++++User Functions++++++++++++++++++++++++++++ 

// Registers a User
  public doRegistration(user){

    function isEmailPresent(email: string, usersArray: any[]): boolean {
      for (var val of usersArray) {
        console.log("Comparing",val.email,"and",email)
        if (val.email === email) {
          
          return true
        }
      }
      return false;
    }
    
    const isPresent = isEmailPresent(user.email, this.array);
    
    if (isPresent) {
      alert("User Exists with the email")
      console.log("User Exists with the email",user.email);
      user.name=""
      user.email=""
      user.password=""
      user.age=""
    } else {
      user.notes=''
      this.array.push(user);
      console.log("User Added",this.array);
      alert("Press OK to Register")
      alert("User Registered!")
      this.router.navigate(['/']);    
    }
    


  }
//Login  
  public login(user){
    
    console.log("user = ",user.email,user.password)
    function isEmailPresent(email: string, password: string, usersArray: any[]): boolean {
      for (var index in usersArray) {
        console.log("Comparing email ",usersArray[index].email,"and",email,)
        console.log("Comparing password ",usersArray[index].password,"and",password)
        if (usersArray[index].email === email && usersArray[index].password === password ) {
          userid=Number(index)
          activeflag=1
          return true
        }
      }
      return false;
    }
    
    const isPresent = isEmailPresent(user.email,user.password, this.array);
    
    if (isPresent) {
      this.router.navigate(['/home']);
      console.log("Login Successfull",user.email,user.password);
    } else {
      alert("Failed to log in")
    }
  }

//SignOut
  public Signout(){
    userid=0
    activeflag=0
    alert("Press OK to SignOut")
  }

//FLag to keep record of user activity  
  setflag():number{
    return activeflag
  }

//Keeps a record of user id
  setid():number{
    return userid
  }

  public setUser(){
    return this.array[userid]
  }

  //Used to set password
  public isPasswordValid(password): boolean {
    // Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordPattern.test(password); // Use the password property of the User object
  
  }

  public isAgeVaild(age):boolean{
    return  age > 18;
  }

}