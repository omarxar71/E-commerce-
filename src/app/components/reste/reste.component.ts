import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AlertErrorsComponent } from "../../shared/ui/alert-errors/alert-errors.component";

@Component({
  selector: 'app-reste',
  standalone: true,
  imports: [AlertErrorsComponent , ReactiveFormsModule],
  templateUrl: './reste.component.html',
  styleUrl: './reste.component.scss'
})
export class ResteComponent {
  private _AuthService=inject(AuthService)
  private _Router = inject(Router)
  steps:number = 1;
 errorMessage:string='';
 isBtnSubmit:boolean=false;
 ForgotPassword=new FormGroup({
   email: new FormControl(null , [Validators.email , Validators.required]),
  })

  VerifyResetCode=new FormGroup({
    text: new FormControl(null , [Validators.required]),
   })



   ResetPassword=new FormGroup({
    email: new FormControl(null , [Validators.required]),
    newPassword:new FormControl(null , [Validators.required])
   })


 formControlName: any;

 








  step1(){
 
 if(this.ForgotPassword.valid){
   this.isBtnSubmit=true;
   this._AuthService.forgotPasswords(this.ForgotPassword.value).subscribe({
     next:(res)=>{ 
       
         this.isBtnSubmit=false;
         this.steps=2;
       },
     error:(err:HttpErrorResponse)=>{ this.isBtnSubmit=false
       console.log(err.error)
       this.errorMessage=err.error.message;
 
     }
   })
 }
  }




  step2(){
 
    if(this.ForgotPassword.valid){
      this.isBtnSubmit=true;
      this._AuthService.verifyResetCode(this.VerifyResetCode.value).subscribe({
        next:(res)=>{ 
          
            this.steps=3;
            this.isBtnSubmit=false;
          },
        error:(err:HttpErrorResponse)=>{ this.isBtnSubmit=false
          console.log(err.error)
          this.errorMessage=err.error.message;
    
        }
      })
    }
     }






     step3(){
 
      if(this.ForgotPassword.valid){
        this.isBtnSubmit=true;
        this._AuthService.resetPassword(this.ResetPassword.value).subscribe({
          next:(res)=>{ 
            
              localStorage.setItem('token' , res.token);
              this._AuthService.userData();
               this._Router.navigate(["/signin"]);
              this.isBtnSubmit=false;
            },
          error:(err:HttpErrorResponse)=>{ this.isBtnSubmit=false
            console.log(err.error)
            this.errorMessage=err.error.message;
      
          }
        })
      }
       }
}
