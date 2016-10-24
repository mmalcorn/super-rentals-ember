import Ember from 'ember';  //'About' route loads corresponding 'about' template.
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about'); //Router maps URL to corresponding 'about' route entry.  Loads about route handler.
  this.route('contact');
});

export default Router;
