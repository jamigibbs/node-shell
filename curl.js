const request = require('request');

module.exports = function(url){
  return request(url, function(err, response, body){
    console.log('error:', err);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
};
