'use strict';

var mongoose = require('mongoose'),
    contact = mongoose.model('Contact');

module.exports.saveContact = function(savableContact, callback){

    var checkContact = new contact(savableContact);

    checkContact.save(function (err) {
        //console.log (err);
        callback && callback(err, checkContact);
    });

    console.log('mongoose readyState is ' + mongoose.connection.readyState);// should be 1
    mongoose.connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err);
        }
        else {
            names.forEach(function(e,i,a) {
                mongoose.connection.db.dropCollection(e.name);
                console.log("--->>", e.name);
            });
        }
    });

}