import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UIComponent/header/header.component';
import { FooterComponent } from './UIComponent/footer/footer.component';
import { HomeComponent } from './UIComponent/home/home.component';
import { EmployeesPageComponent } from './UIComponent/employees-page/employees-page.component';
import { EmployeeDetailsComponent } from './UIComponent/employees-page/employee-details/employee-details.component';
import { EmployeeFormComponent } from './UIComponent/employees-page/employee-form/employee-form.component';
import { EmployeeFormIdValidationDirective } from './Directives/employee-form-id-validation.directive';


const appRoutes: Routes = [
  {path:"", redirectTo: 'Home', pathMatch: 'full'},
  {path: "Home", component: HomeComponent },
  {path: "EmployeesPage", component: EmployeesPageComponent },
  {path: "EmployeesPage/EmployeeForm", component: EmployeeFormComponent },
  {path: 'EmployeesPage/EmployeeDetails/:employeeId', component: EmployeeDetailsComponent},
  {path: '**', redirectTo: 'Home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    EmployeesPageComponent,
    EmployeeFormComponent,
    EmployeeFormIdValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
