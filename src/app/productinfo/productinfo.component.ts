import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  public id!:number;
  public title!:string;
  public image!:string;
  public descp!:string;
  public price!:string;
  public category!:string;
  constructor(private router:Router,private route:ActivatedRoute,private prodservice:ProductService) { }

  public prodid:any;
  public loading:boolean=true;
  public dataloading:boolean=false;
  ngOnInit(): void {
  this.prodid = this.route.snapshot.paramMap.get('id');
  this.id=this.prodid;
  this.getProductByID();
  }

  
  getProductByID(){
      //alert(`Product ID :- ${this.prodid}`);
      this.prodservice.getProductByID(this.prodid).subscribe((data=>{
        this.id = data.id;
        this.price = data.price;
        this.descp = data.description;
        this.image = data.image;
        this.title = data.title;
        this.category = data.category;
        this.loading = false;
        this.dataloading = true;
      }),(err)=>{
        console.log(err)
      })
    }

    productList(){
      this.router.navigate(["/products"])
    }

}
