import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/index.js';
import '../../ui/pages/buttons.js';
import '../../ui/pages/page-not-found.js';


FlowRouter.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('App_body', { main: 'index' });
    }
});

FlowRouter.route('/buttons', {
    name: 'buttons',
    action() {
        BlazeLayout.render('App_body', { main: 'buttons' });
    }
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'page_not_found' });
    }
};