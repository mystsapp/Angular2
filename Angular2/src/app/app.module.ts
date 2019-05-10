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

@NgModule({
   declarations: [
      AppComponent,
      TutorialComponent,
      EmployeeComponent,
      HomeComponent,
      NavComponent,
      FooterComponent,
      NotFoundComponent
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
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
