import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  users: service('login'),
  actions:{
    logout(){
      if(this.get('users').items.length > 0){
        this.get('users').empty();
        localStorage.removeItem("user");
        this.transitionToRoute('login');
      }
    }
  }
});
