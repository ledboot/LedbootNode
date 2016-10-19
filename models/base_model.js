'use strict';

const moment = require('moment');


exports.formatDate = function(date,friendly){
    var momentDate = moment(date);

    if(friendly){
        return momentDate.fromNow();
    }else{
        return date.format('YYYY-MM-DD HH:mm');
    }
};