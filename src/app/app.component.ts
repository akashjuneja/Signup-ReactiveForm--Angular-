import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordChecker } from './customValidators/password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'signUpForm';
  registerForm!: FormGroup;
  submitForm:boolean=false
  constructor(private formbuilder: FormBuilder){
  }

  ngOnInit(){
    this.registerForm=this.formbuilder.group({
      Name:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      c_password:['',Validators.required],
      Accept_TC:['',Validators.requiredTrue]
    },{
      validators:passwordChecker
    })
  }

  onSubmit(){
    this.submitForm=true
    if(this.registerForm.invalid){
      return
    }

    console.table(this.registerForm)
    console.table(this.registerForm.value)
  }
  ResetForm(){
    this.submitForm=false
    this.registerForm.reset()
  }
}
