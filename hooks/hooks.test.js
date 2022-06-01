import {
  describe,
  it,
  expect,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from 'vitest';

import { User } from './hooks';

const testEmail = 'test@example.com';
let user;

describe('User Class', () => {
  beforeEach(() => {
    user = new User(testEmail);
  });

  it('should update the email', () => {
    let newTestEmail = 'new@example.com';

    user.updateEmail(newTestEmail);

    expect(user.email).toEqual(newTestEmail);
  });

  it('should have an email property', () => {
    expect(user).toHaveProperty('email');
  });

  it('should store the provided email value', () => {
    expect(user.email).toEqual(testEmail);
  });

  it('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toEqual('');
  });

  it('should still have email property after clearing the email', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
  });
});
