import Ember from 'ember';
import layout from '../../templates/components/timeline/timeline-date';

export default Ember.Component.extend({
  layout,

  tagName: 'span',
  classNames:'timeline-date'
});
