import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    refreshMessages: function(){
      this.store.findAll('message', {reload: true});
    }
  }
});
