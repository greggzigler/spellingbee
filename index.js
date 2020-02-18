const fs = require('fs');

const [ /* ignore1 */, /* ignore2 */, required, optionals, dict = 'share' ] = process.argv;
const regex = new RegExp(`^[${required}${optionals}]+$`);

const dictionary = fs.readFileSync(`./dictionaries/${dict}`, { encoding: 'utf8' }).split('\n');

const matches = dictionary
  .filter(word => word.length >= 4)
  .filter(word => word.includes(required))
  .filter(word => word.match(regex));

console.log(JSON.stringify(matches, null, 2));
