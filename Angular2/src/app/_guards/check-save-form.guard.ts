import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
    constructor() {}
    canDeactivate(component: EmployeeDetailComponent) {

        return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
    }

}
