const baseFn = require('./demo/base')

function add(a, b) {
  return a + b;
}

baseFn()

add(1, 2) // 12323
add(1, 2) // 243434

console.log('hello world');

console.log('test');

const app = document.getElementsByTagName('body')[0]

app.innerHTML = `<h1>console.log('12345');</h1>`

