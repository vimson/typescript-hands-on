import { User, UserType } from '../user.entity.js';
import { Employee, EmployeeType } from '../employee.entity.js';

class Basefactory {
  create<EntityClass, EntityDataType>(
    entityClass: { new (classAtributes: EntityDataType): EntityClass },
    classAtributes: EntityDataType,
  ): EntityClass {
    return new entityClass(classAtributes as EntityDataType);
  }
}

class UserFactory extends Basefactory {
  createEntity(userData: UserType): User {
    return this.create(User, userData);
  }
}

class EmployeeFactory extends Basefactory {
  createEntity(employeeData: EmployeeType): Employee {
    return this.create(Employee, employeeData);
  }
}

const userData: UserType = {
  name: 'John Doe',
  email: 'vimson@gmail.com',
  ssn: '123-456-789',
  dob: '01-01-1990',
  age: 20,
  address: '123 Main St',
};

const employeeData: EmployeeType = {
  ...userData,
  department: 'IT',
  insurance_number: '123-456-789',
  salary: 100000,
};

describe('Class types in generics', () => {
  test('Factory - User entity', () => {
    const userEntity = new UserFactory().createEntity(userData);
    expect(userEntity.get('name')).toBe(userData.name);
    expect(userEntity.get('id')).toEqual(null);
  });

  test('Factory - Employee entity', () => {
    const employeeEntity = new EmployeeFactory().createEntity(employeeData);
    expect(employeeEntity.get('insurance_number')).toBe('123-456-789');
    expect(employeeEntity.get('id')).toEqual(null);
  });
});
