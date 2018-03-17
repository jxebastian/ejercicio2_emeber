import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  car: service('login'),
  model(){
    // console.log(this.get('car').items[0]);
    if(this.get('car').size() > 0){
      this.transitionTo('index');
    }
  }
});
