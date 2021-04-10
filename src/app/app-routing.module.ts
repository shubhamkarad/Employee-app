import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddEmployeesComponent} from './add-employees/add-employees.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes:Routes = [
  { path:'employeeList', component: EmployeesComponent },
  {path:'addEmployee', component: AddEmployeesComponent},
  {path:'addEmployee/:id', component: AddEmployeesComponent},
  {path:'employeeDetails/:id', component: EmployeeDetailsComponent}, 
  {path : 'employeeList/:id', component :EmployeesComponent },
  {path:'', redirectTo:'/employeeList', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
