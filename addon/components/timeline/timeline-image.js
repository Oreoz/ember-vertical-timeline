import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';
import layout from '../../templates/components/timeline/timeline-image';

const { Component, computed, String: { htmlSafe } } = Ember;

export default Component.extend(InViewportMixin, {
  layout,

  classNames: 'timeline-image',
  classNameBindings: ['viewportEntered:bounce-in:is-hidden'],

  backgroundColor: null,

  attributeBindings: ['style'],
  style: computed('backgroundColor', function () {
    let styleString = '';

    let backgroundColor = this.get('backgroundColor');
    if (backgroundColor) {
      styleString += `background: ${backgroundColor}`;
    }

    return new htmlSafe(styleString);
  })
});
