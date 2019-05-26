import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(private loginService: LoginService) {}
    canActivate() {
        let status = this.loginService.isLogged();

        if(status == false) {
            alert('You have not permission in this page.');
        }

        return status;
    }

}