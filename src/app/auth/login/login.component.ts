import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder , FormControl, Validators} from '@angular/forms';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom!:FormGroup;
  
  constructor(private fb:FormBuilder,private auth:AuthService ) { }

  ngOnInit(): void {
   this.loginFrom = this.fb.group({
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(6)]]
   }),
   {updateOn:'submit'}
  }
    onsubmit(){
      
    }
}
