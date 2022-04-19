import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';
import { EmployeeClass } from '../model/employee-class.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  inquiryForm = this.formBuilder.group({
    full_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_number: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),
    job: new FormControl('', []),
    gender: new FormControl('', []),
    town: new FormControl('', []),
  });

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const form = new FormData();
      form.append('full_name', _v.full_name);
      form.append('email', _v.email);
      form.append('phone_number', _v.phone_number);
      form.append('prix', _v.prix);
      let employee: EmployeeClass = new EmployeeClass(
        _v.full_name,
        _v.full_name,
        _v.email,
        _v.phone_number,
        _v.prix,
        _v.job,
        _v.gender,
        _v.town
      );
      // Submit your form to app call
      this.empService.createEmployee(employee).subscribe(
        (response) => {
          console.log(response);
          this.inquiryForm = this.formBuilder.group({
            full_name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone_number: new FormControl('', [Validators.required]),
            prix: new FormControl('', [Validators.required]),
            job: new FormControl('', []),
            gender: new FormControl('', []),
            town: new FormControl('', []),
          });
          this.toastr.success('Employeur ajouté avec succés');
        },
        (error) => {
          console.log(error);
          this.toastr.error("Problème dans l'ajout");
        }
      );
    }
  }
}
