const { getAge, getUUID } = require('./plugins');

const { buildMakePerson } = require('./js-foundation/05-factory-functions');

const obj = {name: 'John Wick', birthdate: '1997-10-06'};
const makePerson = buildMakePerson(getUUID, getAge);
const johnWick = makePerson(obj);
console.log({johnWick});
