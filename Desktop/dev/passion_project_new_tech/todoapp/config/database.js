var mongoose = require('mongoose');

module.exports = function(envConfig){
    // register models
    require('./models/Todo');

    // connecting to mongoodb database
    mongoose.connect(envConfig.database, function(){
        console.log('connected to database!')
    });
};