'use strict';

module.exports = function(app){

    var controller =  require('../controllers/core.server.controller.js'),
        mainController = require('../controllers/main.server.controller.js');

    app
        .route('/')
        .get(mainController.index);

    // Contact collection and creation
    app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);

    // Update and delete operations
    app
        .route('/api/contact/:contactId')
        .get(controller.getContactById)
        .put(controller.updateContact)
        .delete(controller.deleteContact);

    app.param ('contactId', controller.validateContactIdAndForward)
}