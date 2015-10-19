(function() {

Ember.TEMPLATES["aljs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"site-banner\" role=\"banner\"><a class=\"active\" href=\"/\"><img src=\"images/aljs-logo.svg\"></a>\n</header>\n<main class=\"site-main\" role=\"main\">\n    <div class=\"site-content\">\n        <header class=\"site-masthead slds-grid\">\n            <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n                <div class=\"slds-media__body\">\n                    <div class=\"slds-grid\">\n                        <h1 title=\"Appiphony Lightning JS\" class=\"slds-p-left--large\">Appiphony Lightning JS</h1></div>\n                </div>\n            </div>\n        </header>\n        <div class=\"site-content slds-p-around--xx-large site-design site-design-layout\">\n            <footer class=\"site-resources--landing slds-p-vertical--small\">\n                <ul class=\"slds-grid slds-wrap slds-grid--align-spread slds-grid--pull-padded-large\">\n                    <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n                        <div class=\"grid-card\">\n                            <div class=\"slds-grid slds-grid--align-spread\">\n                                <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"downloads-header\">jQuery</h3></div>\n                            <hr class=\"hr hr--pink\">\n                            <p>Blah blah blah</p><a class=\"slds-button slds-button--neutral slds-m-top--large\" href=\"#\">Download</a></div>\n                    </li>\n                    <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n                        <div class=\"grid-card\">\n                            <div class=\"slds-grid slds-grid--align-spread\">\n                                <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"tutorials-header\">Ember (Coming Soon)</h3></div>\n                            <hr class=\"hr hr--orange\">\n                            <p>Blah blah blah</p>\n                        </div>\n                    </li>\n                </ul>\n            </footer>\n        </div>\n    </div>\n</main>\n<nav id=\"navigation\" class=\"site-navigation\" role=\"navigation\">\n    <ul class=\"slds-list--vertical slds-has-block-links\">\n        <li class=\"slds-list__item\"><a class=\"\" href=\"#\">Demo 2</a></li>\n        <li class=\"slds-list__item\"><a href=\"#\">Demo 2</a></li>\n    </ul>\n</nav>\n<footer class=\"site-contentinfo slds-wrap site-text-longform slds-text-body--small\" role=\"contentinfo\">\n    <p class=\"slds-col--padded slds-size--1-of-1 slds-shrink-none slds-large-size--2-of-3\"><span>Copyright © 2015 </span><span class=\"site-name\"><span >Sales</span><i>f</i><span>orce</span></span><span>. </span><a href=\"http://salesforce.com/company/legal/intellectual.jsp\">All rights reserved</a><span>. </span><span>Version 0.9.2. Last Updated on October 5th 2015, 8:40 pm. Travis build 193.1.</span></p>\n</footer>");
  
});

})();

(function() {

// Kick off Ember
App = Ember.Application.create({
    rootElement: '#app'
});


App.AljsController = Ember.ObjectController.extend({
    
});

App.AljsRoute = Ember.Route.extend({
    model: function (){
        return {

        };
    }
});

// Router
App.Router.map(function() {
    this.resource('aljs', { path: '/' });
});


// // This setting disables the detail routing from showing up in the navbar.
App.Router.reopen( {
    location: 'none'
});



})();