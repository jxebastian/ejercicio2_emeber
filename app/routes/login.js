import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model(){
    console.log(this.get('car'));
    if(this.get('car')){
      this.transitionTo('index');
    }
  }
});
