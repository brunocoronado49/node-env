import { describe, expect, jest, test } from '@jest/globals';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin', () => {
  test('getAge should return the age of person', () => {
    const bday = '1997-10-06';
    const age = getAge(bday);
    const calculatedAge = new Date().getFullYear() - new Date(bday).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1997);
    const bday = '1997-10-06';
    const age = getAge(bday);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
