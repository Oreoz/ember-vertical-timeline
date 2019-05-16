import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | Timeline Image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders using the inline syntax', async function(assert) {
    assert.expect(1);

    await render(hbs`{{timeline/timeline-image}}`);

    assert.equal(this.$('div.timeline-image').length, 1);
  });

  test('it renders using the block syntax', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#timeline/timeline-image}}
        template block text
      {{/timeline/timeline-image}}
    `);

    assert.equal(this.$('div.timeline-image').length, 1);
  });

  test('it has the animate class by default', async function(assert) {
    assert.expect(1);

    await render(hbs`{{timeline/timeline-image}}`);

    assert.equal(this.$('div.timeline-image.animate').length, 1);
  });

  test('the animate class is bound as expected', async function(assert) {
    assert.expect(2);

    this.set('animate', false);

    await render(hbs`{{timeline/timeline-image animate=animate}}`);

    assert.equal(this.$('div.timeline-image.animate').length, 0);

    run(() => this.set('animate', true));

    assert.equal(this.$('div.timeline-image.animate').length, 1);
  });
});
