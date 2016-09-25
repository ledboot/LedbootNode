var logger = require('../common/logger');

exports.index = function(req,res){
    
    res.render('index',{
        title: 'imooo'
    });
}