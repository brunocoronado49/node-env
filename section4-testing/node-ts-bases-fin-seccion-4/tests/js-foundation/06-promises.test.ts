import { describe, expect, test } from '@jest/globals';
import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe('bulbasaur');
  });

  test('should return error if pokemon not exists', async () => {
    const pokemonId = 1000000000;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe('Pokemon no existe');
    }
  });
});
