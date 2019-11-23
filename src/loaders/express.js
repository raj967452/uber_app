'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');

const expressLoader = async ({ app }) => {

   app = express();

   // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
   // It shows the real origin IP in the heroku or Cloudwatch logs
   app.enable('trust proxy');

   // Middleware that transforms the raw string of req.body into json
   app.use(bodyParser.json());

   /// catch 404 and forward to error handler
   app.use((req, res, next) => {
      const err = new Error('Not Found');
      err['status'] = 404;
      next(err);
   });

   /// error handlers
   app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({
         errors: {
            message: err.message,
         },
      });
   });
}

module.exports = expressLoader;