import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timeline/timeline-content', 'Integration | Component | timeline/timeline content', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Template block usage:
  this.render(hbs`
    {{#timeline/timeline-content}}
      template block text
    {{/timeline/timeline-content}}
  `);

  assert.equal(this.$('div.timeline-content').length, 1);
});
