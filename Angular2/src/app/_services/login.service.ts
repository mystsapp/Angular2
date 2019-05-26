import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public _isLoggedIn: boolean;

  constructor() { }

  isLogged() {
    return this._isLoggedIn;
  }

  setLogin(isLogged: boolean) {
    this._isLoggedIn = isLogged;
  }
}
