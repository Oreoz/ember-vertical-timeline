import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';
import layout from '../../templates/components/timeline/timeline-image';

export default Component.extend(InViewportMixin, {
  layout,

  animate: true,
  classNames: 'timeline-image',
  classNameBindings: ['bounceIn:bounce-in:is-hidden', 'animate'],

  didEnterViewport() {
    this.set('bounceIn', true);
  },
});
