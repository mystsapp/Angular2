import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeeComponent}
];
