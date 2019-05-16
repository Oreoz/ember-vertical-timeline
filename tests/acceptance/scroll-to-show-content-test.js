import { module, skip } from 'qunit';
import { visit, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | scroll to show content', function(hooks) {
  setupApplicationTest(hooks);

  skip('as a 👩‍💻, I want the content to bounce in when it is in the viewport', async function(assert) {
    await visit('/');

    assert.dom('.timeline-content').exists({ count: 5 });

    assert.dom('.timeline-content.bounce-in').doesNotExist();
    assert.dom('.timeline-content.is-hidden').exists({ count: 5 });

    await settled();

    assert.dom('.timeline-content.bounce-in').exists({ count: 2 });
    assert.dom('.timeline-content.is-hidden').exists({ count: 3 });
  });
});
