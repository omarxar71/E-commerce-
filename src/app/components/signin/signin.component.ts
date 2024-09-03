import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AlertErrorsComponent } from "../../shared/ui/alert-errors/alert-errors.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [AlertErrorsComponent ,ReactiveFormsModule , RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  private _AuthService=inject(AuthService)
  private _Router = inject(Router)
 errorMessage:string='';
 isBtnSubmit:boolean=false;
  form=new FormGroup({
   email: new FormControl(null , [Validators.email , Validators.required]),
   password: new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  })
 formControlName: any;
 

  submitForm(){
 
 if(this.form.valid){
   this.isBtnSubmit=true;
   this._AuthService.signInService(this.form.value).subscribe({
     next:(res)=>{ 
       if(res.message=='success'){
        localStorage.setItem('token' , res.token);
        this._AuthService.userData();
         this._Router.navigate(["/home"]);
         this.isBtnSubmit=false;}
       },
     error:(err:HttpErrorResponse)=>{ this.isBtnSubmit=false
       console.log(err.error)
       this.errorMessage=err.error.message;
 
     }
   })
 }else{
   this.form.markAllAsTouched()
   console.log(this.form.invalid)
 
 }
  }
}
