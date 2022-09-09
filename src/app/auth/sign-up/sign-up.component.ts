import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';
import { Password } from 'primeng/password';
import { __values } from 'tslib';
import  {AuthService}  from '../authservice/auth.service' 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   signupForm!:FormGroup;
   issignin=false;
   data:any;
  constructor(private fb:FormBuilder , public auth:AuthService) { }
  
  
  

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username:['',Validators.required],
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.maxLength(6)]],
      confirm_password:['', [Validators.required, Validators.maxLength(6)]]
    }),
    {updateOn:'submit'}

  }
  signup(){
    this.data = this.signupForm.value;
    this.auth.SignUp(this.data.email,this.data.password)
  }
   
}
