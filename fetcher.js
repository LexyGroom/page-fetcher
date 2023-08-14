const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const local = process.argv[3];

request(URL, (error, response, body) => {
  
  if (error) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
  }

  fs.writeFile(local, body, err => {
    if (err) {
      console.error(err);
    } else {
      const count = body.length;
      console.log(`Downloaded and saved ${count} bytes to ${local}`);
    }
  });
});