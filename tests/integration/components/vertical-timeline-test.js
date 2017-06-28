import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vertical-timeline', 'Integration | Component | vertical timeline', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{vertical-timeline}}`);

  assert.equal(this.$('section.vertical-timeline').length, 1);
});
