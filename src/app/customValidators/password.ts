import { FormGroup } from '@angular/forms';


export function passwordChecker(controlName:string,  compareControlName:string){
       return (formgroup:FormGroup)=>{
              const  password=formgroup.controls[controlName]
              const cPassword=formgroup.controls[compareControlName]

              if(password.value!==cPassword.value){
                 cPassword.setErrors({mustMatch:true})
              }else{
                cPassword.setErrors(null)
              }
       }
}
