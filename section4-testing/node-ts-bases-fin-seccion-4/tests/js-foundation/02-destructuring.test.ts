import { describe, expect, test } from '@jest/globals';
import { characters } from './../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {
  test('characters should contain "Flash" and "Batman"', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Batman');
  });

  test('first character should be Flash and second Superman', () => {
    const [flash, superman] = characters;
    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});
