# An example of a base class Entity implementation for Repository pattern

Here my objective is to implement a base class named `BaseEntiy` with some generic method to fetch properties of that class instance in a type safe manner using TypeScript generics.

BaseEntity class has two base methods defined

- get() - will return the properties as a plain Javascript object
- get(prop) - will return the property/attribute value
- set(prop, value) - will set the value of the passed property in the instance

```typescript
class BaseEntity<EntityDataType> {
  get<K extends keyof EntityDataType>(
    prop?: keyof EntityDataType,
  ): EntityDataType[K] | EntityDataType {
    const data = Object.assign({}, this) as unknown as EntityDataType;
    return prop ? (data[prop] as EntityDataType[K]) : (data as EntityDataType);
  }

  set<K extends keyof EntityDataType>(
    prop: keyof EntityDataType,
    value: EntityDataType[K],
  ): void {
    Object.assign(this, { [prop]: value });
  }
}
```

So we are set with our Base entity class. Now we need to create a `User` entity class from the base class. For passing data to the constructor I am here using a `UserData` type which has all the attribute definition of the Entity User.

The code for the `UserData` type and `User` entity can see below

```typescript
type UserData = {
  name: string;
  email: string;
  ssn: string;
  dob: string;
  age: number;
  address: string;
};

class User extends BaseEntity<UserData> {
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
```

So for any new class we extend from the base entity we can use the get and set methods in a type safe manner and we can add any general methods to the base class as well.

The test code is below

```typescript
describe('Base entity implemenation', () => {
  test('Base entity', () => {
    const userData: UserData = {
      name: 'John Doe',
      email: 'vimson@gmail.com',
      ssn: '123-456-789',
      dob: '01-01-1990',
      age: 20,
      address: '123 Main St',
    };
    const user = new User(userData);

    expect(user.get('name')).toBe(userData.name);
    expect(typeof user.get('age')).toBe('number');

    expect(user.get()).toEqual(Object.assign({ id: null }, userData));

    user.set('name', 'Jane Doe 123');
    expect(user.get('name')).toBe('Jane Doe 123');
  });
});
```
