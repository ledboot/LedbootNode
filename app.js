

var config = require('./config');
var express = require('express');
var path = require('path');
var logger = require('./common/logger');
var webRouter = require('./web_router');
var app = express();


app.set('views',path.join(__dirname,'views'));
// app.set('view engine','html');
// app.engine('html',require('ejs-mate'));
app.set('view engine','jade');

app.listen(config.port,function(){
    logger.info('web start on port',config.port);
});

app.use('/',webRouter);

module.exports = app;
