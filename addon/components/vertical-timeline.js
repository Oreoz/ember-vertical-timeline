import Ember from 'ember';
import layout from '../templates/components/vertical-timeline';

const { Component } = Ember;

export default Component.extend({
  layout,

  tagName: 'section',
  classNames: 'vertical-timeline',

  animations: true
});
