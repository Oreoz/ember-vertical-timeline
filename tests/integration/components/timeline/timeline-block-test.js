import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | Timeline Block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#timeline/timeline-block}}
        template block text
      {{/timeline/timeline-block}}
    `);

      assert.equal(this.$('div.timeline-block').length, 1);
  });

  test('it yields the content component', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#timeline/timeline-block as |block|}}
        {{#block.content}}

        {{/block.content}}
      {{/timeline/timeline-block}}
    `);

      assert.equal(this.$('div.timeline-block').length, 1);
      assert.equal(this.$('div.timeline-content').length, 1);
  });

  test('it yields the image component', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#timeline/timeline-block as |block|}}
        {{#block.image}}{{/block.image}}

        {{block.image}}
      {{/timeline/timeline-block}}
    `);

      assert.equal(this.$('div.timeline-block').length, 1);
      assert.equal(this.$('div.timeline-image').length, 2);
  });

  test('it is possible to build a timeline block with an image and a content', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#timeline/timeline-block as |block|}}
        {{block.image}}

        {{#block.content}}{{/block.content}}
      {{/timeline/timeline-block}}
    `);

      assert.equal(this.$('div.timeline-block').length, 1);
      assert.equal(this.$('div.timeline-image').length, 1);
  });
});
