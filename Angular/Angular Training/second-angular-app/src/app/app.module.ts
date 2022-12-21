import { SentenceCasePipe } from './ui/employees/sentence-case.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './ui/employees/employees.component';
import { EmployeeDetailsComponent } from './ui/employees/employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';
import { TestEventBindingComponent } from './ui/test-event-binding/test-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    TestEventBindingComponent,
    SentenceCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
