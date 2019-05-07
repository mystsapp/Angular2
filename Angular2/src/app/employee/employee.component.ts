import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[];
  constructor(private employeeService: EmployeeService, private alertifyService: AlertifyService) {}

  ngOnInit() {
    this.employeeService.getList().subscribe(data => {
      this.employees = data;
      console.log(data);
    }, error => {
       this.alertifyService.error('Load data failure');
      // console.log(error);
    });
  }
}
