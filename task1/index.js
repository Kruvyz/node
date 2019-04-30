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

// if (!action || !shift) {
//   console.error('action or shift is miss');
//   return 0;
// }

let text = '';
if (fs.existsSync(input)) {
  text = fs.readFileSync(input, 'utf8');
} else {
  (async function(){
    process.stdin.setEncoding('utf8');

    text2 = await process.stdin.on('readable', () => {
      let text1 = process.stdin.read();
      process.stdout.write(`data: ${text1}`);
    });

   return text2
  })().then(resolve => {console.log(resolve)});
}
// console.log(text);
// outputText(text, output);

function outputText(text, path) {
  if (fs.existsSync(path)) {
    fs.writeFileSync(path, text);
  } else {
    process.stdout.write(text);
  }
}