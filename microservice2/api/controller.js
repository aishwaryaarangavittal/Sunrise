'use strict';

var properties = require('../package.json')
var sun = require('../service/sun');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getsun: function(req, res) {
           sun.find(req, res, function(err, sun) {
               if (err)
                   res.send(err);
               res.json(sun);
           });
       },
     
};

module.expo=controllers;