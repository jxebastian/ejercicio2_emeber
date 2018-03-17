import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  people: service('person-service'),
  actions: {
    register(){
      const name = $('#name').val();
      const sex = $('#sex').val();
      const salary = $('#salary').val();
      const json = {name, sex, salary};
      this.get('people').add(json);
      $('#name').val('');
      $('#sex').val('');
      $('#salary').val('');
    },
  },
});
