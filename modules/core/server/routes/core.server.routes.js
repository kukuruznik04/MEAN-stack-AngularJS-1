'use strict';

module.exports = function(app){

    var controller = require('../controllers/core.server.controller'),
        mainController = require('../controllers/main.server.controller');





    // Contact collection and creation
    app
        .route('/api/contact')
        .get(controller.getContacts)
        .post(controller.createContact);

    // Update and delete operations
    app
        .route('/api/contact/:contactId')
        //.get(controller.getContacts)
        .put(controller.updateContact)
        .delete(controller.deleteContact);

    app.param ('contactId', controller.validateContactIdAndForward)
}