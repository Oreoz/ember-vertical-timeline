import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timeline/timeline-image', 'Integration | Component | timeline/timeline image', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#timeline/timeline-image}}
      template block text
    {{/timeline/timeline-image}}
  `);

  assert.equal(this.$('div.timeline-image').length, 1);
});
