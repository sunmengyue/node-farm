const fs = require('fs');

// Blocking , synchronous way
const input = fs.readFileSync('./txt/input.txt', 'utf-8');
// const outPut = fs.writeFileSync(
//   './txt/output.txt',
//   `this is what we know about avacado: ${input}.\nCreated on: ${Date.now()}`,
//   'utf-8',
// );

// Non-blocking, asynchrous way
fs.readFile('./txt/start.txttttt', 'utf-8', (error, data) => {
  if (error) {
    return console.log(' we have some error 🤯');
  }
  fs.readFile('./txt/read-this.txt', 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2} ${data3}`, 'utf-8', (error) => {
        console.log('Your file has been written :)');
      });
    });
  });
});
console.log('I will read the data in just a second');
