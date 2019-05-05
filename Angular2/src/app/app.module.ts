import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './_services/employee.service';

@NgModule({
   declarations: [
      AppComponent,
      TutorialComponent,
      EmployeeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [
      EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
