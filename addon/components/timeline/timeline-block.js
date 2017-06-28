import Ember from 'ember';
import layout from '../../templates/components/timeline/timeline-block';

const { Component } = Ember;

export default Component.extend({
  layout,

  classNames: 'timeline-block',

  animate: true
});
