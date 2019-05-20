import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrls: ['./employee-overview.component.css']
})
export class EmployeeOverviewComponent implements OnInit {
  parentRouterid: number;
  subcription: Subscription;

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subcription = this.activatedRoute.parent.params.subscribe(params => {
      this.parentRouterid = params.id;
      alert('Child get id ' + this.parentRouterid);
    });
  }

}
