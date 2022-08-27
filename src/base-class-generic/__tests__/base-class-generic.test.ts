import { UserData, User } from '../user.entity.js';

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
