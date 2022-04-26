import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {}

  setToken(token):void{
    localStorage.setItem('token',JSON.stringify(token))
  }
  getToken():Object{
    return JSON.parse(localStorage.getItem('token'))
  }
}
