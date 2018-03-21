import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  people: service('person-service'),
  actions:{

    remove(item) {
      this.get('people').remove(item);
    },
    
  },
});
