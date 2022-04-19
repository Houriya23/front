import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeClass } from 'src/app/model/employee-class.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = 'http://localhost:8080/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  createEmployee(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/employees`;
    return this.http.post(API_URL, data);
  }
  showEmployees() {
    return this.http.get<EmployeeClass[]>(`${this.apiUrl}/employees`);
  }
  showEmployeesByJob(job: String) {
    return this.http.get<EmployeeClass[]>(
      `${this.apiUrl}/employees/job/` + job
    );
  }
  showEmployeesByGender(gender: String) {
    return this.http.get<EmployeeClass[]>(
      `${this.apiUrl}/employees/gender/` + gender
    );
  }
  showEmployeesByTown(town: String) {
    return this.http.get<EmployeeClass[]>(
      `${this.apiUrl}/employees/town/` + town
    );
  }
  showEmployeesByName(name: String) {
    return this.http.get<EmployeeClass>(
      `${this.apiUrl}/employees/lastName/` + name
    );
  }
}
