import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('timeline/timeline-image', 'Integration | Component | Timeline Image', {
  integration: true
});

test('it renders using the inline syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`{{timeline/timeline-image}}`);

  assert.equal(this.$('div.timeline-image').length, 1);
});

test('it renders using the block syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#timeline/timeline-image}}
      template block text
    {{/timeline/timeline-image}}
  `);

  assert.equal(this.$('div.timeline-image').length, 1);
});

test('it has the animate class by default', function(assert) {
  assert.expect(1);

  this.render(hbs`{{timeline/timeline-image}}`);

  assert.equal(this.$('div.timeline-image.animate').length, 1);
});

test('the animate class is bound as expected', function(assert) {
  assert.expect(2);

  this.set('animate', false);

  this.render(hbs`{{timeline/timeline-image animate=animate}}`);

  assert.equal(this.$('div.timeline-image.animate').length, 0);

  run(() => this.set('animate', true));

  assert.equal(this.$('div.timeline-image.animate').length, 1);
});
