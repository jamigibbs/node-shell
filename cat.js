let fs = require('fs');

module.exports = function(file){
  file = `./${file}`;
  return fs.readFile(file, function(err, data){
    if (err){
      throw err;
    } else {
      console.log(data.toString());
    }
  });
};
