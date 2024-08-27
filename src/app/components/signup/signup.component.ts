import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { AlertErrorsComponent } from "../../shared/ui/alert-errors/alert-errors.component";
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, AlertErrorsComponent , NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 private _AuthService=inject(AuthService)
 private _Router = inject(Router)
errorMessage:string='';
isBtnSubmit:boolean=false;
 form=new FormGroup({
  name:new FormControl(null , [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]),
  email: new FormControl(null , [Validators.email , Validators.required]),
  password: new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  rePassword: new FormControl(null ,  [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
 } , this.passwordValidation)
formControlName: any;

 passwordValidation(g:AbstractControl){
  return g.get('password')?.value == g.get('rePassword')?.value ? null : {missmatch: true}
 }
 submitForm(){

if(this.form.valid){
  this.isBtnSubmit=true;
  this._AuthService.signUpService(this.form.value).subscribe({
    next:(res)=>{ 
      if(res.message=='success'){
        this._Router.navigate(["/signin"]);
        this.isBtnSubmit=false;}
      },
    error:(err:HttpErrorResponse)=>{ this.isBtnSubmit=false
      console.log(err.error)
      this.errorMessage=err.error.message;

    }
  })
}else{
  this.form.markAllAsTouched()
  this.form.get('rePassword')?.setValue(null)
  console.log(this.form.invalid)

}
 }
}
