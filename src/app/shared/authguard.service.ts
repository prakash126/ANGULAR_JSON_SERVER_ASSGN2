import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router:Router,private toastr:ToastrService) { }

  canActivate(){
    //alert("canActivate")
    let bReturn = true;
    let dt = localStorage.getItem('isLogedIn');
    console.log(dt)
    if(dt=='false' || dt==null || dt==undefined){
      //alert("Not authorized page to see")
      this.toastr.warning("Oops! Not authorized person to see this page!")
      this.router.navigate(['/home']);
      bReturn = false;

    }
    return bReturn;
  }
}
