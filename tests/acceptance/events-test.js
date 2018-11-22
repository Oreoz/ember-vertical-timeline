import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | events', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it displays the events using the timeline', async function(assert) {
    assert.expect(2);

    this.server.createList('event', 5);

    await visit('/');

    assert.dom('[data-test-timeline]').exists();
    assert.dom('[data-test-timeline-block]').exists({ count: 5 });
  });
});
