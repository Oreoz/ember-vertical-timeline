import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timeline/timeline-block', 'Integration | Component | timeline/timeline block', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Template block usage:
  this.render(hbs`
    {{#timeline/timeline-block}}
      template block text
    {{/timeline/timeline-block}}
  `);

    assert.equal(this.$('div.timeline-block').length, 1);
});
