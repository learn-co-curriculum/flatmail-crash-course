import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  actions: {
    toggleArchive: function(){
      this.get('message').toggleProperty('archived');
      this.get('message').save();
    }
  }
});
