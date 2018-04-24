let fs = require('fs');

module.exports = function(file){
  console.log('made it to cat');
  file = `./${file}`;
  return fs.readFile(file, function(err, data){
    if (err){
      throw err;
    } else {
      // return data.toString();
      console.log(data.toString());
    }
  });
};

// ./pwd.js
