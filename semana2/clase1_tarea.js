const { ask } = require('../helpers/input');

async function main() {
  let i = 2;
  while (i <= 100) {
    console.log(i);
    i += 2;
  }
}

main();