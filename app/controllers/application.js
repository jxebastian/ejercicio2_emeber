import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  users: service('login'),
  people: service('person-service'),
  actions:{
    logout(){
      if(this.get('users').items.length > 0){
        this.get('users').empty();
        this.get('people').empty();
        localStorage.removeItem("user");
        localStorage.removeItem("people");
        this.transitionToRoute('login');
      }
    }
  }
});
