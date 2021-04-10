import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from 'counter.reducer';
import { CounterComponent } from './counter/counter.component';
import{employeeReducer} from 'employee.reducer';




@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MessageComponent,
    EmployeeDetailsComponent,
    AddEmployeesComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, MatTableModule,MatInputModule,MatButtonModule,MatDividerModule,MatToolbarModule,MatIconModule,MatCardModule,  StoreModule.forRoot({ count: CounterReducer, employees: employeeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
