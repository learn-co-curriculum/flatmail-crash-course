import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('messages', function() {
    this.route('message', {
      path: ':message_id'
    });
    this.route('inbox');
    this.route('starred');
    this.route('archived');
  });
});

export default Router;
