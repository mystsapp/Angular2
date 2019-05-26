import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[];
  pages = [];
  currentPage: number;
  constructor(private employeeService: EmployeeService,
              private alertifyService: AlertifyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params.pageNumber || 1; // query variable name
      console.log(this.currentPage);
    });
    this.activatedRoute.data.subscribe(data => {
      this.employees = data.employees;
    });
    this.pages = [1, 2, 3, 4, 5];
  }
}
