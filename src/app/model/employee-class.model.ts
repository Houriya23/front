export class EmployeeClass {
  firstName: string;
  lastName: string;
  emailId: string;
  telNumber: number;
  hourPrice: number;
  job: string;
  gender: string;
  town: string;
  constructor(
    firstName: string,
    lastName: string,
    emailId: string,
    telNumber: number,
    hourPrice: number,
    job: string,
    gender: string,
    town: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.telNumber = telNumber;
    this.hourPrice = hourPrice;
    this.job = job;
    this.gender = gender;
    this.town = town;
  }
}
