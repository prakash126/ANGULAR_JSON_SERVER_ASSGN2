import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatwiseproductComponent } from './catwiseproduct/catwiseproduct.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProductComponent } from './product/product.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { AuthguardService } from './shared/authguard.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent,canActivate:[AuthguardService]},
  {path:'products',component:ProductComponent,canActivate:[AuthguardService]},
  {path:'products/:id',component:ProductinfoComponent,canActivate:[AuthguardService]},
  {path:'product/category',component:CatwiseproductComponent,canActivate:[AuthguardService]},
  {path:'users',component:UsersComponent,canActivate:[AuthguardService]},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
