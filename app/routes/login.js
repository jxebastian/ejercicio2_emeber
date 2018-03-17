import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model(){
    users: service('login');
    console.log(this.get('users'));
    if(this.get('car')){
      this.transitionTo('index');
    }
  }
});
