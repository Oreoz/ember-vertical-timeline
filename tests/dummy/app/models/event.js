import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({

  date: attr(),
  title: attr(),
  description: attr(),

});
