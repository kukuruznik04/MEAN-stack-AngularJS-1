'use strict';

var mockService = require('../utils/core.server.mock'),
    contactService = require('../services/contact.server.service');

module.exports.getContacts = function (req, res) {

    // mock service
    // res.status(200);
    // res.json(mockService.getContacts);

    var contact = req.body;
    if (!contact) {
        res.status(400);
        res.end("ERROR: couldn't save contact");
    }
    contactService.getContact(function (err, docs) {
        if (err) {
            res
                .status(400)
                .send({message: "Error: Internal error while getting data. Please try again later"})
        } else
        {
            res
                .status(200)
                .json(docs)
        }
    });

}

module.exports.createContact = function (req, res) {
    var contact = req.body;
    if (!contact) {
        res.status(400);
        res.end("ERROR: couldn't save contact");
    }
    contactService.saveContact(contact, function (err, contact) {
        if (err) {
            res
                .status(400)
                .send({message: "Error: Internal error while saving data. Please try again later"})
        } else
        {
            res
                .status(200)
                .json(contact)
        }
    });

}

module.exports.updateContact = function (req, res) {
    var contact = req.body,
        contactID = req.metadata.contactId,
        index = req.metadata.index;

    var isUpdated = contactService.getContact(index, contact);
    if (!isUpdated) {
        res.status(400)
            .send({message: "Error:: Unable to update contact. Please try again!!"});
    } else {
        res.status(200)
            .json(isUpdated);
    }
}

module.exports.deleteContact = function (req, res) {
    var updatedContact = req.body,
        contactID = req.metadata.contactId,
        index = req.metadata.index;

    var isDeleted = mockService.deleteContact(index);
    if (!isDeleted) {
        res.status(400)
            .send({message: "Error:: Unable to delete contact. Please try again!!"});
    } else {
        res.status(200)
            .json(isDeleted);
    }
}


module.exports.validateContactIdAndForward = function (req, res, next, id) {
    // var metadata = req.metadata = {};
    // metadata.contactId = id;
    // var foundContact = mockService.findContactById(id);
    // if (foundContact) {
    //     metadata.model = foundContact.contact;
    //     metadata.index = foundContact.index;
    // }
    // if (!metadata.model) {
    //     res
    //         .status(400)
    //         .send({message: 'Error: Unable to find Contact with id ' + id});
    // }
    // next();

    var metadata = req.metadata = {};
    metadata.contactId = id;
    var foundContact = contactService.findContactById(id);
    if (foundContact) {
        metadata.model = foundContact.contact;
        metadata.index = foundContact.index;
    }
    if (!metadata.model) {
        res
            .status(400)
            .send({message: 'Error: Unable to find Contact with id ' + id});
    }
    next();
}