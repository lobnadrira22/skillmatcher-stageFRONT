import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
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
