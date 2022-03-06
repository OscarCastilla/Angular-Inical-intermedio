import { Component } from "@angular/core";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { isEmpty } from "@firebase/util";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
    selector:'acad-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})

export class LoginComponent{
    loginForm:FormGroup;
    error:String="";

    constructor(
        private _formBuilder:FormBuilder,
        private authService:AuthService
    ){
        this.loginForm=this._formBuilder.group({
            user:['',[Validators.required,Validators.email,Validators.minLength(6)]],
            password:['',[Validators.required,Validators.minLength(6)]]
        });   
    }

    async onSubmit(){
        console.log(this.loginForm);
        if(this.loginForm.invalid){
            const{user,password}=this.loginForm.controls;
            if(isEmpty(user.value)){
                this.error="El campo usuario esta vacio";
                return;
            }else if(isEmpty(password.value)){
                this.error="El campo contraseña esta vacio";
                return;
            }
         
        }

        const {user,password}=this.loginForm.value;
       const data= await this.authService.login(user,password);
       console.log(data.error.code);

       if(data.error.code=='auth/wrong-password'){
            this.error="contraseña incorrecta";
            return;
       }else if(data.error.code==='auth/user-not-found'){
            this.error="usuario no encontrado";
    }

    
   
       
    }


}




//---