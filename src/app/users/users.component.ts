import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Users } from './user';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userArr:Users[]=[];
  public allUsers:Users[]=[];
  public loading:boolean=true;
  public tableloading:boolean=false;
  public uName:string='';
  public uID:any;

  constructor(private userService:UserService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data=>{
      this.userArr = data;
      this.allUsers = data;
      this.loading = false;
      this.tableloading = true;
    }))
  }

 
  
  // getAllUsers(){
  //   this.userService.getAllUsers().subscribe((data=>{
  //     this.userArr = data;
  //     this.loading = false;
  //     this.tableloading = true;
  //   }))
  // }

  deleteUser = (id:any)=>{
    let resp = confirm('Are you sure want to Delete ? ');
    if(resp){
      this.userService.deleteUser(id).subscribe((res)=>{
        console.log(res);
        this.toastr.success("Deleted successfully!");
        this.ngOnInit()
      },(err)=>{
        this.toastr.error('Something went wrong');
      })
    }else{
      this.toastr.success("Ohh! You don't want to delete!");
    }
  }
  public isUserNotFound:boolean=false;
  searchUserByID(){
    var temp:boolean=false;
    this.userArr = [];
    if(this.uID === '' ) {
      this.userArr=this.allUsers;
      this.isUserNotFound = false;
      temp=true;
   }else{
     this.userService.searchUserByID(this.uID).subscribe((data=>{
       //this.userArr=[];
       this.userArr.push(data);
       this.isUserNotFound = false;
       temp=true;
     }))
   }
    //console.log(temp)
     if(!temp){
      this.isUserNotFound = true;
     }
    
  }
  searchUserByName(){
   // this.getAllUsers();
    let temp:boolean=false;
    let data1 :any[]=[];
    //this.userArr = [];
    let dt:any;
    if(this.uName === '' ) {
      this.userArr=this.allUsers;
   }else{
    this.userArr = this.allUsers.filter((user) => user.fname.toLowerCase().includes(this.uName.toLowerCase()));
  //   if(this.userArr[0]){
  //     this.userArr.push(dt[0]);
  //     this.isUserNotFound = false;
  //     temp=true;
  //     console.log(this.userArr)
  // }
    
   } 
   if(this.userArr.length === 0){
    this.isUserNotFound = true;
    //temp=true;
   }else{
    this.isUserNotFound = false;
   }
    // this.userService.getAllUsers().subscribe((data=>{
    //   console.log(data)
    //   data1 = data;
    //   dt = data.filter((user:any) => user.fname.toLowerCase().includes(this.uName.toLowerCase()));
    //   console.log(dt[0])
      
      
      // for(let i=0;i<data1.length;i++){
      //   //console.log(data1[i])
      //   if(data1[i].fname.toLowerCase()===this.uName.toLowerCase()){
      //     //this.userArr.push(usr);
      //     //temp = usr;
      //     //this.isUserNotFound = false;
          
      //     this.userArr.push(data1[i]);
      //     this.isUserNotFound = false;
      //     temp=true;
      //   }
      // }
     
    // }))
   
   // console.log(data1)
    // for(let i=0;i<data1.length;i++){
    //   console.log(data1[i])
    //   if(data1[i].fname.toLowerCase()===this.uName.toLowerCase()){
    //     //this.userArr.push(usr);
    //     //temp = usr;
    //     //this.isUserNotFound = false;
        
    //     this.userArr.push(data1[i]);
    //     this.isUserNotFound = false;
    //     temp=true;
    //   }
    // }
    //  if(!temp){
    //   //alert(!temp)
    //   this.isUserNotFound = true;
    //  }
    
  }
  clearField = () =>{
    this.uID = '';
    this.uName = '';
    this.isUserNotFound = false;
    //this.getAllUsers();
    this.userArr = this.allUsers;
  }

  
}
