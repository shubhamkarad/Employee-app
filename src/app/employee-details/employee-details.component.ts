import { Component, OnInit, Input } from '@angular/core';
import {employee1} from '../Employee';
import{Location} from '@angular/common';
import{ActivatedRoute} from '@angular/router';
import{EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee?:employee1;
  
  constructor(private route: ActivatedRoute, private empService :EmployeeService,
    private location :Location) { }

    getEmployee():void{
      const id = this.route.snapshot.paramMap.get('id');
     
      this.empService.getEmployee(id).subscribe((emp=>{
        this.employee = { id :emp.id, name:emp.name,salary:emp.salary}; 
      }))
    }
    // deleteEmployee():void{
    //   const id = this.route.snapshot.paramMap.get('id');
    //   this.empService.deleteEmployee(id).subscribe((emp)=>
    //   {
    //     this.employee = {id:emp.id, name:emp.name, salary:emp.salary};
    //   })
    // }
 
    ngOnInit(): void {
      this.getEmployee();
  }

}
