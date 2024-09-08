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
import { authGurdGuard } from './core/guards/auth-gurd.guard';
import { isLogedInGuard } from './core/guards/is-loged-in.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResteComponent } from './components/reste/reste.component';
import { DetailsComponent } from './components/details/details.component';
import { AddresseComponent } from './components/addresse/addresse.component';

export const routes: Routes = [
  {path:"" , component:AuthLayoutComponent , canActivate:[isLogedInGuard] , children:[
    {path:'', redirectTo:'signin' , pathMatch:'full'},
    {path:'signin' , component:SigninComponent}, 
    {path:'signup' , component:SignupComponent},
    {path:"reset" , component:ResteComponent}
  ]
  }, 
  {path:'' , component:MainLayoutComponent,canActivate:[authGurdGuard] , children:[
    {path:'' , redirectTo:"home" ,pathMatch:'full'},
    {path:'home' , component:HomeComponent}, 
    {path:'about', component:AboutComponent}, 
    {path:"cart", component:CartComponent},
    {path:'brands' , component:BrandsComponent},
    {path:"categories" , component:CategoriesComponent}, 
    {path:"product" , component:ProductComponent},
    {path:"details/:id" , component:DetailsComponent},
    {path:"address/:id" , component:AddresseComponent},
  ]
}, 
{path:"" , component:NotFoundComponent}
]
