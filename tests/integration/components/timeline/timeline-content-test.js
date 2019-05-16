import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | Timeline Content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders and yields its content', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#timeline/timeline-content}}
        block text
      {{/timeline/timeline-content}}
    `);

    assert.equal(this.$('div.timeline-content').length, 1);
    assert.equal(this.$('div.timeline-content').text().trim(), 'block text');
  });

  test('it has the animate class by default', async function(assert) {
    assert.expect(1);

    await render(hbs`{{timeline/timeline-content}}`);

    assert.equal(this.$('div.timeline-content.animate').length, 1);
  });

  test('the animate class is bound as expected', async function(assert) {
    assert.expect(2);

    this.set('animate', false);

    await render(hbs`{{timeline/timeline-content animate=animate}}`);

    assert.equal(this.$('div.timeline-content.animate').length, 0);

    run(() => this.set('animate', true));

    assert.equal(this.$('div.timeline-content.animate').length, 1);
  });

  test('it yields the date component', async function(assert) {
    assert.expect(3);

    await render(hbs`
      {{#timeline/timeline-content as |content|}}
        {{#content.date}}10/10/2010{{/content.date}}
      {{/timeline/timeline-content}}
    `);

    assert.equal(this.$('div.timeline-content').length, 1);
    assert.equal(this.$('span.timeline-date').length, 1);
    assert.equal(this.$('span.timeline-date').text().trim(), '10/10/2010');
  });
});
