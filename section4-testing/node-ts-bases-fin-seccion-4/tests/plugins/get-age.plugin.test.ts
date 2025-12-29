import { describe, expect, test } from '@jest/globals';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin', () => {
  test('getAge should return the age of person', () => {
    const bday = '1997-10-06';
    const age = getAge(bday);

    expect(typeof age).toBe('number');
    expect(age).toBe(28);
  });

  //TODO: Terminar el SpyOn
});
