// const { emailTemplate } = require('./js-foundation/01-template.js');
// require('./js-foundation/02-destructuring.js')
const { getUserById } = require('./js-foundation/04-arrow-functions.js')

// console.log(emailTemplate);

const id = 1;

getUserById(id, (error, user) => {
  if (error) throw new Error(error);
  console.log(user);
});

