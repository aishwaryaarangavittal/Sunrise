var request = require('request');


const fd = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today';

var date= {

   find: function(req, res, next) {

       request(fd ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {
            response = JSON.parse(body);
               res.send(response);

           } else {

               console.log(response.statusCode + response.body);

               res.send({date: NULL});

           }

       });

   }

};

module.exports = date;