import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register!:FormGroup;
  userMode1 = new User(' ', ' ', ' ', ' ');

  public signupForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      repeatpassword:['',Validators.required,Validators.email,Validators.minLength(4)]

    })
  }

  signUp(){
    this.http.post<any>("https://localhost:44358/api/Registration",this.signupForm.value).subscribe(res=>{
      alert("SignUp Successful");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{alert("Something Went Wrong")})
  }
}

//   onSubmit() {
//     console.log(this.userMode1);
// } 