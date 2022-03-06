import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _auth:AngularFireAuth
  ) { }

  async login(email:string, password:string):Promise<any>{
    try{
      console.log("enviando informacion:");
      const respuesta=await this._auth.signInWithEmailAndPassword(email,password);
      return respuesta; 
    }catch(error){
  
        // console.log({error});
        return {error};
    }

   
    // this._auth.signInWithEmailAndPassword(email,password).then((res)=>{
    // console.log("la respuesta es",res);
    //   return res;
    // }).catch(erro=>{
      
    //   console.log(erro);
    // });
  
   
  }



}
