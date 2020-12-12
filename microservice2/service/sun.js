var request = require('request');


const ss = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=';
const fd='http://localhost:9320/date';

var sun= {

   find: function(req, res, next) {
       

       request(fd ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {
               const date=JSON.parse(body)
               const ans=date.date;
               request(ss+ans ,

                function (error, response, body) {
         
                    if (!error && response.statusCode == 200) {
                     response = JSON.parse(body);
                        res.send(response.results.sunrise);
                    
         
                    } 
                    else {

                        console.log(response.statusCode + response.body);
         
                        res.send({date: NULL});
         
                    }
                })

           } else {

               console.log(response.statusCode + response.body);

               res.send({sun: NULL});

           }

       });

   }

};

module.exports = sun;