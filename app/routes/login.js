import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  car: service('login'),
  model(){
<<<<<<< HEAD
    users: service('login');
    console.log(this.get('users'));
    if(this.get('car')){
=======
    // console.log(this.get('car').items[0]);
    if(this.get('car').items.length > 0){
>>>>>>> ad648cddbc5116d4d0e935496953fa5264acdc93
      this.transitionTo('index');
    }
  }
});
