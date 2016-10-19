
'use strict';

const config = require('./config');
const express = require('express');
const path = require('path');
const logger = require('./common/logger');
const webRouter = require('./web_router');
const app = express();


app.set('views',path.join(__dirname,'views'));
// app.set('view engine','html');
// app.engine('html',require('ejs-mate'));


app.listen(config.port,function(){
    logger.info('web start on port',config.port);
});

app.use('/',webRouter);

module.exports = app;
