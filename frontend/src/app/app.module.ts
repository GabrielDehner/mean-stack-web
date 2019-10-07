import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//para formularios
import {FormsModule} from "@angular/forms";
//para http cliente
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
