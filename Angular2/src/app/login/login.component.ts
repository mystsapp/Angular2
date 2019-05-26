import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginServie: LoginService) { }

  ngOnInit() {
  }

  checkLogin(value: any) {
    console.log(value);
    if(value.username == 'admin' && value.password == '123') {
      this.loginServie.setLogin(true);
      this.router.navigate(['/']);
    }
    // this.router.navigate(['/']);
  }

}
