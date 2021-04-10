import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee1 } from './Employee';
import { response } from './response';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    httpOptions = {headers: new HttpHeaders({'content-type':'application/json'})};

  constructor(private http :HttpClient ) { }
 url = 'http://localhost:3000/employees';
  getAllEmployees() :Observable<response[]>{

  return this.http.get<response[]>(this.url, this.httpOptions);
  }
//   {
//     return[
//       {
//         id :12,
//         name:'shubham',
//         salary : 20000
//     },
//     {
//       id :13,
//       name:'Ameya',
//       salary : 25000
//   },
//   {
//     id :14,
//     name:'Ronak',
//     salary : 35000
// },
// ];
//   }
//Getting all employees
getEmployee(id):Observable<response>{
  const newUrl = `${this.url}/${id}`
  // console.log(id);
  return this.http.get<response>(newUrl, this.httpOptions);
   }
   // Delete the Id. function to delete the Id from Json file.
   deleteEmployee(id):Observable<response>
   {
     return this.http.delete<response>(this.url +'/'+ id );
   }
   updateEmployee(emp:employee1):Observable<response>
   {
      const upadateUrl = `${this.url}/${emp.id}`
      return this.http.put<response>(upadateUrl,emp, this.httpOptions);
   }
  //  getCurrentData(id)
  //  {
  //   return this.http.get<response>(this.url +'/'+ id );
  //  }
  //  updateEmployee(id):Observable<response>
  //  {
  //    return this.http.put<response>(this.url + '/id' +id);
  //  }
// Observable<employee1>{
//   const newurl = `${this.url}/${id}`
//   console.log(id);
//   return this.http.delete<employee1>(newurl, this.httpOptions);
// }
}


