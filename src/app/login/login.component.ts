import { Component, OnInit } from '@angular/core';
import { Userlog } from '../userlog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;

  userModel = new Userlog("","")

  constructor(private enrollment: SharedService, private formbuilder : FormBuilder, private http : HttpClient, private router : Router) {
    this.userForm = new FormGroup({
      'email': new FormControl('',[Validators.email,Validators.required,Validators.minLength(4)]),
      'password': new FormControl('',[Validators.required,Validators.minLength(5)])
      
   })
  }
  ngOnInit(): void {}

  onSubmit(){
    this.enrollment.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!', error)
      
    )
  }

  login(){
    this.http.get<any>("https://localhost:44358/api/Registration").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.userForm.value.email && a.password === this.userForm.value.password
      });
      if(user){
        alert("Login Success!!");
        this.userForm.reset();
        this.router.navigate(['employeedashboard'])
      }else{
        alert("User Not Found!!")
      }
    },err=>{
      alert("Something Went Wrong!!")
    })
  }

}









// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
