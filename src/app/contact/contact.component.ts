import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  
  }

  
  sendEmail(){
      //alert("Email Sent Successfully");
      this.toastr.success("Email Sent Successfully");
      this.router.navigate(['/products'])
    }
    saveContact(){
      //alert("Contact Added");
      this.toastr.success("Contact Added!");
      this.router.navigate(['/products'])
    }

}
