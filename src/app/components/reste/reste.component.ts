import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
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
export class ResteComponent implements OnInit{
  private _AuthService=inject(AuthService)
  private _Router = inject(Router)
  steps:any = 1;
 errorMessage:string='';
 isBtnSubmit:boolean=false;
 ForgotPassword=new FormGroup({
   email: new FormControl(null , [Validators.email , Validators.required]),
  })

  VerifyResetCode=new FormGroup({
    text: new FormControl(null , [Validators.required]),
   })



   ResetPassword=new FormGroup({
    email: new FormControl('' , [Validators.required]),
    newPassword:new FormControl(null , [Validators.required])
   })


 formControlName: any;

 








  step1(){
 
 if(this.ForgotPassword.valid){
   this.isBtnSubmit=true;
   this._AuthService.forgotPasswords(this.ForgotPassword.value).subscribe({
     next:(res)=>{ 
        let email:any=this.ForgotPassword.get("email")?.value;
       this.ResetPassword.get('email')?.setValue(email)
         this.isBtnSubmit=false;
         this.steps=2;
         localStorage.setItem("currentStep",this.steps );
         localStorage.setItem('currentEmail' , email);
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
            localStorage.setItem("currentStep",this.steps );
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


       pagStep1(){
        
        this.steps=1;
        localStorage.setItem("currentStep",this.steps );

       }
       pagStep2(){
        this.steps=2;
        localStorage.setItem("currentStep",this.steps );

       }
       pagStep3(){
        this.steps=3;
        localStorage.setItem("currentStep",this.steps );

       }
       ngOnInit(): void {
           localStorage.getItem('currentStep');
           this.ResetPassword.get('email')?.setValue(localStorage.getItem("currentEmail"))
       }
}
