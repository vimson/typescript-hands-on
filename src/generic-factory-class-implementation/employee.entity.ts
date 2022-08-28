import { BaseEntity } from './base.entity.js';

type EmployeeType = {
  id?: string | number | null;
  name: string;
  email: string;
  ssn: string;
  dob: string;
  age: number;
  address: string;
  department: string;
  insurance_number: string;
  salary: number;
};

class Employee extends BaseEntity<EmployeeType> {
  private id: number | null = null;
  private name: string;
  private email: string;
  private ssn: string;
  private dob: string;
  private age: number;
  private address: string;
  private department: string;
  private insurance_number: string;
  private salary: number;

  constructor({
    name,
    email,
    ssn,
    dob,
    age,
    address,
    department,
    insurance_number,
    salary,
  }: EmployeeType) {
    super();
    this.name = name;
    this.email = email;
    this.ssn = ssn;
    this.dob = dob;
    this.age = age;
    this.address = address;
    this.department = department;
    this.insurance_number = insurance_number;
    this.salary = salary;
  }
}

export { Employee, EmployeeType };
