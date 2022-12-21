import { FilterPipe } from './ass6/search/filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormValidationComponent } from './ass4/form-validation/form-validation.component';
import { ShowNameComponent } from './ass5/show-name/show-name.component';
import { SearchComponent } from './ass6/search/search.component';
import { ShoppingComponent } from './ass7/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    FormValidationComponent,
    ShowNameComponent,
    SearchComponent,
    FilterPipe,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
