import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './NotFound/NotFound.component';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeeComponent},
  // {path: '**', redirectTo: '', pathMatch: 'full'}
  {path: '**', component: NotFoundComponent}
];
