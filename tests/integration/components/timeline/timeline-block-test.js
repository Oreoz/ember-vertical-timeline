import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timeline/timeline-block', 'Integration | Component | Timeline Block', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#timeline/timeline-block}}
      template block text
    {{/timeline/timeline-block}}
  `);

    assert.equal(this.$('div.timeline-block').length, 1);
});

test('it yields the content component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#timeline/timeline-block as |block|}}
      {{#block.content}}

      {{/block.content}}
    {{/timeline/timeline-block}}
  `);

    assert.equal(this.$('div.timeline-block').length, 1);
    assert.equal(this.$('div.timeline-content').length, 1);
});

test('it yields the image component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#timeline/timeline-block as |block|}}
      {{#block.image}}{{/block.image}}

      {{block.image}}
    {{/timeline/timeline-block}}
  `);

    assert.equal(this.$('div.timeline-block').length, 1);
    assert.equal(this.$('div.timeline-image').length, 2);
});

test('it is possible to build a timeline block with an image and a content', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#timeline/timeline-block as |block|}}
      {{block.image}}

      {{#block.content}}{{/block.content}}
    {{/timeline/timeline-block}}
  `);

    assert.equal(this.$('div.timeline-block').length, 1);
    assert.equal(this.$('div.timeline-image').length, 1);
});
