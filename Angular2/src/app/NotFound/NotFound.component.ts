import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-NotFound',
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
