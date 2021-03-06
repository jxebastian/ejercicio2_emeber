import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  car: service('login'),
  model(){
    if(this.get('car').items.length == 0){
       this.transitionTo('login');
    }
  }
});
