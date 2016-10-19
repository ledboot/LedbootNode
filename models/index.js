'use strict';

const mongoose = require('mongoose');
const config = require('../config');
const logger = require('../common/logger');


mongoose.connect(config.db,{
    server:{poolSize:config.poolSize},
    function (err) {
        if(err){
            logger.error('connect to %s error: ', config.db, err.message);
            process.exit(1);
        }
    }
});