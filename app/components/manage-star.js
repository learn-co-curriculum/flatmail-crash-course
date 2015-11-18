import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  actions: {
    toggleStar: function(){
      this.get('message').toggleProperty('starred');
      this.get('message').save();
    }
  }
});
