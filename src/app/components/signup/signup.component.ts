import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { AlertErrorsComponent } from "../../shared/ui/alert-errors/alert-errors.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, AlertErrorsComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 form=new FormGroup({
  name:new FormControl(null , [Validators.required , Validators.minLength(2) , Validators.maxLength(10)]),
  email: new FormControl(null , [Validators.email , Validators.required]),
  password: new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
  rePassword: new FormControl(null ,  [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
 } , this.passwordValidation)

 passwordValidation(g:AbstractControl){
  return g.get('password')?.value == g.get('rePassword')?.value ? null : {missmatch: true}
 }
 submitForm(){
if(this.form.valid){
  console.log(this.form)
}
 }
}
