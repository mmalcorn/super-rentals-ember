import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
    //'rental' here is referencing the database, but is kept singular unlike the database.  The database must be plural.
  },
});
