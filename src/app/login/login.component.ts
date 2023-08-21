import { Validators,FormBuilder, FormGroup, } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  forminput!:FormGroup
  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.forminput = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required],
    });
  }
  onSubmit(){

    console.log("test de register")
    console.log(this.forminput)
  }

}
