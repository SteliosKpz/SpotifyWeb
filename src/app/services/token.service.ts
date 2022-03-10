import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {}

  setToken(token){
    localStorage.setItem('token',JSON.stringify(token))
  }
  getToken(){
    return JSON.parse(localStorage.getItem('token'))
  }
}
