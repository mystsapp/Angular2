import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetailResolver } from './_resolvers/employee.resolver';
import { EmployeeListResolver } from './_resolvers/employee-list.resolver';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    children: [
      {
        path: 'employees',
        component: EmployeeComponent,
        resolve: { employees: EmployeeListResolver }
      },
      {
        path: 'employees/:id',
        component: EmployeeDetailComponent,
        resolve: { employee: EmployeeDetailResolver },
        children: [
          {path: '', redirectTo: '', pathMatch: 'full'},
          { path: 'overview', component: EmployeeOverviewComponent },
          { path: 'projects', component: EmployeeProjectComponent }
        ]
      }
    ]
  },
  // {path: '**', redirectTo: '', pathMatch: 'full'}
  { path: '**', component: NotFoundComponent }
];
