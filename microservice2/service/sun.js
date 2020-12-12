var request = require('request');


const ss = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=';

var sun= {

   find: function(req, res, next) {

       request(ss ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {
response = JSON.parse(body);
               res.send(response);

           } else {

               console.log(response.statusCode + response.body);

               res.send({sun: NULL});

           }

       });

   }

};

module.exports = sun;