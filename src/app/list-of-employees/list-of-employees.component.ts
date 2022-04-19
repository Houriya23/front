import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/services/employee.service';
import { EmployeeClass } from '../model/employee-class.model';

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss'],
})
export class ListOfEmployeesComponent implements OnInit, OnDestroy {
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  employees: EmployeeClass[] = [];
  lastname: string = '';
  town: string = '';
  genre: string = '';
  filter: boolean = false;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const job = params['job'];
      this.empService.showEmployeesByJob(job).subscribe({
        next: (value) => (this.employees = value),
        error: (err) => console.error(err),
        complete: () => console.log('DONE!'),
      });
    });
  }
  search() {
    this.empService.showEmployeesByName(this.lastname).subscribe({
      next: (value) => (
        (this.employees = []), this.employees.push(value), (this.town = '')
      ),
      error: (err) => (this.employees = []),
    });
  }
  filters() {
    this.filter = !this.filter;
  }
  searchbyTown() {
    this.empService.showEmployeesByTown(this.town).subscribe({
      next: (value) => ((this.employees = value), (this.town = '')),
    });
  }
  searchByGenre() {
    this.empService.showEmployeesByGender(this.genre).subscribe({
      next: (value) => ((this.employees = value), (this.genre = '')),
    });
  }
  ngOnDestroy(): void {
    this.town = '';
    this.genre = '';
    this.filter = false;
    this.lastname = '';
  }
}
