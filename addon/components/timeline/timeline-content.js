import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';
import layout from '../../templates/components/timeline/timeline-content';

export default Component.extend(InViewportMixin, {
  layout,

  classNames: 'timeline-content',
  classNameBindings: ['viewportEntered:bounce-in:is-hidden', 'animate'],

  animate: true
});
