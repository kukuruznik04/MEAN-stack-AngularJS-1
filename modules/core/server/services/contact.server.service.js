'use strict';

var mongoose = require('mongoose'),
    contact = mongoose.model('Contact');

module.exports.saveContact = function (savableContact, callback) {

    //console.log('mongoose readyState is ' + mongoose.connection.readyState);// should be 1


    var checkContact = new contact(savableContact);

    checkContact.save(function (err) {
        //console.log(err);
        callback && callback(err, checkContact);
    });

}

module.exports.updateContact = function (contactID, updatableContact, callback) {

    var checkContact = new contact(updatableContact);

    contact.update({_id: contactID}, updatableContact, null, function (err, docs) {
        if (err) {
            callback(err);
        } else {
            //console.log(docs);
            callback(null, updatableContact);
        }
    });

}

module.exports.deleteContact = function (contactID, callback) {

    contact.remove({_id: contactID}, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

module.exports.getContact = function (callback) {

    contact(contact.find({}, function (err, docs) {
        //console.log (err);
        callback && callback(err, docs);
    }));

}

module.exports.findContactById = function (id, callback) {

    contact(contact.findOne({_id: id}, function (err, docs) {
        //console.log (err);
        if (err) {
            callback(err);
        } else {
            //console.log(docs);
            callback(null, docs);
        }
        return docs;
    }));
    //return foundContact;
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