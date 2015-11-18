import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('messages').filterBy('archived', false);
  },
  renderTemplate(){
    this.render('messages/messages');
  }
});
