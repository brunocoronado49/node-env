import { findById } from './services/hero.service';

const hero = findById(3);
console.log(hero?.name ?? 'Hero not found');
