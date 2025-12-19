import { heroes } from '../data/heroes';

export const findById = (id: number) => {
  return heroes.find(hero => hero.id === id);
}
