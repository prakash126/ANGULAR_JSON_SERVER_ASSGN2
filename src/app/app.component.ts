import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import {Users} from "./users/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userModelObj:Users = new Users();
  public isUserLogin :boolean = false;
  public isUserLogout :boolean = true;
  title = 'assignment6';

  public email:string='';
  public fname:string='';
  public lname:string='';
  public password:string='';
  public phone!:number;
  public location:string='';
  public varLogedIn:string='isLogedIn';
  constructor(private userService:UserService,private router:Router,private toastr:ToastrService){
    let data = localStorage.getItem(this.varLogedIn);
    if(data){
      this.isUserLogout = false;
      this.isUserLogin = true;
    }
  }
  login(){
   // alert("hi")
   let loggedin:boolean = false;
    this.userService.getAllUsers().subscribe((data=>{
      //console.log(data)
      for(let dt of data){
        if(dt.email === this.email && dt.password === this.password){
          this.toastr.success('Login successfull!');
          localStorage.setItem(this.varLogedIn,'true');
          this.isUserLogin = true;
          loggedin = true;
          this.isUserLogout = false;
          let ref = document.getElementById("closeModal1");
          ref?.click();
      // $("#exampleModal").modal("hide");
          this.email = '';
          this.fname = '';
          this.password = '';
          
        }
      }
      if(!loggedin){
        //alert("Login failed! Something went wrong!");
        this.toastr.error('Login failed! Something went wrong!')
        let ref = document.getElementById("closeModal1");
          ref?.click();
      // $("#exampleModal").modal("hide");
          this.email = '';
          this.fname = '';
          this.password = '';
      }
    }))
  }
  signup(){
    this.userModelObj.email = this.email;
    this.userModelObj.fname = this.fname;
    this.userModelObj.lname = this.lname;
    this.userModelObj.location = this.location;
    this.userModelObj.password = this.password;
    this.userModelObj.phone = this.phone;

    this.userService.postUsers(this.userModelObj).subscribe((res)=>{
      console.log(res);
      let ref = document.getElementById("closeModal");
          ref?.click();
      // $("#exampleModal").modal("hide");
          this.email = '';
          this.fname = '';
          this.password = '';
      //alert("Signup successful");
      this.toastr.success("Signup successful")
    },(err)=>{
      console.log(err)
    })
  }

  logout(){
    //alert("logout")
    this.toastr.warning("logout done!")
    this.isUserLogin = false;
    this.isUserLogout = true;
    localStorage.removeItem(this.varLogedIn);
    this.router.navigate(['/home']);
  }
}
