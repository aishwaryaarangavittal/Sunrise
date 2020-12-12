'use strict';

var properties = require('../package.json')
var date = require('../service/date');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getdate: function(req, res) {
           date.find(req, res, function(err, date) {
               if (err)
                   res.send(err);
               res.json(date);
           });
       },
     
};

module.expo=controllers;