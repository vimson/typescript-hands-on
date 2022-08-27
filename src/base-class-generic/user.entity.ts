import { BaseEntity } from './base.entity.js';

export type UserData = {
  name: string;
  email: string;
  ssn: string;
  dob: string;
  age: number;
  address: string;
};

export class User extends BaseEntity<UserData> {
  private id: number | null = null;
  private name: string;
  private email: string;
  private ssn: string;
  private dob: string;
  private age: number;
  private address: string;

  constructor({ name, email, ssn, dob, age, address }: UserData) {
    super();
    this.name = name;
    this.email = email;
    this.ssn = ssn;
    this.dob = dob;
    this.age = age;
    this.address = address;
  }
}
