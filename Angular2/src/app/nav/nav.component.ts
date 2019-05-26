import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLoggedIn = this.loginService.isLogged();
  }

  logout() {
    
    this.loginService.setLogin(false);
    alert('Log out success.');
  }
}
