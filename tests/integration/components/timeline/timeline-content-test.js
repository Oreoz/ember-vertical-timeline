import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timeline/timeline-content', 'Integration | Component | Timeline Content', {
  integration: true
});

test('it renders and yields its content', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#timeline/timeline-content}}
      block text
    {{/timeline/timeline-content}}
  `);

  assert.equal(this.$('div.timeline-content').length, 1);
  assert.equal(this.$('div.timeline-content').text().trim(), 'block text');
});

test('it has the animate class by default', function(assert) {
  assert.expect(1);

  this.render(hbs`{{timeline/timeline-content}}`);

  assert.equal(this.$('div.timeline-content.animate').length, 1);
});

test('the animate class is bound as expected', function(assert) {
  assert.expect(2);

  this.set('animate', false);

  this.render(hbs`{{timeline/timeline-content animate=animate}}`);

  assert.equal(this.$('div.timeline-content.animate').length, 0);

  run(() => this.set('animate', true));

  assert.equal(this.$('div.timeline-content.animate').length, 1);
});

test('it yields the date component', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#timeline/timeline-content as |content|}}
      {{#content.date}}10/10/2010{{/content.date}}
    {{/timeline/timeline-content}}
  `);

  assert.equal(this.$('div.timeline-content').length, 1);
  assert.equal(this.$('span.timeline-date').length, 1);
  assert.equal(this.$('span.timeline-date').text().trim(), '10/10/2010');
});
