# Factory class implementation in TypeScript using Generics

Factory method is a creational design pattern which solves the problem of creating product objects without specifying their concrete classes. The Factory Method defines a method, which should be used for creating objects instead of using a direct constructor call (new operator). Subclasses can override this method to change the class of objects that will be created.

Let us implement this as the base factory class for our project. Since we supposed to create different factory class for different entities, we can add the Entity class instantiation to our base factory class with TypeScript generics.

The following is the base factory class implementation which expects the Entity class name and the Entity data. The `create` method will generate an Entity and return to us.

```typescript
class Basefactory {
  create<EntityClass, EntityDataType>(
    entityClass: { new (classAtributes: EntityDataType): EntityClass },
    classAtributes: EntityDataType,
  ): EntityClass {
    return new entityClass(classAtributes as EntityDataType);
  }
}
```

A usage example for the Basefactory class in one if my project is

```typescript
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
```

In both the `UserFactory` and `EmployeeFactory`, we pass the entity class and the data we need to initialize the entity attributes.

The test code for testing the above implementation is

```typescript
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
```
