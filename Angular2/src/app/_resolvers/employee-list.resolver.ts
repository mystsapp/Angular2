import { Injectable } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { Employee } from '../_models/employee';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeListResolver {
    constructor(private employeeService: EmployeeService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> {
        return this.employeeService.getList().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data.');
                this.router.navigate(['/home']);
                return of(null);
            })
        )
    }
}