// import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { Lists } from '../../api/lists/lists.js';

import './index.html';

// let options = {
//     animation: 'slide' // What animation to use
// };
// let myNavigator;
//
// Template.index.onRendered(function () {
//     myNavigator = document.querySelector("#myNavigator");
//     console.log(myNavigator);
// });

Template.index.events({
    'click #buttons'() {
        let options = {
            animation: 'slide' // What animation to use
        };
        let myNavigator = document.querySelector("#myNavigator");
        myNavigator.pushPage("buttons", options);
        // FlowRouter.go('buttons');
    },
    'click #icons'() {
        let options = {
            animation: 'slide' // What animation to use
        };
        let myNavigator = document.querySelector("#myNavigator");
        myNavigator.pushPage("icons", options);
        // FlowRouter.go('icons');
    }
});