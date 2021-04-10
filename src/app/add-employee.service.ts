import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {employee1} from './Employee';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor( private http : HttpClient) { }

  addEmployee(employee:employee1):Observable<any>{
    const URL = 'http://localhost:3000/employees'
    const options = {
      headers : new HttpHeaders({'content-type' : 'application/json'}),
    };
    const body = {
      id :employee.id,
      name :employee.name,
      salary :employee.salary
    };
    return this.http.post(URL, body, options);
  }
  // deleteEmployee(emp){
  //   return this.http.delete('http://localhost:3000/employees'+emp.id);
  // }
}
