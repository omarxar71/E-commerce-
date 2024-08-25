import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path:"" , component:AuthLayoutComponent , children:[
    {path:'', redirectTo:'signin' , pathMatch:'full'},
    {path:'signin' , component:SigninComponent}, 
    {path:'signup' , component:SignupComponent}
  ]
  }, 
  {path:'' , component:MainLayoutComponent , children:[
    {path:'' , redirectTo:"home" ,pathMatch:'full'},
    {path:'home' , component:HomeComponent}, 
    {path:'about', component:AboutComponent}, 
    {path:"cart", component:CartComponent},
    {path:'brands' , component:BrandsComponent},
    {path:"categories" , component:CategoriesComponent}, 
    {path:"product" , component:ProductComponent}
  ]
}, 
{path:"" , component:NotFoundComponent}
]
