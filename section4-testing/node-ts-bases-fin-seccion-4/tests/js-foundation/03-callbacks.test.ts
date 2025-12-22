import { getUserById } from './../../src/js-foundation/03-callbacks';
import { describe, expect, test } from '@jest/globals';

describe('js-foundation/03-callbacks', () => {
  test('getUserById should get an error if user not found', () => {
    const id = 10;

    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
    });
  });

  test('getUserById should return John Doe with id 1', () => {
    const id = 1;

    getUserById(id, (error, user) => {
      expect(error).toBeUndefined();
      expect(user?.name).toBe('John Doe');
    });
  });
});
