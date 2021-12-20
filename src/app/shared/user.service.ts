import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../users/user';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public url='http://localhost:3000/users'

  getAllUsers():Observable<any>{
    //alert("hi")
    return this.http.get(this.url);
  }

  postUsers(data:any):Observable<any>{
    console.log(data);
    return this.http.post(this.url,data);
  }

  // searchUser = (uID:any,uName:any):Observable<any>=>{
    
  //   if(!_.isEmpty(uID)){
  //     return this.http.get(`${this.url}/${uID}`);
  //   }
  //   if(!_.isEmpty(uName)){
  //     return this.http.get(`${this.url}/${uName}`);
  //   }
  //   return null;
  // }

  searchUserByID(uID:any):Observable<any>{
    //alert(uID)
    return this.http.get(`${this.url}/${uID}`);
  }
  searchUserByName(uName:any):Observable<any>{
    return this.http.get(`${this.url}/${uName}`);
  }
  // searchUser(uID:any,uName:any):Observable<any>{
  //   if(!_.isEmpty(uID)){
  //     return this.http.get(`${this.url}/${uID}`);
  //   }
  //   if(!_.isEmpty(uName)){
  //     return this.http.get(`${this.url}/${uName}`);
  //   }
  //  // return "null";
  //  return this.http.get(this.url);
  // }


  deleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

}
