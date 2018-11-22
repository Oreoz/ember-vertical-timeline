import { Factory, faker } from 'ember-cli-mirage';
import { capitalize } from '@ember/string';

export default Factory.extend({

  date: () => faker.date.future(),
  title: () => capitalize(faker.lorem.word()),
  description: () => faker.lorem.sentences()

});
