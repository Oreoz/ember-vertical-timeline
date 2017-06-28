import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timeline/timeline-date', 'Integration | Component | Timeline Date', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#timeline/timeline-date}}
      template block text
    {{/timeline/timeline-date}}
  `);

  assert.equal(this.$('span.timeline-date').length, 1);
});
