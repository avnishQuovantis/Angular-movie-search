import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms"
import {AuthService} from "../auth.service"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      "username":new FormControl("",[Validators.required]),
      "email":new FormControl("",[Validators.required,Validators.email]),
      "password":new FormControl("",[Validators.required]),
      "age":new FormControl(0,[Validators.required]),
      "address":new FormControl("",[Validators.required])
    })

  }
   onSubmit(){
     console.log(this.signupForm.value);
     let user={...this.signupForm.value}
    
     this.authService.signup(user)
  }

}
