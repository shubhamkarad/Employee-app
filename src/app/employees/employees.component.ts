import { Component, OnInit } from '@angular/core';
import {employee1} from '../Employee';
import { EmployeeService } from '../employee.service';
import{MessageService} from '../message.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import{response} from '../response';
import {Store} from '@ngrx/store';
import {increment} from 'couter.actions';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
// import 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  // ELEMENT_DATA : Response[];
  displayedColumns: string[] = ['id', 'name', 'salary','details','update','delete'];
  // dataSource : employee1[]=[];  
  // adding data manually 

  employees : employee1[]=[]
  employees$ :Observable<employee1[]>;
  employeeData : employee1[] =[]
  selectedEmployee?: employee1
  onselect(emp : employee1) :void 
  { 
      console.log('hi I have executed'+ emp.name);
      this.selectedEmployee=emp;
  }
  
  onclick() : void{
    this.selectedEmployee=undefined;
  }
  constructor(private employeeService :EmployeeService, private router: Router, private store :Store <{count: number, employees: employee1[]}>) { 
    // this.count$ = store.select('count');
    this.employees$ = store.select('employees');
  }
  increment():void{
    this.store.dispatch(increment())
  }
  getEmployees():void{
    console.log('getting all employess..');
    this.employeeService.getAllEmployees().subscribe((emp)=>{
      this.employeeData=emp.map((emp)=>({name: emp.name, salary:emp.salary, id:emp.id}))
    });
  }
  deleteEmployee(selectedEmployee)
  {
    this.employeeService.deleteEmployee(selectedEmployee.id).subscribe((resp)=>
    {
        console.log(resp);
        this.getEmployees();  
    }),
    (err)=>console.log(err);
  }
  updateEmployee(employee1)
  {
    this.employeeService.updateEmployee(employee1);
    this.router.navigate(['/addEmployee']);
  }
  // editEmployee(id)
  // {
  //   // console.log(this.employeeData[index]);
  //   this.employeeService.editEmployees(id).subscribe((resp)=>{
  //     console.log(resp);
  //     this.getEmployees();
  //   })
  // }
  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id);
    this.getEmployees();
    
    // this.employeeService.getEmployee(this.router.snapshot.params.id).subscribe((result)=>
    // {
    //   console.log(result);
    //  this.updateEmployee(result);
    // })
  }

}
