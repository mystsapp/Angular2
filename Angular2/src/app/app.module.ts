import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './_services/employee.service';
import { AlertifyService } from './_services/alertify.service';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeDetailResolver } from './_resolvers/employee.resolver';
import { EmployeeListResolver } from './_resolvers/employee-list.resolver';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_services/login.service';
import { CheckLoginGuard } from './_guards/check-login.guard';
import { CheckSaveFormGuard } from './_guards/check-save-form.guard';

@NgModule({
   declarations: [
      AppComponent,
      TutorialComponent,
      EmployeeComponent,
      HomeComponent,
      NavComponent,
      FooterComponent,
      NotFoundComponent,
      EmployeeDetailComponent,
      EmployeeOverviewComponent,
      EmployeeProjectComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      EmployeeService,
      AlertifyService,
      EmployeeDetailResolver,
      EmployeeListResolver,
      LoginService,
      CheckLoginGuard,
      CheckSaveFormGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
