import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm =new UntypedFormGroup({
    
    
    usuario: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required)

  })

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form :any){

    console.log(form)

  }

}
