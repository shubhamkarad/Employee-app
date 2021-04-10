import { HttpClient } from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{employee1} from '../Employee'
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import {AddEmployeeService} from '../add-employee.service';
import {Observable} from 'rxjs';
import{Store} from '@ngrx/store';  
import { addEmployee } from 'employee.action';


// import { EmployeeDetailsComponent } from '.employee-details/employeeDetails';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  //added the Counter
  count$: Observable<number>

  employee?:employee1 ={id:'', name:'', salary:null};
  constructor( private httpClient : HttpClient, private messageService : MessageService, private service :AddEmployeeService, private empService : EmployeeService,private store: Store<{ count: number }>) { 
    this.count$ = store.select('count');
  }

  submit(emp :  employee1):void{
    this.employee=emp;
    // if(this.employee.id==undefined){
    this.service.addEmployee(this.employee).subscribe((data)=>
    {
      console.log(data);
      this.messageService.addMessage(data.message);
    }
    // this.store.dispatch(addEmployee({employee :emp}))
    // console.log(emp);
    // console.log(emp);

    )
    
    }
  
    updateEmployee(){
     
        this.empService.updateEmployee(this.employee).subscribe((data)=>
        {
          console.log(data);
          // this.messageService.addMessage(data.message);
        }
        // console.log(emp);
    
        )
    }
  
    // deleteEmployee(emp : employee1)
    // {
    //     this.employee = emp;
    //   this.service.deleteEmployee( this.employee).subscribe(()=>
    //   {
    //     this.empService.getEmployee(emp);
    //   })
    // }
    // addEmployees():void
    // {
    //   this.employeeService.getAllEmployees.subscribe((emp)=>
    //   {
    //     this.employee = emp.map((emp)=>
    //     {
    //       // name:emp.name, id:emp.id, alary : emp.salary
    //     })
    //   })  
    // }
  ngOnInit(): void {
  //   this.httpClient.put('/db.json').subscribe(data =>{
  //     console.log(data);
  //     this.employee[''] = data;
  // })
  }
}
