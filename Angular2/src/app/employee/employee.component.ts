import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[];
  constructor(private employeeService: EmployeeService, private alertifyService: AlertifyService, private route: ActivatedRoute) {}

  ngOnInit() {
   this.route.data.subscribe(data => {
     this.employees = data.employees;
   })
  }
}
