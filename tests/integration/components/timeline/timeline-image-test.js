import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | Timeline Image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders using the inline syntax', async function(assert) {
    await render(hbs`{{timeline/timeline-image}}`);

    assert.dom('div.timeline-image').exists();
  });

  test('it renders using the block syntax', async function(assert) {
    await render(hbs`
      {{#timeline/timeline-image}}
        yielded text
      {{/timeline/timeline-image}}
    `);

    assert.dom('div.timeline-image').exists();
    assert.dom('div.timeline-image').hasText('yielded text');
  });

  test('it has the animate class by default', async function(assert) {
    await render(hbs`{{timeline/timeline-image}}`);

    assert.dom('div.timeline-image.animate').exists();
  });

  test('the animate class is bound as expected', async function(assert) {
    this.set('animate', false);

    await render(hbs`{{timeline/timeline-image animate=animate}}`);

    assert.dom('div.timeline-image.animate').doesNotExist();

    this.set('animate', true);

    assert.dom('div.timeline-image.animate').exists();
  });
});
