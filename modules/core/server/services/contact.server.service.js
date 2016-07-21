'use strict';

var mongoose = require('mongoose'),
    contact = mongoose.model('Contact');

module.exports.saveContact = function(savableContact, callback){

    console.log('mongoose readyState is ' + mongoose.connection.readyState);// should be 1


    var checkContact = new contact(savableContact);

    checkContact.save(function (err) {
        console.log (err);
        callback && callback(err, checkContact);
    });

}

module.exports.updateContact = function(savableContact, callback){



}

module.exports.deleteContact = function(savableContact, callback){


}

module.exports.getContact = function(callback) {

    contact(contact.find({}, function (err, docs) {
        //console.log (err);
        callback && callback(err, docs);
    }));

}

module.exports.findContactById = function(id){

    var foundContact = contact(contact.find(id, function (err, docs) {
        //console.log (err);
        callback && callback(err, docs);
    }));
    console.log (foundContact);
    // var foundContact;
    // contacts.some(function(contact, index){
    //     if(contact.id === id){
    //         foundContact = {}
    //         foundContact.contact = contact;
    //         foundContact.index = index;
    //         return foundContact;
    //     }
    // });
    // return foundContact;
}