const ceasar = require('./ceasar');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    a: 'action',
    s: 'shift',
    i: 'input',
    o: 'output'
  }
});

const { action, shift, input, output } = argv;

if (!action || !shift) {
  console.error('action or shift is miss');
  return 0;
}

let text =fs.readFileSync(input, 'utf8');

outputText(text, output);

function outputText(text, path) {
  if (fs.existsSync(path)) {
    fs.writeFileSync(path, text);
  } else {
    process.stdout.write(text);
  }
}