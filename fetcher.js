const request = require("request");
const fs = require("fs");

const url = process.argv.slice(2)[0];
const filePath = process.argv.slice(2)[1];
// console.log(url);

request(url, (error, response, body) => {
  if (error) {
    console.log("URL not provided");
    throw error;
  }
  if (response.statusCode === 200) {
    fs.writeFile(filePath, body, function(err) {
      if (err) throw err;
      console.log("File written!");
    });
  } else {
    console.log("Incorrect URL!!");
  }
});
