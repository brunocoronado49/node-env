const { buildLogger } = require('./plugins');
// const getPokemonById =  require('./js-foundation/07-async-await');
const logger = buildLogger('app.js');

logger.log('Hello world');
logger.error('Something wrong');

// getPokemonById(6)
//   .then(pokemon => console.log({pokemon}))
//   .finally(() => console.log('Finalmente'));
