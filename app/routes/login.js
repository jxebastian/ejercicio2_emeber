import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  car: service('login'),
  model(){
    users: service('login');
    console.log(this.get('users'));
    // console.log(this.get('car').items[0]);
    if(this.get('car').items.length > 0){
      this.transitionTo('index');
    }
  }
});
