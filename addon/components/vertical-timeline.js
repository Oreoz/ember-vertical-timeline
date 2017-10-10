import Component from '@ember/component';
import layout from '../templates/components/vertical-timeline';

export default Component.extend({
  layout,

  tagName: 'section',
  classNames: 'vertical-timeline',

  animate: true
});
