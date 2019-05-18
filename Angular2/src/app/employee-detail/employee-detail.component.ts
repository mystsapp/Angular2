import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_models/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  id: number;
  // subscription: Subscription;
  employee: Employee;

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.subscription = this.activatedRoute.params.subscribe(params => {
    //   this.id = params.id;
    //   this.employeeService.getEmployee(this.id).subscribe(data => {
    //     console.log(data);
    //     this.employee = data;
    //   })
    // });
    this.activatedRoute.data.subscribe(data => {
      this.employee = data.employee;
    })
  
  }

  // getEmployee() {
  //   this.employeeService.getEmployee(this.id).subscribe(data => {
  //     this.employee = data;
  //   })
  // }

}
