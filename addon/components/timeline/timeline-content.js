import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';
import layout from '../../templates/components/timeline/timeline-content';

const { Component } = Ember;

export default Component.extend(InViewportMixin, {
  layout,

  classNames: 'timeline-content',
  classNameBindings: ['viewportEntered:bounce-in:is-hidden']
});
