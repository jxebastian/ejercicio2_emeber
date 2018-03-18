import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  sesion: service('login'),
  model(){
    if(this.get('sesion').items.length > 0){
       this.transitionTo('index');
    }
  }
});
